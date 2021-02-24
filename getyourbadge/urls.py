from django.urls import path
from .views import badge

urlpatterns = [
    path("", badge, name="badge"),
]
