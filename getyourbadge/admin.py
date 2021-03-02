from django.contrib import admin
from .models import Profile
from import_export.admin import ImportExportModelAdmin
from import_export import resources

class ProfileResource(resources.ModelResource):

    class Meta:
        model = Profile


class ProfileAdmin(ImportExportModelAdmin):
    resource_class = ProfileResource

admin.site.register(Profile, ProfileAdmin)