from django.urls import path
from .views import ProductView

urlpatterns = [
    path('api/', ProductView.as_view())
]