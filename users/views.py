from django.shortcuts import render,redirect
# from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
import users
from .forms import UserRegistrationForm
from django.contrib.auth.decorators import login_required


# Create your views here.

def register(request):
    # classes wil be converted to the html
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Your Account has been created ! You are now able to login')
            return redirect('user-login')
    else:
        form = UserRegistrationForm()

    context = {
        'form':form
    }
    return render(request,'users/register.html',context)

# decorator is added here so that we can prevent from going profile directly by urls
@login_required
def profile(request):
    return render(request,'users/profile.html')
