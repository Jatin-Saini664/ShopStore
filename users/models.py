from django.db import models

# Create your models here.

class UserModel(models.Model):
    username = models.CharField(max_length=30)
    email = models.EmailField()
    password = models.CharField(max_length=15)
    # password2 = models.CharField(max_length=15)

class UserValidationModel(models.Model):
    username = models.CharField(max_length=30)
    email = models.EmailField()
    password1 = models.CharField(max_length=15)
    password2 = models.CharField(max_length=15)



