from rest_framework import serializers
from .models import SellerValidationModel
from .models import SellerModel

class SellerSerializers(serializers.ModelSerializer):
    class Meta:
        model = SellerValidationModel
        fields = ['username', 'email', 'password1', 'password2']

    def isSafe(self):
        email = self.data['email']
        email_present = SellerModel.objects.filter(email=email)
        
        if email_present.exists():
            return "email not present"

        if self.data['password1'] != self.data['password2']:
            return "password not matched"

        return "valid"

class SellerS(serializers.ModelSerializer):
    class Meta:
        model = SellerModel
        fields = ['username', 'email', 'password']

