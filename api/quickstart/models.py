from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Contact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    birthday = models.DateField(null=True)
    phone_number = models.CharField(max_length=100, null=True)
    image_name = models.CharField(max_length=255, blank=True)
    child_contact = models.ManyToManyField("Contact")
    notes = models.TextField(null=True)

    def displayName(self):
        return u'%s, %s' % (self.last_name, self.first_name)

    def __unicode__(self):
        return self.displayName()


# class Notes(models.Model):
#     date
#     location
#     content
#
