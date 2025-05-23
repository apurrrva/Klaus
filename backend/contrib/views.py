from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
from .models import UserProfile, Swipe, Recommendation
from django.db.models import Count
from .serializers import UserProfileSerializer, SwipeSerializer, RecommendationSerializer

@api_view(['GET'])
def get_products(request):
    # Fetch products from Fake Store API
    response = requests.get('https://fakestoreapi.com/products')
    if response.status_code == 200:
        return Response(response.json())
    return Response({'error': 'Failed to fetch products'}, status=500)

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
        return Response(serializer.data)
    except UserProfile.DoesNotExist:
        return Response({'error': 'User not found'}, status=404)

def update_recommendations(user):
    # Clear old recommendations
    Recommendation.objects.filter(user=user).delete()
    
    # Fetch products from Fake Store API
    response = requests.get('https://fakestoreapi.com/products')
    if response.status_code != 200:
        return
    
    products = response.json()
    # Get user's swipe history
    swipes = Swipe.objects.filter(user=user).values('product_id', 'status')
    swipe_scores = {swipe['product_id']: 1 if swipe['status'] == 'right' else -1 for swipe in swipes}
    
    # Simple recommendation logic
    recommendations = []
    for product in products:
        product_id = str(product['id'])
        score = 0
        
        # Keyword matching
        product_keywords = product.get('category', '').lower().split() + product.get('description', '').lower().split()
        user_keywords = user.keywords
        keyword_matches = len(set(product_keywords) & set(user_keywords)) / len(user_keywords) if user_keywords else 0
        score += keyword_matches * 0.6
        
        # Budget matching
        price = product.get('price', 0)
        if user.budget_min <= price <= user.budget_max:
            score += 0.3
        
        # Swipe history influence
        swipe_score = swipe_scores.get(product_id, 0)
        score += swipe_score * 0.1
        
        # Ensure score is between 0 and 1
        score = min(max(score, 0), 1)
        
        if score > 0:
            Recommendation.objects.create(
                user=user,
                product_id=product_id,
                score=score
            )
