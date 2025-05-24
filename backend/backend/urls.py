from contrib.views import char_count
from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from contrib.views import signup_view

urlpatterns = [
    path("admin/", admin.site.urls),
    path("char_count", char_count, name="char_count"),
    path('api/signup/', signup_view, name='signup') #CALL THE SIGNUP FUNCTION WHEN WE ARE ON THIS URLLLLL
    # re_path(".*", TemplateView.as_view(template_name="index.html")),
]

