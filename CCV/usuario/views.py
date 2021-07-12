from django.shortcuts import render
from django.contrib.messages.views import SuccessMessageMixin
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
# Create your views here.
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.decorators import login_required

from django.views.generic import CreateView, UpdateView, DetailView, DeleteView, ListView, TemplateView
from django.urls import reverse_lazy
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from django.contrib import messages
#import request
from django.db.models import Q

from .forms import usuarioform
from .models import usuario
# Create your views here.


class registro(CreateView):
    model = usuario
    template_name = 'usuario/registro.html'
    form_class = usuarioform
    success_url = reverse_lazy('inicio')

