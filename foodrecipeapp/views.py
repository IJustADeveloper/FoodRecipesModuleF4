from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .serializers import *


@api_view(['GET'])
def food_categories(request):
    if request.method == 'GET':
        categories = FoodCategory.objects.all()
        cat_ser = FoodCategorySerializer(categories, many=True)
        return Response({'data': cat_ser.data})


@api_view(['GET'])
def food_category(request, category_id):
    if request.method == 'GET':
        category = FoodCategory.objects.get(pk=category_id)
        cat_ser = FoodCategorySerializer(category)
        return Response({'data': cat_ser.data})


@api_view(['GET'])
def food_recipes(request, category_id):
    if request.method == 'GET':
        recipes = FoodRecipe.objects.filter(category=category_id)
        recipes_ser = FoodRecipeSerializer(recipes, many=True)
        return Response({'data': recipes_ser.data})


@api_view(['GET'])
def food_recipe(request, recipe_id):
    if request.method == 'GET':
        try:
            recipe = FoodRecipe.objects.get(pk=recipe_id)
            recipe_ser = FoodRecipeSerializer(recipe)
            return Response({'data': recipe_ser.data})
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)




