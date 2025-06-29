import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
  const { idMeal } = useParams();
  const [mealRecipe, setMealRecipe] = useState(null);
  useEffect(() => {
    getMealRecipe();
  }, []);
  const getMealRecipe = async () => {
    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
        if (data.meals && data.meals.length > 0) {
      setMealRecipe(data.meals[0]); // Store single meal
    }
    console.log(data.meals);
  };
  return (
    <>
      <div>
        <h1 className="font-bold text-lg mx-3">MEAL DETAILS</h1>
        <hr className="text-amber-600 w-12 border-2 mx-3" />
      </div>
      {mealRecipe ? (<div className="bg-white" key={mealRecipe.idMeal}>
        <div className="flex">
            <div>
               <img src={mealRecipe.strMealThumb} alt={mealRecipe.strMeal} className="w-50" /> 
            </div>
            <div>
                <h2>{mealRecipe.strMeal}</h2>
                <hr />
                <p>CATEGORY : {mealRecipe.strCategory}</p>
                <p>Source :{mealRecipe.strSource}</p>
                <p>Tags : {mealRecipe.strCategory}</p>
            </div>
            
        </div>
      </div>):<p>LOADING.....</p>}
    </>
  );
};

export default MealDetails;
