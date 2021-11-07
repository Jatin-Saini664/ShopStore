from django.shortcuts import render
from rest_framework.response import Response
from django.http import HttpResponse
from .models import ShopDetails
from .serializers import *
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
detail=[
    {
        'owner':'Balaji',
        'title':'shop 1',
        'content':'this is first shop',
        'date_posted':'October 1 2021'
    },
    {
        'owner':'Aggarwalji',
        'title':'shop 2',
        'content':'this is second shop',
        'date_posted':'October 2 2021'
    }
]

def home(request):
    if request.method == "GET":
        shop = ShopDetails.objects.all()
        serializer = ShopSerializer(shop, many=True)
        # print(serializer.data)
        # print("hello")
        return JsonResponse(serializer.data, safe=False)

# '@csrf_exempt'
def create(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        serializer = ShopSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=200)
        return JsonResponse(serializer.errors, status=400)


class Home(APIView):
    serializer_class = ShopSerializer

    def get(self, request, format=None):
        
        # print(a)
        shop = ShopDetails.objects.all()
        # ShopDetails('')
        # print(shop)
        serializer = ShopSerializer(a)
        # return Response(detail, status=status.HTTP_200_OK)
        return JSONRenderer().render(serializer.data)

class Create(APIView):
    serializer_class = CreateSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            title = serializer.data.get('title')
            content = serializer.data.get("content")
            shop = ShopDetails(title=title, content=content)
            shop.save()
            return Response(ShopSerializer(title, content).data, status=status.HTTP_201_CREATED)
        
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

def about(request):
    return render(request,'shop/about.html')






