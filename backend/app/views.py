from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from . models import *
from . serializer import *

# Create your views here.
class ProductCategoryView(APIView):
    
    serializer_class = ProductCategorySerializer

    def get(self, request):
        output = [{'category': output.product_category}
                   for output in ProductCategory.objects.all()]
        return Response(output)
    
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

class ProductView(APIView):

    serializer_class = ProductSerializer

    def get(self, request):
        output = [{'product_id': output.product_id, 
                   "product_category": output.product_category, 
                   "product_name": output.product_name,
                   'product_price': output.product_price}
                   for output in Products.objects.all()]
        return Response(output)
    
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)