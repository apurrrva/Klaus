from django.http import JsonResponse
from .models import User

def char_count(request):
    text = request.GET.get("text", "")
    return JsonResponse({"count": len(text)})

def signup_api(request):
    if request.method == "POST":
        # Parse data from request.POST or json.loads(request.body)
        name = request.POST['name']
        password = request.POST['password']
        user = User.objects.create(name=name, age=age, password=password)
        return JsonResponse({'id': user.id, 'name': user.name})


