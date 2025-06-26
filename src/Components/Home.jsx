import React from "react";
import banner from "../assets/banner-3.png"
import Search from "./Search";
const Home = () => {
  return (
    <>
     <div>
    <img src={banner} alt="banner" className="w-full h-[500px] brightness-40 z-0 relative bottom-10 "/>
    </div>
    <Search/>
    </>
 
    );
};

export default Home;
