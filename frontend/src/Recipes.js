import React, {useState, useEffect} from "react";
import Api from "./Api";
import {useSearchParams} from "react-router-dom";

function Recipes(){
    const [searchParams, setSearchParams] = useSearchParams()

    if (searchParams.get('category_id') === null){
        window.location.replace('http://localhost:3000/')
    }

    const api = new Api()
    const [recipes, setRecipes] = useState(null)
    const [category, setCategory] = useState(null)

    useEffect(()=>{
        api.getRecipes(searchParams.get('category_id')).then(result => setRecipes(result.data))
    }, [])

    useEffect(()=>{
        api.getCategory(searchParams.get('category_id')).then(result => setCategory(result.data))
    }, [])

    function getDesc(desc){
        desc = desc.split('\n').join(' ')
        if (desc.length > 48){
            return desc.substring(0, 42) + '...'
        }
        return desc
    }

    function getIngredients(ingr){
        ingr = ingr.split('\n')
        let linesCount = 0
        let stopIndex = 0
        for (let i=0; i<ingr.length; i++){
            if (ingr[i].length>23){
                linesCount+=Math.ceil(ingr[i].length/23)
            }
            else linesCount += 1

            if (linesCount >= 6){
                stopIndex = i;
                break
            }
        }

        ingr[stopIndex] = linesCount > 6 ? ingr[stopIndex].substring(0, 20) + '...' : ingr[stopIndex]
        ingr[stopIndex] += stopIndex !== ingr.length - 1 ? '...' : ''
        ingr = ingr.slice(0, stopIndex+1)

        return ingr.join('\n')
    }

    function recs() {
        let rec_rows = []
        for (let row = 0; row < recipes.length; row += 3) {

            let recs = []
            for (let recipe = 0; recipe < Math.min(3, recipes.length - row); recipe++) {
                recs.push(<div className='recipe-card' onClick={()=>window.location.assign('/foodrecipes/'+recipes[row + recipe].id)}>
                    <h3>{recipes[row+recipe].name}</h3>
                    <p className='description'>{getDesc(recipes[row+recipe].description)}</p>
                    <p className='ingredients-label'>Ингридиенты: </p>
                    <p className='ingredients'>{getIngredients(recipes[row+recipe].ingredients)}</p>
                </div>)
            }
            rec_rows.push(<div className='row'>{recs}</div>)
        }
        return rec_rows
    }

    return(
        <>
            {category !== null && <div style={{display: 'flex', whiteSpace: "pre", marginBottom: '20px'}}><a href={'/'}>Главная</a> > <a>{category.name}</a> ></div>}
            <div className='center'>
                <div>
                    {recipes !== null && recs()}
                </div>
            </div>
        </>
    );


}
export default Recipes
