from django.urls import path
from .views import ProductView, HardwareProductView, SoftwareProductView, InstrumentProductView, ProductSubmit

urlpatterns = [
    path("api/", ProductView.as_view()),
    path("api/submit/", ProductSubmit.as_view()),
    path("api/hardware/", HardwareProductView.as_view()),
    path("api/software/", SoftwareProductView.as_view()),
    path("api/instrument/", InstrumentProductView.as_view()),
]

