from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


# Create your models here.
class ShopDetails(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    # date_posted = models.DateTimeField(auto_now=True)
    # it will update time every time shoppis updated

    # date_posted = models.DateTimeField(auto_now_add==True)
    # cant update once time is marked even we can't change it
    
    date_posted = models.DateTimeField(default=timezone.now)

    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


