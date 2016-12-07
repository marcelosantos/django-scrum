# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-07-24 19:07
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('scrumboard', '0004_list_project'),
    ]

    operations = [
        migrations.AddField(
            model_name='card',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
