from django.urls import path
from .views import baseview,home, skills

urlpatterns = [
    path('base/', baseview, name="base"),
    path('', home, name="home"),
    path('skills/', skills, name="skills"),
]
