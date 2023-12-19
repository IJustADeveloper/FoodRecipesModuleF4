from rest_framework import serializers
from .models import *


class FoodCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodCategory
        fields = ('id',
                  'name')


class FoodRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodRecipe
        fields = ('id',
                  'name',
                  'ingredients',
                  'recipe',
                  'category',
                  'description')
