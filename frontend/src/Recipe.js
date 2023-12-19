import React, {useState, useEffect} from "react";
import Api from "./Api";
import {useParams} from "react-router-dom";


function Recipe(){
    const params = useParams()

    if (params.id === null){
        window.location.replace('http://localhost:3000/')
    }

    const api = new Api()
    const [recipe, setRecipe] = useState(null)
    const [category, setCategory] = useState(null)

    useEffect(()=>{
        api.getRecipe(params.id).then(result => setRecipe(result.data))
    }, [])

    useEffect(()=>{
        if (recipe !== null){
            api.getCategory(recipe.category).then(result => setCategory(result.data))
        }
    }, [recipe])


    return(
        <>
            {category !== null && <div style={{display: 'flex', whiteSpace: 'pre', marginBottom: '20px'}}><a href={'/'}>Главная</a> >
                <a href={'/foodrecipes?category_id='+category.id}>{category.name}</a> > <a>{recipe.name}</a> ></div>}
            <div className='center'>
                <div style={{display: 'flex', flexDirection:'column', width: '70%'}}>
                    {recipe !== null &&
                        <>
                            <div className='card-container'>
                                <h3>{recipe.name}</h3>
                            </div>
                            <div className='card-container'>
                                <p className='description'>{recipe.description}</p>
                            </div>
                            <div className='card-container'>
                                <p className='ingredients-label'>Ингридиенты: </p>
                                <p className='ingredients'>{recipe.ingredients}</p>
                            </div>
                            <div className='card-container'>
                                <p className='ingredients'>{recipe.recipe}</p>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );


}
export default Recipe