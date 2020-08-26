from django.db import models

# Create your models here.

class usuario(models.Model):
    id = models.AutoField(primary_key=True)
    correo = models.EmailField()
    password = models.CharField(max_length=10)

class Pais(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)

class Estado(models.Model):
    idEstado = models.AutoField(primary_key=True)
    idPais = models.ForeignKey(Pais,on_delete=models.CASCADE)
    nombreEstado = models.CharField(max_length=50)

class datosUsuario(models.Model):
    id_usuario = models.ForeignKey(usuario,on_delete=models.CASCADE)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    fechaNacimiento = models.DateField()
    idPais = models.ForeignKey(Pais,on_delete=models.CASCADE)

class Experiencia(models.Model):
    id_usuario = models.ForeignKey(usuario,on_delete=models.CASCADE)
    lugar = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=50)
    fechaInicio = models.DateTimeField()
    fechaTermino = models.DateTimeField()

