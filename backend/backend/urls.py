from django.urls import path
from .views import get_products, create_user_profile, record_swipe, get_recommendations

urlpatterns = [
    path('products/', get_products, name='get_products'),
    path('users/', create_user_profile, name='create_user_profile'),
    path('swipes/', record_swipe, name='record_swipe'),
    path('recommendations/<str:user_id>/', get_recommendations, name='get_recommendations'),
]
