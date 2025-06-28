import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import CategoryDetails from "../Components/CategoryDetails";


const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/mealCategory/:strCategory" element={<CategoryDetails/>}/>
    </Routes>
    </>
  )
};

export default Routing;
