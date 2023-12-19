from django.db import models


class FoodCategory(models.Model):
    name = models.CharField(max_length=255)


class FoodRecipe(models.Model):
    name = models.CharField(max_length=255)
    ingredients = models.TextField()
    recipe = models.TextField()
    description = models.TextField(default='')
    category = models.ForeignKey(FoodCategory, on_delete=models.CASCADE)



