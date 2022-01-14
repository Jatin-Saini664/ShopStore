from django.db import models

# Create your models here.

class ProductModel(models.Model):
    tags = models.TextField(null=True)
    productName = models.TextField(null=True)
    description = models.TextField(null=True)
    sellingPrice = models.IntegerField(null=True)
    discountPrice = models.IntegerField(null=True)
    image1 = models.ImageField(upload_to="post_images")
    image2 = models.ImageField(upload_to="post_images")
    image3 = models.ImageField(upload_to="post_images")
    image4 = models.ImageField(upload_to="post_images")

    def __str__(self):
        return self.productName
    
    def getFile(self):
        return self.image1
