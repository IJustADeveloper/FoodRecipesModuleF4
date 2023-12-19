from django.urls import path
from .views import food_recipes, food_recipe, food_category, food_categories

urlpatterns = [
    path('food_recipe/<int:recipe_id>/', food_recipe),
    path('food_recipes/<int:category_id>/', food_recipes),
    path('food_categories/', food_categories),
    path('food_category/<int:category_id>', food_category)
]
