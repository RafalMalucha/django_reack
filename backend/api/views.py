from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .serializers import ProductSerializer
from .models import Product
from rest_framework.permissions import AllowAny
from django.views.generic import UpdateView

# Create your views here.
class ProductView(generics.CreateAPIView):

    http_method_names = ['get', 'post']
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request):
        output = [{'product_id': output.product_id, 
                   "product_category": output.product_category, 
                   "product_name": output.product_name,
                   'product_price': output.product_price}
                   for output in Product.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        

class HardwareProductView(generics.CreateAPIView):

    http_method_names = ['get', 'post']
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request):
        output = [{'product_id': output.product_id, 
                    "product_category": output.product_category, 
                    "product_name": output.product_name,
                    'product_price': output.product_price}
                    for output in Product.objects.filter(product_category="hardware")]
        return Response(output)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        

class SoftwareProductView(generics.CreateAPIView):

    http_method_names = ['get', 'post']
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request):
        output = [{'product_id': output.product_id, 
                    "product_category": output.product_category, 
                    "product_name": output.product_name,
                    'product_price': output.product_price}
                    for output in Product.objects.filter(product_category="software")]
        return Response(output)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        

class InstrumentProductView(generics.CreateAPIView):

    http_method_names = ['get', 'post']
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request):
        output = [{'product_id': output.product_id, 
                    "product_category": output.product_category, 
                    "product_name": output.product_name,
                    'product_price': output.product_price}
                    for output in Product.objects.filter(product_category="instrument")]
        return Response(output)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        

class ProductSubmit(UpdateView):

    permission_classes = (AllowAny,)
    model = Product

    def post(self, requets, format=None):
        return Response("bruh")