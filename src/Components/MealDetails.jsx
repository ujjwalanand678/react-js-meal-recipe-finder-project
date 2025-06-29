import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
  const { idMeal } = useParams();
  const [mealRecipe, setMealRecipe] = useState({});
  useEffect(() => {
    getMealRecipe();
  }, [idMeal]);
  const getMealRecipe = async () => {
    const { data } = await axios(
      `https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    setMealRecipe(data.meals);
    console.log(data.meals);
  };
  return (
    <>
      <div>
        <h1 className="font-bold text-lg mx-3">MEAL DETAILS</h1>
        <hr className="text-amber-600 w-12 border-2 mx-3" />
      </div>
      <div className="bg-white">
        <div></div>
      </div>
    </>
  );
};

export default MealDetails;
