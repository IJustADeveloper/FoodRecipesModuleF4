import React, {useState, useEffect} from "react";
import Api from "./Api";

function Categories(){
    const api = new Api()
    const [categories, setCategories] = useState(null)

    useEffect(()=>{
        api.getCategories().then(result => setCategories(result.data))
    }, [])

    function cats() {
        let cat_rows = []
        for (let row = 0; row < categories.length; row += 3) {

            let cats = []
            for (let category = 0; category < Math.min(3, categories.length - row); category++) {
                cats.push(<div onClick={()=>window.location.assign('foodrecipes?category_id='+categories[row + category].id)} className="category-card">{categories[row + category].name}</div>)
            }
            cat_rows.push(<div className='row'>{cats}</div>)
        }
        return cat_rows
    }

    return(
        <div className='center'>
            <div>
                {categories !== null && cats()}
            </div>
        </div>
    );
}

export default Categories