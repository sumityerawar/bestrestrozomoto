import React from "react";

const MealCuisine = (props) => {
    const meals = props.mealCuisine.mealTypes;
    const cuisines = props.mealCuisine.cuisines;

    return (
        <>
            <div className="labelDiv">
                <span className="label label-primary">
                    {meals[0].mealtype_name}
                </span> &nbsp;
                <span className="label label-success">
                    {meals[1].mealtype_name}
                </span>
            </div>
            <div className="labelDiv">
                <span className="label label-danger">
                    {cuisines[0].cuisine_name}
                </span> &nbsp;
                <span className="label label-info">
                    {cuisines[1].cuisine_name}
                </span>
            </div>
        </>
    )

}

export default MealCuisine;