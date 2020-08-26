from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from django.views import generic

from .models import usuario,datosUsuario,Experiencia,Pais,Estado
# Create your views here.




 