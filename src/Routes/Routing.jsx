import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import CategoryDetails from "../Components/CategoryDetails";
import MealDetails from "../Components/MealDetails";


const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/mealCategory/:strCategory" element={<CategoryDetails/>}/>
        <Route path="/mealCategory/:strCategory/mealDetail/:idMeal" element={<MealDetails/>} />
    </Routes>
    </>
  )
};

export default Routing;
