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
    <div>
      <h1 className="font-bold mx-7">MEALS</h1>
      <hr className="text-amber-600 w-10 border-2 mx-7" />

      <div className="grid grid-cols-4 gap-4 m-7">
        {mealsName.length > 0 ? (
          mealsName.map((food) => (
            <>
              <Link key={food.idMeal}>
                <div  className="m-1 bg-white rounded-md ">
                  <p className="bg-amber-600 px-2 text-white rounded justify-self-end relative top-2 right-2 z-10">
                    {food.strMeal}
                  </p>
                  <img
                    src={food.strMealThumb}
                    alt={food.strMeal}
                    className="w-full flex px-3.5 pb-2 hover:scale-110"
                  />
                </div>
              </Link>
            </>
          ))
        ) : (
          <h2>Food Not Found</h2>
        )}
      </div>
    </div>
  );
};

export default SearchDetail;
