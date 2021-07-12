#forms
from django import forms
from django.forms.widgets import Select
#otros
from getpass import getpass,GetPassWarning

#modelos
from .models import usuario,datosUsuario,Experiencia,Estado,Pais

"""
class nombreform(forms.ModelForm):
    class Meta:
        model = #nombremodelo
        fields=[
            '', #campos del modelo
            '',
        ]
        labels={
            '':'', # 'nombre de att modelo':'nombre q vera el usuario',
            '':'',
        }
        widgets={
            '':forms. #como lo representa y renderiza el html
            '':forms.
        }
"""
class usuarioform(forms.ModelForm):
    #password = forms.CharField(widget=forms.PasswordInput)
    class Meta:
        model = usuario
        fields = [
            'correo',
            'password',
        ]
        labels ={
            'correo':'Correo:',
            'password':'Contraseña:',
        }
        widgets ={
            'correo':forms.EmailInput(attrs={'required':True}),
            'password':forms.PasswordInput(attrs={'required':True}),
        }

class datosUsuarioform(forms.ModelForm):
    class Meta:
        model = datosUsuario
        BYears = ['1975','1975','1976','1977','1978','1979','1980','1981','1982','1983','1984','1985','1986','1987',
        '1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003',
        '2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019',
        '2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030',
        ]
        fields=[
            'nombre', #campos del modelo
            'apellido',
            'fechaNacimiento',
            'idPais',
            'idEstado',
        ]
        labels={
            'nombre':'Nombre:', # 'nombre de att modelo':'nombre q vera el usuario',
            'apellido':'Apellido:',
            'fechaNacimiento':'Fecha Nacimiento:',
            'idPais':'Pais:',
            'idEstado':'Estado:',
        }
        widgets={
            'nombre':forms.TextInput(attrs={'class':'form-control'}) , #como lo representa y renderiza el html
            'apellido':forms.TextInput(attrs={'class':'form-control'}) ,
            'fechaNacimiento':forms.SelectDateWidget(years=BYears,empty_label=("Año", "Mes", "Dia")),
            'idPais':forms.Select(attrs={'class':'form-control'}),
            'idEstado': forms.Select(attrs={'class':'form-control'}) ,
        }