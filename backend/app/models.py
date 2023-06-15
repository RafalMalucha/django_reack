from django.db import models

# Create your models here.
class ProductCategory(models.Model):
    category = models.CharField(primary_key=True, max_length=255)

class Products(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=255)
    product_price = models.DecimalField(max_digits=25, decimal_places=2)
    product_category = models.ForeignKey(ProductCategory, null=True, blank=True, on_delete=models.SET_NULL)
