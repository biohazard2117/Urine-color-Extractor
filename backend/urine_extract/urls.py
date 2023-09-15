from django.urls import path
from .views import SampleUploadView

urlpatterns = [
    path('sample/', SampleUploadView.as_view())
]
