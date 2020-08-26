# Generated by Django 3.0.8 on 2020-08-23 21:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pais',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='usuario',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('correo', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Experiencia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lugar', models.CharField(max_length=50)),
                ('descripcion', models.CharField(max_length=50)),
                ('fechaInicio', models.DateTimeField()),
                ('fechaTermino', models.DateTimeField()),
                ('id_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuario.usuario')),
            ],
        ),
        migrations.CreateModel(
            name='Estado',
            fields=[
                ('idEstado', models.AutoField(primary_key=True, serialize=False)),
                ('nombreEstado', models.CharField(max_length=50)),
                ('idPais', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuario.Pais')),
            ],
        ),
        migrations.CreateModel(
            name='datosUsuario',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=50)),
                ('fechaNacimiento', models.DateField()),
                ('idPais', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuario.Pais')),
                ('id_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuario.usuario')),
            ],
        ),
    ]
