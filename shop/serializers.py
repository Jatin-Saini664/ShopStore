from rest_framework import serializers
from .models import ShopDetails

class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopDetails
        fields = ['title', 'content', 'date_posted', 'owner']