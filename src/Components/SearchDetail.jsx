import React from "react";

const SearchDetail = () => {
    const [searchMeal, setSearchMeal] = useState([]);
      useEffect(() => {
        getMealData();
      }, []);
      const getMealData = async () => {
        const { data } = await axios(
          `http://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
        );
        setSearchMeal(data);
        console.log(data)
      };
  return (
  <div>SearchDetail</div>
);
};

export default SearchDetail;
