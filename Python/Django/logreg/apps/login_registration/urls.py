from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.loginPage),
    url(r'^success$', views.success),
    url(r'^login$', views.login),
    url(r'^registration$', views.register),
    url(r'^logout$', views.logout),
]