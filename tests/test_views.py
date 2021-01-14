from django.test import TestCase, Client
from django.urls import reverse


class TestView(TestCase):
    """Test the views"""

    def setup(self):
        self.client = Client()

    def test_index_GET(self):
        """Test that correct html file is rendered"""
        response = self.client.get(reverse("index"))

        # assert that successfully render
        self.assertEquals(response.status_code, 200)

        # assert the HTML file rendered
        self.assertTemplateUsed(response, "webpages/index.html")