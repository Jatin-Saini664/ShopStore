
from django.urls import path
from .views import *

urlpatterns = [
    path('shop',home),
    path('shop/create', create),
    path('shop/about',about , name='shop-about'),
]

