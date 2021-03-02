from Makeathon3077.settings.base import *  # noqa
import os
import dj_database_url

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get(
    "DJANGO_SECRET_KEY", "p7g_g$a7^qfn!zxc&h+fbvy*0+@trz7)pkr#54elu!1u#rg@tq"
)

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get("DJANGO_DEBUG", "") != "False"

ALLOWED_HOSTS = ["makeathonmlsc.herokuapp.com", "makeathon3077.msctiet.co.in","makeathon3077.mlsctiet.co.in"]

STATICFILES_STORAGE = 'whitenoise.storage.CompressedStaticFilesStorage'

db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES["default"].update(db_from_env)  # noqa
