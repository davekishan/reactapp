import React, { useState } from 'react'
import { Displayrecipe } from './displayrecipe';
import { Navigate } from 'react-router-dom';


export const Recipesearch = () => {
    var data1;
    var display;

    var [datas, setDatas] = useState();
    const [img, setImg] = useState("")
    const [recipe, setRecipe] = useState("");
    const [title, setTitle] = useState("");
    const [label, setLabel] = useState("");



    const submit = async (e) => {
        e.preventDefault()
        if (recipe) {

            await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=48f6a08f&app_key=3f73fc9ca8e8457fa93d516662ab16d6&type=public&q=${recipe}`)
                .then(res => res.json()).then(data => {
                    // setImg(data.hits[0].recipe.image);
                    // setTitle(data.hits[0].recipe.healthLabels);
                    // setLabel(data.hits[0].recipe.label);

                    console.log(data);
                    setDatas(data);
                    // data1=data;

                    console.log(datas)
                })


        } else {
            alert("Please Enter Recipe")
        }
    }
    const changeRecipe = (e) => {
        setRecipe(e.target.value);
    }

    return (
        <>
            <div className='container'>
                <h3>Search Recipe</h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label className="form-label">Enter Recipe</label>
                        <input type="text" className="form-control" id="todotitle" value={recipe} onChange={changeRecipe} />
                    </div>
                    <button type="submit" className="btn btn-sm btn-dark my-4">Search</button>
                </form>

                <Displayrecipe datas={datas} />

            </div>

        </>
    )

}
