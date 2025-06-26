import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    console.log(data.categories)
  };

  return (
    <>
    <div>
        {menu.map((name) => (
        <ul>
          <Link>
            <li>{name.strCategory}</li>
          </Link>
        </ul>
      ))}
    </div>
      
    </>
  );
};

export default ToggleMenu;
