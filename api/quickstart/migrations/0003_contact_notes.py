# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-04 23:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0002_auto_20161004_2311'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='notes',
            field=models.TextField(null=True),
        ),
    ]
