from django.contrib.auth.models import User, Group
from rest_framework import serializers
from quickstart.models import Contact


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class ContactSerializer(serializers.Serializer):
    pk = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    phone_number = serializers.CharField(max_length=100)
    image_name = serializers.CharField(max_length=255, allow_blank=True, required=False)

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Contact.objects.create(**validated_data)
