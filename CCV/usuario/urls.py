
from django.urls import path, include
from django.conf.urls import url
from django.conf import settings

from . import views

urlpatterns =[
    path('registro',views.registro.as_view(),name = 'registro'),
]