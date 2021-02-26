from django.urls import path
from .views import index
from django.conf import settings

urlpatterns = []

if settings.DEBUG:
    urlpatterns += [path('', index, name='index-testing')]

