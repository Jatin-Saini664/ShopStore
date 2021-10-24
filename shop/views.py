from django.shortcuts import render
from rest_framework.response import Response
from django.http import HttpResponse
from .models import ShopDetails
from .serializers import *
from rest_framework.views import APIView
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
# class home(APIView):
#     serializer_class = ShopSerializer
#     def get(self, request):
#         return Response(serializer_class.data)

def home(request):
    # constext = {}
    if request.method == 'GET':
        # data = ShopDetails.objects.all()
        data = {
            'shop_details':ShopDetails.objects.all(),
            'title':"Home Page"
            # shop_details is accesible from the html file so we loop on the list
        }
        serializer = ShopSerializer(data, context={'request':request}, many=True)
        return Response(serializer.data)
        # return Response(context)
    # return render(request,'shop/home.html',context) # sub directory inside templates folder , returns http response or exception 

def about(request):
    return render(request,'shop/about.html')






