from django.http import JsonResponse
from .models import User

def char_count(request):
    text = request.GET.get("text", "")
    return JsonResponse({"count": len(text)})

def signup_api(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))
            name = data.get("name")
            password = data.get("password")
            if not name or not password:
                return JsonResponse({"error": "Name and password required"}, status=400)
            hashed_password = make_password(password)
            user = User.objects.create(name=name, password=hashed_password) #make the user
            return JsonResponse({"id": user.id, "name": user.name})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    else:
        return JsonResponse({"error": "POST request required"}, status=405)


