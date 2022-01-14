from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from product.models import ProductModel
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from .serializers import ProductSerializer
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
import json
from django.http import HttpResponse

# Create your views here.
# @csrf_exempt
class ProductView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            a = ProductModel.objects.create(
                tags=serializer.data['tags'],
                productName=serializer.data['productName'],
                description=serializer.data['description'],
                sellingPrice=serializer.data['sellingPrice'],
                discountPrice=serializer.data['discountPrice'],
                image1=request.data['image1'],
                image2=request.data['image2'],
                image3=request.data['image3'],
                image4=request.data['image4']
            )
            print(a.getFile())
            a.save()
            return JsonResponse({"message":"Product Saved"}, status=200)
        return JsonResponse({"error":"Product is not Saved"}, status=400)


@csrf_exempt
def getProducts(request):
    data = JSONParser().parse(request)
    # data = json.loads(request.body.decode('utf-8'))
    qs = ProductModel.objects.all()
    serializer = ProductSerializer(qs, many=True)
    li=[]
    for u in serializer.data:
        tags = u['tags']
        list = tags.split(", ")
        for a in list:
            if a==data['search']:
                li.append(u)
                break
    return JsonResponse(li, status=200, safe=False)