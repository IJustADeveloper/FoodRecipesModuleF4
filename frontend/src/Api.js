import axios from "axios";
const API_host = 'http://localhost:8000/api'

class Api{

    getCategories(){
        const url = `${API_host}/food_categories/`
        return axios.get(url).then(response => response.data).catch(error => console.log(error))
    }

    getCategory(category_id){
        const url = `${API_host}/food_category/${category_id}`
        return axios.get(url).then(response => response.data).catch(error => console.log(error))
    }

    getRecipes(category_id){
        const url = `${API_host}/food_recipes/${category_id}/`
        return axios.get(url).then(response => response.data).catch(error => console.log(error))
    }

    getRecipe(recipe_id){
        const url = `${API_host}/food_recipe/${recipe_id}/`
        return axios.get(url).then(response => response.data).catch(error => console.log(error))
    }
}

export default Api