from django.shortcuts import render
from .forms import ContactsForm
from django.http import JsonResponse

# Create your views here.
def baseview(request):
    return render(request, 'portfolio/base.html')

def home(request):
     if request.method == "POST":
        form = ContactsForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({"success": True})  # Return JSON response
        return JsonResponse({"success": False, "errors": form.errors})  # Handle form errors
     else:
        form = ContactsForm()
     return render(request, 'portfolio/index.html', {'form':form})


def skills(request):
    return render(request, 'portfolio/skills.html')