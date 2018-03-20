from __future__ import unicode_literals
from django.shortcuts import render, redirect, HttpResponse
import random, math, datetime

def index(request):
    collect = 0
    request.session['time'] = datetime.datetime.now().strftime('%Y/%m/%d %H:%M %p')
    if 'locale' not in request.session:
        request.session['locale'] = ''
    if 'gold' not in request.session:
        request.session['gold'] = 0
    if request.session['locale'] == 'farm':
        collect = int(math.floor(random.uniform(10,20)))
        request.session['gold'] += collect 
    elif request.session['locale'] == 'cave':
        collect = int(math.floor(random.uniform(5,10)))
        request.session['gold'] += collect 
    elif request.session['locale'] == 'house':
        collect = int(math.floor(random.uniform(2,5)))
        request.session['gold'] += collect
    elif request.session['locale'] == 'casino':
        collect = int(math.floor(random.uniform(-50,50)))
        request.session['gold'] += collect
    if collect > 0:
        request.session['action'] = {'name' : "Earned {} from the {}! {}".format(collect, request.session['locale'], request.session['time']), 'color' : 'green'}
        request.session['activity_log'].insert(0,request.session['action'])
    if request.session['locale'] == '':
        request.session['action'] = {'name' : "A new beginning...", 'color' : 'black'}
        request.session['activity_log'].insert(0,request.session['action'])
    elif collect <= 0:
        request.session['action'] = {'name' : "Entered a casino and lost {} gold... Ouch. {}".format(collect, request.session['time']), 'color':'red'}
        request.session['activity_log'].insert(0,request.session['action'])
    context = {
        'activity_log' : request.session['activity_log'],
        'activity' : request.session['action'],
        'total_gold' : request.session['gold'],
    }
    return render(request, 'ninja_collect/index.html', context)
def farm(request):
    request.session['locale'] = 'farm'
    return redirect('/', request.session['locale'])
def cave(request):
    request.session['locale'] = 'cave'
    return redirect('/', request.session['locale'])
def house(request):
    request.session['locale'] = 'house'
    return redirect('/', request.session['locale'])
def casino(request):
    request.session['locale'] = 'casino'
    return redirect('/', request.session['locale'])
def Reset(request):
    request.session['gold'] = 0
    request.session['locale'] = ''
    request.session['activity_log'] = []
    return redirect('/')