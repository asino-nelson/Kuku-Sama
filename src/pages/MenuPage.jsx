import React from "react";
import MenuItem from "../components/MenuItem";
import { FaSearch } from "react-icons/fa";

const MenuPage = () => {
  return (
    <div className="bg-stone-800 text-white md:py-40 py-20">
      <div className="flex items-center justify-center">
        <input
          className="bg-stone-500/90 rounded-lg md:w-[40%] w-[90%] px-6 py-3 text-white/90
           placeholder-white/90 placeholder-opacity-70 border-none focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>

      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
};

export default MenuPage;
