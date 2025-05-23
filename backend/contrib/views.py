from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.feature_extraction.text import TfidfVectorizer
from .models import UserProfile, Swipe, Recommendation
from .serializers import UserProfileSerializer, SwipeSerializer, RecommendationSerializer

@api_view(['GET'])
def get_products(request):
    # Fetch products from Fake Store API
    response = requests.get('https://fakestoreapi.com/products')
    if response.status_code == 200:
        return Response(response.json())
    return Response({'error': 'Failed to fetch products'}, status=500)

@api_view(['POST'])
def create_user_profile(request):
    serializer = UserProfileSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def record_swipe(request):
    serializer = SwipeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        # Update recommendations after each swipe
        update_recommendations(serializer.validated_data['user'])
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def get_recommendations(request, user_id):
    try:
        user = UserProfile.objects.get(user_id=user_id)
        recommendations = Recommendation.objects.filter(user=user).order_by('-score')[:10]
        serializer = RecommendationSerializer(recommendations, many=True)
        # Fetch product details for recommendations
        response = requests.get('https://fakestoreapi.com/products')
        if response.status_code != 200:
            return Response({'error': 'Failed to fetch products'}, status=500)
        products = {str(p['id']): p for p in response.json()}
        enriched_recommendations = [
            {**products.get(rec['product_id'], {}), 'score': rec['score']}
            for rec in serializer.data
        ]
        return Response(enriched_recommendations)
    except UserProfile.DoesNotExist:
        return Response({'error': 'User not found'}, status=404)

def update_recommendations(user):
    # Fetch products from Fake Store API
    response = requests.get('https://fakestoreapi.com/products')
    if response.status_code != 200:
        return
    
    products = response.json()
    # Prepare data for clustering
    product_data = []
    for product in products:
        product_id = str(product['id'])
        category = product.get('category', '').lower()
        description = product.get('description', '').lower()
        price = product.get('price', 0)
        product_data.append({
            'product_id': product_id,
            'text': f"{category} {description}",
            'price': price
        })
    
    # Feature extraction
    df = pd.DataFrame(product_data)
    vectorizer = TfidfVectorizer(max_features=100)
    text_features = vectorizer.fit_transform(df['text']).toarray()
    price_features = np.array(df['price']).reshape(-1, 1) / np.max(df['price'])  # Normalize prices
    features = np.hstack([text_features, price_features])
    
    # KMeans clustering
    n_clusters = min(5, len(products))  # Adjust based on product count
    kmeans = KMeans(n_clusters=n_clusters, random_state=42)
    df['cluster'] = kmeans.fit_predict(features)
    
    # Get user's swipe history
    swipes = Swipe.objects.filter(user=user).values('product_id', 'status')
    swipe_scores = {swipe['product_id']: 1 if swipe['status'] == 'right' else -1 for swipe in swipes}
    
    # Clear old recommendations
    Recommendation.objects.filter(user=user).delete()
    
    # Generate recommendations
    user_keywords = user.keywords
    user_vector = vectorizer.transform([' '.join(user_keywords)]).toarray()
    user_price = (float(user.budget_min) + float(user.budget_max)) / 2 / np.max(df['price'])
    user_features = np.hstack([user_vector, [[user_price]]])
    user_cluster = kmeans.predict(user_features)[0]
    
    recommendations = []
    for _, row in df.iterrows():
        product_id = row['product_id']
        score = 0
        
        # Cluster matching
        if row['cluster'] == user_cluster:
            score += 0.4
        
        # Keyword matching
        product_keywords = row['text'].split()
        keyword_matches = len(set(product_keywords) & set(user_keywords)) / len(user_keywords) if user_keywords else 0
        score += keyword_matches * 0.3
        
        # Budget matching
        price = row['price']
        if float(user.budget_min) <= price <= float(user.budget_max):
            score += 0.2
        
        # Swipe history
        swipe_score = swipe_scores.get(product_id, 0)
        score += swipe_score * 0.1
        
        # Normalize score
        score = min(max(score, 0), 1)
        
        if score > 0:
            Recommendation.objects.create(
                user=user,
                product_id=product_id,
                score=score
            )
