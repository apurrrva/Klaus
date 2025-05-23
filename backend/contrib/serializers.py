from rest_framework import serializers
from .models import UserProfile, Swipe, Recommendation

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user_id', 'name', 'age', 'gender', 'keywords', 'budget_min', 'budget_max']

class SwipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Swipe
        fields = ['user', 'product_id', 'status']

class RecommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = ['product_id', 'score']
