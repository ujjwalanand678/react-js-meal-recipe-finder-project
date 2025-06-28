import axios from "axios";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";
import { Link } from "react-router-dom";
import ToggleMenu from "./ToggleMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(true);
const closeMenu = () => setIsOpen(false);
  const handleOpenMenu = () => {
    setIsOpen(true);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex bg-amber-600 justify-between  text-amber-50 font-bold text-3xl p-4 relative z-10">
      <div className="flex mx-5 items-center">
        <GiMeal />
        <Link to="/">
          <h2 className="ps-2">MEAL FINDER</h2>
        </Link>
      </div>
      <div className="mx-5 items-center">
        <GiHamburgerMenu className="cursor-pointer" onClick={handleOpenMenu} />
        <ToggleMenu isOpen={isOpen} closeMenu={handleCloseMenu} />
      </div>
    </div>
  );
};

export default Navbar;
