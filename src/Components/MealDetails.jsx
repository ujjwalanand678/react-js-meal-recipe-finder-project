import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Search from "./Search";
import Banner from "./Banner";
import SearchDetail from "./SearchDetail";
import Category from "./Category";
import { FaUtensilSpoon } from "react-icons/fa";
import { AiOutlineCheckSquare } from "react-icons/ai";

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
   
  };

  const ingredientList = [];
  if (mealRecipe) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealRecipe[`strIngredient${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredientList.push(ingredient.trim());
      }
    }
  }
  const measureList = [];
  if (mealRecipe) {
    for (let i = 1; i <= 20; i++) {
      const measure = mealRecipe[`strMeasure${i}`];
      if (measure && measure.trim() !== "") {
        measureList.push(measure.trim());
      }
    }
  }

  let instructions = [];
  if (mealRecipe) {
    instructions = mealRecipe.strInstructions.split(/\r?\n/);
  }

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
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              <div className=" lg:w-full lg:h-full lg:overflow-hidden">
                <img
                  src={mealRecipe.strMealThumb}
                  alt={mealRecipe.strMeal}
                  className="w-[80%] lg:w-[90%] h-auto  lg:object-cover ms-8 mt-10 lg:ms-10 lg:mt-10"
                />
              </div>
              <div className=" items-center mx-7 mt-9 m">
                <p className="text-amber-600 text-2xl font-bold mb-3">
                  {mealRecipe.strMeal}
                </p>
                <hr className="text-amber-600 border" />

                <div className="flex items-center mt-4">
                  <p className="text-lg font-bold">CATEGORY:</p>
                  <p className="ms-1">{mealRecipe.strCategory}</p>
                </div>
                <div className="flex items-center mt-4">
                  <p className="text-lg font-bold">Source: </p>
                  <p className="ms-1 overflow-hidden"> {mealRecipe.strSource}</p>
                </div>
                <div className="flex items-center mt-4">
                  <p className="text-lg font-bold">Tags: </p>
                  <p className="border p-1 px-2  text-amber-600 ms-1">
                    {" "}
                    {mealRecipe.strCategory}
                  </p>
                </div>
                {/* ingredient list */}
                <div className="bg-amber-600 text-white ps-7 pt-4 mt-4">
                  <p className="text-lg font-bold pb-3">Ingredients</p>
                  <div className="grid lg:grid-cols-3 pb-4">
                    {ingredientList.map((item, index) => (
                      <div className="flex items-center pb-2 " key={index}>
                        <li className="list-none border-1  bg-teal-700 px-1.5 p-0 m-1 rounded-full">
                          {index + 1}
                        </li>
                        <li className="list-none" key={index}>
                          {item}
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* measure */}
            <div className="ms-10 me-7 mt-10">
              <p className="text-xl font-bold mb-4">Measure:</p>
              <div className="border border-gray-400 grid lg:grid-cols-2 bg-gray-100 p-7">
                {measureList.map((item, index) => (
                  <li className="list-none flex items-center mb-2" key={index}>
                    <FaUtensilSpoon className="text-amber-600 me-2 shrink-0" /> {item}
                  </li>
                ))}
              </div>
            </div>
            {/* instructions */}
            <div className="ms-10 me-7 mt-10 pb-15">
              <p className="text-xl font-bold mb-4">Instructions:</p>
              <ul className="list-none space-y-2">
                {instructions.map(
                  (step, index) =>
                    step.trim() && (
                      <li key={index} className="flex items-start gap-3  ">
                        <AiOutlineCheckSquare className="text-amber-600 text-xl flex-shrink-0 mt-1 " />
                        <p className="leading-relaxed">{step}</p>
                      </li>
                    )
                )}
              </ul>
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
