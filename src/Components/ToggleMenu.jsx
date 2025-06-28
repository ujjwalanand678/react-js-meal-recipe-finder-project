import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";

const ToggleMenu = ({ isOpen, closeMenu }) => {
  const [menu, setMenu] = useState([]);
  const [isClose, setIsClose] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setMenu(data.categories);
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 pt-14 pb-20  bg-white text-black text-base shadow-lg font-medium p-4 ps-6 w-60 z-30 h-screen overflow-y-auto transform transition-transform duration-300 ease-in-out
          ${
            isOpen
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full pointer-events-none"
          }`}
      >
        <FaRegTimesCircle
          onClick={closeMenu}
          className="text-amber-600 text-2xl relative bottom-10 left-43 cursor-pointer"
        />
        {menu.map((name) => (
          <ul>
            <Link to={`mealCategory/${name.strCategory}`} onClick={closeMenu}>
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
