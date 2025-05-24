from django.http import JsonResponse
from .models import User
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
import json

def signup_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        if not username or not password:
            return JsonResponse({'success': False, 'error': 'Missing username or password.'}, status=400)
        if User.objects.filter(name=username).exists():
            return JsonResponse({'success': False, 'error': 'Username already exists.'}, status=400)
        user = User.objects.create(name=username, password=password) #add the user to the database
        return JsonResponse({'success': True, 'user_id': user.id})
    return JsonResponse({'detail': 'Method not allowed'}, status=405)

def char_count(request):
    text = request.GET.get("text", "")
    return JsonResponse({"count": len(text)})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')  # Change 'home' to your main page route
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('login')  # Change 'login' to your login route

@login_required
def home_view(request):
    return render(request, 'home.html')  # Render your main page