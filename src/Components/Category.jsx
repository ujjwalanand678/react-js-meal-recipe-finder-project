import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    getCardData();
  }, []);
  const getCardData = async () => {
    const { data } = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setCard(data.categories);
  };
  return (
    <div className="relative bottom-30">
      <h1 className="font-bold mx-7">CATEGORIES</h1>
      <hr className="text-amber-600 w-12 border-2 mx-7" />

      <div className="grid grid-cols-4 gap-4 m-7">
        {card.length > 0 ? (
          card.map((item) => (
            <>
              <Link to ={`mealCategory/${item.strCategory}`}>
                <div className="m-1 bg-white rounded-md shadow-lg" key={item.idCategory}>
                  <p className="bg-amber-600 px-2 text-white rounded justify-self-end relative top-2 right-2 z-10">
                    {item.strCategory}
                  </p>
                  <img
                    src={item.strCategoryThumb}
                    alt={item.strCategory}
                    className="w-full flex px-3.5 pb-2 hover:scale-110"
                  />
                </div>
              </Link>
            </>
          ))
        ) : (
          <h2>LOADING......!</h2>
        )}
      </div>
    </div>
  );
};

export default Category;
