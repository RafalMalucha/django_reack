from rest_framework import serializers
from . models import *

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ['product_id', 'product_name', 'product_price', 'product_category']