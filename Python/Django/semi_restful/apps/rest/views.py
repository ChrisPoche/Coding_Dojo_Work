# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from models import User

# Create your views here. 

def index(request):
    context = {
       'users' : User.objects.all(),
    }
    return render(request, 'rest/index.html', context)
def new(request):
    return render(request, 'rest/new.html')
def edit(request, id):
    context = {
        'user' : User.objects.get(id=id),
    }
    return render(request, 'rest/edit.html', context)
def show(request, id):
    context = {
        'user' : User.objects.get(id=id),
    }
    return render(request, 'rest/show.html', context)
def create(request):
    User.objects.create(first_name = request.POST['first_name'], last_name = request.POST['last_name'], email = request.POST['email'])   
    user = User.objects.get(first_name = request.POST['first_name'])
    return redirect('/{}'.format(user.id))
def destroy(request, id):
    User.objects.filter(id=id).delete()
    return redirect('/')
def update(request, id):
    user = User.objects.get(id=id)
    user.first_name = request.POST['first_name']
    user.last_name = request.POST['last_name']
    user.email = request.POST['email']
    user.save()
    return redirect('/{}'.format(user.id))