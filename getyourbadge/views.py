from django.shortcuts import render


def badge(request):
    return render(request, "getyourbadge/index.html")
