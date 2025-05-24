from contrib.views import char_count
from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from contrib.views import signup_api

urlpatterns = [
    path("admin/", admin.site.urls),
    path("char_count", char_count, name="char_count"),
    path('signup_api/', signup_api, name='signup_api'),
    # re_path(".*", TemplateView.as_view(template_name="index.html")),
]
