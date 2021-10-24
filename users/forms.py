from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


# new forms so that we can add desired field like email and can make form according to us not like default
class UserRegistrationForm(UserCreationForm):
    # it inherits from UserceationForm
    email = forms.EmailField()

    class Meta:
        # here we definew models we would interact with
        model = User
        fields= ['username','email','password1' , 'password2']







