import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <>
      <div className="flex-col relative bottom-90">
        <form className="flex place-content-center mb-5 ">
          <input
            className="bg-gray-100 rounded-full p-3 px-6 me-3 outline-none"
            type="search"
            placeholder="Search"
          />
          <button
            className=" bg-gray-100 rounded-full p-3 px-4 text-amber-600 text-lg cursor-pointer"
            type="submit"
          >
            <IoSearchSharp />
          </button>
        </form>
        <p className="text-center text-3xl font-bold text-white mb-4">What are your favorite cuisines?</p>
        <p className="text-center text-white">PERSONALIZE YOUR EXPERINCE</p>
      </div>
    </>
  );
};

export default Search;
