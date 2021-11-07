from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


# new forms so that we can add desired field like email and can make form according to us not like default
# class UserRegistrationForm(UserCreationForm):
class UserRegistrationForm(forms.ModelForm):
    # it inherits from UserceationForm
    # email = forms.EmailField()
    email = forms.EmailField()
    username = forms.CharField(max_length=25)
    password1 = forms.CharField(widget=forms.PasswordInput)
    password2 = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        # here we definew models we would interact with
        model = User
        fields= ['username','email','password1' ,'password2']







