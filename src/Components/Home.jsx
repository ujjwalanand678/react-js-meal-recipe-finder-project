import React, { useState } from "react";

import Search from "./Search";
import Category from "./Category";
import Banner from "./Banner";
import SearchDetail from "./SearchDetail";
const Home = () => {
  const [foodName, setFoodName] = useState("");
  return (
    <>
      <Banner />
      <Search setFoodName={setFoodName} />
      <SearchDetail foodName={foodName} />
      <Category />
    </>
  );
};

export default Home;
