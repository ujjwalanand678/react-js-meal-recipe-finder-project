import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Search from "./Search";
import Banner from "./Banner";
import SearchDetail from "./SearchDetail";

const CategoryDetails = () => {
  const [card, setCard] = useState([]);
  const { strCategory } = useParams();
  const [mealCategory, setMealCategory] = useState([]);
  const [foodName, setFoodName] = useState("");

  const getCardData = async () => {
    const { data } = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setCard(data.categories);
  };

  useEffect(() => {
    getCardData();
    getCategoryData();
  }, [strCategory]);

  const getCategoryData = async () => {
    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
    );
    setMealCategory(data.meals);
  
  };

  const cardDetails = card.find((cat) => cat.strCategory === strCategory);
  return (
    <>
      <Banner />
      <Search setFoodName={setFoodName} />
      <SearchDetail foodName={foodName} />

      <div className="relative bottom-40 mx-10">
        {cardDetails && (
          <div className="border-2 border-amber-600 p-7">
            <p className="text-amber-600 font-bold text-3xl mb-2">
              {cardDetails.strCategory}
            </p>
            <p className="text-lg text-gray-600">
              {cardDetails.strCategoryDescription}
            </p>
          </div>
        )}
      </div>
      <div className="relative bottom-30 mx-3">
        <p className="font-bold mx-7 text-xl ">MEALS</p>
        <hr className="text-amber-600 w-10 border-2 mx-7" />
        <div className="grid grid-cols-5 mt-10 mx-4">
          {mealCategory && Object.keys(mealCategory).length > 0 ? (
            mealCategory.map((meal) => (
              <div
                className=" m-3 mb-10 bg-white rounded-md shadow-lg"
                key={meal.idMeal}
              >
                <Link to={`mealDetail/${meal.idMeal}`}>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full flex relative bottom-6 rounded-t-md"
                  />
                  <p className="relative bottom-5 px-3 font-bold">
                    {meal.strMeal}
                  </p>
                </Link>
              </div>
            ))
          ) : (
            <strong className="text-center">LOADING</strong>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default CategoryDetails;
