from Makeathon3077.settings.base import *
import os

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("DJANGO_SECRET_KEY", 'p7g_g$a7^qfn!zxc&h+fbvy*0+@trz7)pkr#54elu!1u#rg@tq')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get("DJANGO_DEBUG", "") != "False"

ALLOWED_HOSTS = []
