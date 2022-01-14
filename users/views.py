from django.shortcuts import render,redirect
# from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
import users
from .forms import UserRegistrationForm
from django.contrib.auth.decorators import login_required
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .serializers import UserSerializers
from django.views.decorators.csrf import get_token
from .models import UserModel
from .serializers import UserS


# Create your views here.
@csrf_exempt
def register(request):
    # classes wil be converted to the html
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UserSerializers(data=data)
        isSafe=""
        if serializer.is_valid():
            isSafe = serializer.isSafe()
        if isSafe == "valid":
            user = UserModel(
                username=serializer.data['username'],
                email=serializer.data['email'],
                password=serializer.data['password1']
            )
            user.save()
            print(serializer.data)
            content = {
                'username':serializer.data['username'],
                'isValid':True
            }
            return JsonResponse(content, status=200)
        else:
            content = {
                'error':isSafe,
                'isValid':False
            }
            return JsonResponse(content, status=400)

def getToken(request):
    return JsonResponse({"token":get_token(request)})

@csrf_exempt
def login(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        qs = UserModel.objects.all()
        serializer = UserS(qs, many=True)
        for u in serializer.data:
            if u['username']==data['username'] and u['password']==data['password']:
                content = {
                    "username":data['username'],
                    "isValid":True
                }
                return JsonResponse(content, status=200)
        return JsonResponse({"message":"Username or password did not match", "isValid":False}, status=400)

# decorator is added here so that we can prevent from going profile directly by urls
@login_required
def profile(request):
    return render(request,'users/profile.html')
