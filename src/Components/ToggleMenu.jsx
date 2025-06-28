import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";

const ToggleMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setMenu(data.categories);
    console.log(data.categories);
  };

  return (
    <>
      <div className="absolute right-0 top-0 pt-20 pb-20 bg-white text-black text-base shadow-lg font-medium p-4 ps-6 w-60 z-20">
        <FaRegTimesCircle className="text-amber-600  text-2xl" />
        {menu.map((name) => (
          <ul>
            <Link>
              <li>{name.strCategory}</li>
              <hr className="w-[90%] mb-3 text-gray-300" />
            </Link>
          </ul>
        ))}
      </div>
    </>
  );
};

export default ToggleMenu;
