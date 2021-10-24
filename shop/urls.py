
from django.urls import path
from . import views

urlpatterns = [
    path(r'^shop$',views.home , name= 'shop-home'),
    path(r'^shop/about$',views.about , name= 'shop-about'),
]

