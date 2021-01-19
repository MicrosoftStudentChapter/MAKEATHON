from django.test import SimpleTestCase
from django.urls import reverse, resolve
from webpages.views import index


class TestUrls(SimpleTestCase):
    """Tests for urls"""

    def test_index_url_resolves(self):
        """Test that index urls"""
        url = reverse("index")
        self.assertEquals(resolve(url).func, index)
