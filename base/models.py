from django.db import models


class RestaurantType(models.Model):
    type = models.CharField(max_length=16, unique=True)

    class Meta:
        ordering = ['-type']

    def __str__(self):
        return self.type


class Restaurant(models.Model):
    name = models.CharField(max_length=64, unique=True)
    type = models.ForeignKey(RestaurantType, on_delete=models.PROTECT)
    address = models.CharField(max_length=128)
    telephone = models.CharField(max_length=16, unique=True)

    class Meta:
        ordering = ['-type', '-name']

    def __str__(self):
        return self.name
