from rest_framework import serializers
from .models import ProductModel

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductModel
        # field = '__all__'
        fields = ['tags', 'productName', 'description', 'sellingPrice', 'discountPrice', 'image1', 'image2', 'image3', 'image4']