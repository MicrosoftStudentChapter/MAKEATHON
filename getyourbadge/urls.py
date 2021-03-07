from django.urls import path
from .views import badge, ProfileDetails

urlpatterns = [
    path("", badge, name="badge"),
    path("profile/", ProfileDetails, name="profile")
]
