from django.contrib import admin

from .models import Restaurant, RestaurantType


@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'address', 'telephone',)
    search_fields = ('name', 'address', 'telephone')
    list_filter = ('type',)


@admin.register(RestaurantType)
class RestaurantTypeAdmin(admin.ModelAdmin):
    list_display = ('type',)
