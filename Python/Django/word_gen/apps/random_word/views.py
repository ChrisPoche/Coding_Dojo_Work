from __future__ import unicode_literals
from django.shortcuts import render, redirect, HttpResponse
from django.utils.crypto import get_random_string

def index(request):
    random_word = get_random_string(length=14)
    if 'counter' not in request.session:
        request.session['counter'] = 1
    elif request.session['counter'] >= 1:
        request.session['counter'] += 1
    context = {
        'random_word' : random_word,
        'attempt_number' : request.session['counter'],
    }
    return render(request, 'random_word/index.html', context)
def create(request):
    return redirect('/')
def delete(request):
    request.session.clear()
    return redirect('/')