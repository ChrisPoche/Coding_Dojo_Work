from django.shortcuts import render, redirect, HttpResponse
from time import strftime

def index(request):
    context = {
        'date' : strftime("%b %d, %Y"),
        'time' : strftime("%H:%M %p %Z"),
    }
    return render(request, 'time_display/index.html', context)