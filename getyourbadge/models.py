from django.db import models


class Profile(models.Model):
    """
    Badge profiles model
    """
    firstName = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    email = models.EmailField(
        max_length=255,
        unique=True,
        verbose_name="email address",
    )
    teamName = models.CharField(max_length=255)

    def __str__(self):
        return self.firstName