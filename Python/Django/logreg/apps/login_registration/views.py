# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect, HttpResponse
from models import User
from django.contrib import messages
import bcrypt

# Create your views here.
def loginPage(request):
    return render(request, 'login_registration/login.html')

def success(request):
    if request.session['logged_in_user'] == None:
        return redirect('/')
    context = {
        'logged_in_user' : request.session['logged_in_user'],
        'reg_or_log' : request.session['reg_or_log'],
    }
    return render(request, 'login_registration/success.html', context)

def login(request):
    if User.objects.filter(email = request.POST['email']):
        user = User.objects.get(email = request.POST['email'])
        login_password = request.POST['password'].encode('utf-8')
        hashed = user.hashedpw.encode('utf-8')
        if request.POST['email'] == user.email and bcrypt.hashpw(login_password, hashed) == hashed:
            print "Decryption", bcrypt.hashpw(login_password, hashed)
            request.session['logged_in_user'] = user.first_name
            request.session['reg_or_log'] = 'logged in'
            return redirect('/success')        
        else:
            messages.error(request, "Incorrect password for this email", extra_tags='passwordlogin')
            return redirect('/')
    else:
        messages.error(request, "There is no profile associated with this email", extra_tags='emaillogin')
        return redirect('/')

def register(request, method='POST'): #create
    request.session['first_name'] = request.POST['first_name']
    errors = User.objects.basic_validator(request.POST)
    print 'errors', errors
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('/')
    password = request.POST['password'].encode('utf-8')
    print "password", password
    hashed = bcrypt.hashpw(password, bcrypt.gensalt(12))
    print "hash", hashed
    user = User.objects.create(first_name = request.POST['first_name'], last_name = request.POST['last_name'], email = request.POST['email'], password = request.POST['password'], hashedpw = hashed)
    request.session['logged_in_user'] = user.first_name
    request.session['reg_or_log'] = 'registered'
    return redirect('/success')

def logout(request):
    request.session['logged_in_user'] = None
    return redirect('/')