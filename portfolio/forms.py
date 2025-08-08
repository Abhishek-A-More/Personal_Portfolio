import re
from django import forms
from portfolio.models import Contacts

class ContactsForm(forms.ModelForm):
    class Meta:
        model = Contacts
        fields = ('name', 'email', 'message')

        widgets = {
            'name':forms.TextInput(attrs={'placeholder':'enter name', 'class':'form-control bg-transparent border border-dark focus-ring focus-ring-dark'}),
            'email':forms.EmailInput(attrs={'placeholder':'enter email', 'class':'form-control bg-transparent border border-dark focus-ring focus-ring-dark'}),
            'message':forms.Textarea(attrs={'placeholder':'enter message', 'rows':'5', 'class':'form-control no-resize bg-transparent border border-dark overflow-auto focus-ring focus-ring-dark'})
        }

    def clean_name(self):
            name = self.cleaned_data.get("name")
            # Regular expression: Allows only alphabets and spaces (no numbers, dots, or special characters)
            if not re.match(r"^[A-Za-z\s]+$", name):
                raise forms.ValidationError("Name can only contain letters and spaces.")
            
            return name

