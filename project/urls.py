"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from re import template
from django.contrib import admin
from django.urls import path,include
from users import views as user_views
from seller import views as seller_views
from product import views as product_views
from django.contrib.auth import views as auth_views
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('shop.urls')),
    path('register', user_views.register , name= 'user-register'),
    path('custRegister', seller_views.register , name= 'user-register'),
    path('login', user_views.login , name= 'user-login'),
    path('custLogin', seller_views.login , name= 'user-login'),
    path('registerProduct', product_views.ProductView.as_view() , name= 'product-register'),
    path('getProducts', product_views.getProducts , name= 'get-products'),
    path('profile/', user_views.profile , name= 'user-profile'),
    # path('login/', auth_views.LoginView.as_view(template_name='users/login.html') , name= 'user-login'),
    
    path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html') , name= 'user-logout'),
    path('gettoken', user_views.getToken)
]

# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
if settings.DEBUG == True:
    urlpatterns+= static(settings.MEDIA_URL , document_root=settings.MEDIA_ROOT)
