import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Search from "./Search";
import Banner from "./Banner";
import SearchDetail from "./SearchDetail";
import Category from "./Category";

const MealDetails = () => {
  const [foodName, setFoodName] = useState("");

  const { idMeal } = useParams();
  const [mealRecipe, setMealRecipe] = useState(null);
  useEffect(() => {
    getMealRecipe();
  }, [idMeal]);
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
      <Banner />
      <Search setFoodName={setFoodName} />
      <SearchDetail foodName={foodName} />
      <div className="relative bottom-40 mx-7">
        <div>
          <h1 className="font-bold text-lg mx-3">MEAL DETAILS</h1>
          <hr className="text-amber-600 w-12 border-2 mx-3 mb-8" />
        </div>
        {mealRecipe ? (
          <div className="bg-white mx-3 shadow-lg" key={mealRecipe.idMeal}>
            <div className="flex">
              <div>
                <img
                  src={mealRecipe.strMealThumb}
                  alt={mealRecipe.strMeal}
                  className="w-[50%] ms-10 mt-10"
                />
              </div>
              <div>
                <h2>{mealRecipe.strMeal}</h2>
                <hr />
                <p>CATEGORY : {mealRecipe.strCategory}</p>
                <p>Source :{mealRecipe.strSource}</p>
                <p>Tags : {mealRecipe.strCategory}</p>
                <div>
                  <p>Ingredients</p>

                </div>
                
              </div>
            </div>
            <div>

            </div>
          </div>
        ) : (
          <p>LOADING.....</p>
        )}
      </div>

      <Category />
    </>
  );
};

export default MealDetails;
