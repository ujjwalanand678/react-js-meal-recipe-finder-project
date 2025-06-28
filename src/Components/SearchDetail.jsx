import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchDetail = ({ foodName }) => {
  const [mealsName, setMealsName] = useState([]);
  useEffect(() => {
    if (foodName && foodName.trim() !== "") {
      getMealData();
    }
  }, [foodName]);
  const getMealData = async () => {
    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    );
    setMealsName(data.meals || []);
    console.log(data.meals);
  };
  return (
    <div className="relative bottom-30 ">
      {mealsName.length > 0 ? (
        <>
          <h1 className="font-bold mx-7">MEALS</h1>
          <hr className="text-amber-600 w-10 border-2 mx-7" />
        </>
      ) : null}

      <div className="grid grid-cols-5 gap-4 m-7">
        {mealsName.length > 0
          ? mealsName.map((food) => (
              <div
                className="m-1 bg-white rounded-md shadow-lg"
                key={food.idMeal}
              >
                <p className="text-amber-600 px-3 bg-white rounded-full justify-self-end relative top-3 right-3 z-10">
                  {food.strCategory}
                </p>
                <img
                  src={food.strMealThumb}
                  alt={food.strMeal}
                  className="w-full flex relative bottom-6 rounded-t-md"
                />
                <p className="relative bottom-5 px-3 text-gray-500">
                  {food.strArea}
                </p>
                <p className="relative bottom-5 px-3 font-bold">
                  {food.strMeal}
                </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default SearchDetail;
