# Generated by Django 4.2.2 on 2023-06-15 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_alter_products_product_category_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='product_category',
            field=models.CharField(choices=[('hardware', 'hardware'), ('software', 'software'), ('instrument', 'instrument')], max_length=50),
        ),
    ]