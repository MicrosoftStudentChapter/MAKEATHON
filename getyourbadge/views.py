from django.shortcuts import render
from django.http import JsonResponse
from .models import Profile


def badge(request):
    return render(request, "getyourbadge/index.html")


def ProfileDetails(request):
    if request.method == "GET":
        mail = request.headers["email"]
        try:
            profile = Profile.objects.get(email=mail)
        except Exception:
            return JsonResponse({
                "error": "Invalid email-id",
            })
        profile_obj = {
            "firstName": profile.firstName,
            "lastName": profile.lastName,
            "email": profile.email,
            "teamName": profile.teamName
        }
        return JsonResponse(profile_obj)
    return JsonResponse({"error": ":unamused: Not a GET request"})