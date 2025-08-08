from django.contrib import admin
from portfolio.models import Contacts

# Register your models here.

@admin.register(Contacts)
class ContactsAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'email', 'message', 'date']