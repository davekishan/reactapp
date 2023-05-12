import { useEffect } from "react"
import { Link } from "react-router-dom";

export const Displayrecipe = ({ datas }) => {
    var displayData = datas?.hits?.map((element, key) => {
        var cal = element.recipe.calories / element.recipe.yield;
        return (
           
            <div className="card mb-3 my-3 ">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={element.recipe.image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><b>{element.recipe.label} </b></h5>
                            <p className="card-text">{element.recipe.healthLabels.join(' • ')}</p>
                            <p className="card-text"> <h3 className="text-body-secondary"> {parseInt(cal)}<span> kcal</span> </h3>  {element.recipe.yield} servings </p>
                            <p className="card-text-tx"><span>&#128994;</span>PROTEIN <b>{parseInt(element.recipe.totalNutrients.PROCNT.quantity)}{element.recipe.totalNutrients.CHOCDF.unit}&nbsp; </b>
                              <span>	&#128992;   </span>FAT <b>{parseInt(element.recipe.totalNutrients.FAT.quantity)}{element.recipe.totalNutrients.CHOCDF.unit}</b>&nbsp;&nbsp;
                                <span>&#128308;</span>CARBS <b>{parseInt(element.recipe.totalNutrients.CHOCDF.quantity)}{element.recipe.totalNutrients.CHOCDF.unit}</b></p>
                            
                            <a href={element.recipe.url} target="_blank" className="button-40 my-6">For More</a>
                        </div>
                    </div>
                </div>
            </div>


        )
    })

    console.log("This is display recipe")

    return (
        <div className="container" >
            <div className="row">

                {displayData}
            </div>
        </div>
    )
}
