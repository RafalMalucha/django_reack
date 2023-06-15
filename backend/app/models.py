from django.db import models

# Create your models here.
class Products(models.Model):
      
    CATEGORIES = [
        ('hardware', 'hardware'),
        ('software', 'software'),
        ('instrument', 'instrument'),
    ]
      
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=255)
    product_price = models.DecimalField(max_digits=8, decimal_places=2)
    product_category = models.CharField(max_length=50, choices=CATEGORIES)
