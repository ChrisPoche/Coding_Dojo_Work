from django.shortcuts import render, redirect, HttpResponse

def index(request):
    return render(request, 'blogs/index.html')
def new(request):
    return HttpResponse('You made it to the new page')
def create(request):
    if request.method == 'POST':
        print "*"*50
        print request.POST
        print request.POST['name']
        print request.POST['desc']
        request.session['name'] = request.POST['name']
        request.session['desc'] = request.POST['desc']
        print "*"*50
        if request.session['counter'] < 1: 
            request.session['counter'] = 1
        elif request.session['counter'] >= 1:
            request.session['counter'] += 1
        return redirect('/')
    else:
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