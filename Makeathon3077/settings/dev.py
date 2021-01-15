from Makeathon3077.settings.base import *
import environ
import os

env = environ.Env(
    # set casting, default value
    DEBUG=(bool, False)
)
# reading .env file
environ.Env.read_env(env_file=os.path.join(BASE_DIR, "./.env"))

# False if not in os.environ
DEBUG = env('DEBUG')

# Raises django's ImproperlyConfigured exception if SECRET_KEY not in os.environ
SECRET_KEY = env('SECRET_KEY')


ALLOWED_HOSTS = []
