from django.shortcuts import render, redirect, HttpResponse

print "made it to views"

def index(request):
    print "made it to test"
    response = "You made it to the main blogs page!"
    return HttpResponse(response)
def new(request):
    return HttpResponse('You made it to the new page')
def create(request):
    return redirect('/')
def show(request, number):
    response = "Placeholder to display blog {}".format(number)
    return HttpResponse(response)
def edit(request, number):
    response = "placeholder to edit blog {}".format(number)
    return HttpResponse(response) 
def destroy(request, number):
    print "deleting blog {}".format(number)
    return redirect('/')