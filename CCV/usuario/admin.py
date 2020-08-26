from django.contrib import admin

# Register your models here.
from .models import usuario,datosUsuario,Experiencia,Pais,Estado

admin.site.register(usuario)
admin.site.register(datosUsuario)
admin.site.register(Experiencia)
admin.site.register(Pais)
admin.site.register(Estado)