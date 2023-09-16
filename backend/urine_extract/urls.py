from django.urls import path
from .views import SampleUploadView

urlpatterns = [
    path('urine/', SampleUploadView.as_view())
]
