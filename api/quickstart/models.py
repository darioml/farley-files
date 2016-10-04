from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    image_name = models.CharField(max_length=255, blank=True)

    def __unicode__(self):
        return u'%s' % (self.name)
