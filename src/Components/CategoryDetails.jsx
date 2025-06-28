import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "./Search";
import Category from "./Category";
import Banner from "./Banner";
import SearchDetail from "./SearchDetail";

const CategoryDetails = () => {
    const {strCategory} = useParams()
    const [mealCategory , setMealCategory] = useState({})
    const [foodName, setFoodName] = useState("");

    useEffect(()=>{
        getCategoryData()
    },[])
    const getCategoryData = async()=>{
        const {data} = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
        setMealCategory(data.meals)
        console.log(data.meals)
    }
    
  return (
  <>
      <Banner />
      <Search setFoodName={setFoodName} />
      <SearchDetail foodName={foodName} />
      <Category />
    </>);
};

export default CategoryDetails;
