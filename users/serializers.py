from rest_framework import serializers
from .models import UserValidationModel
from .models import UserModel

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = UserValidationModel
        fields = ['username', 'email', 'password1', 'password2']

    def isSafe(self):
        email = self.data['email']
        email_present = UserModel.objects.filter(email=email)
        
        if email_present.exists():
            return "email not present"

        if self.data['password1'] != self.data['password2']:
            return "password not matched"

        return "valid"

class UserS(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['username', 'email', 'password']

