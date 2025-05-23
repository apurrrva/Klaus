from django.contrib import admin
from django.urls import path, include
from .views import UserCreateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('contrib.urls')),
    path('api/users/', UserCreateView.as_view()),
]
