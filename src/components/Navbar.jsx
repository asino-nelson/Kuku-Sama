import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between fixed bg-stone-900 text-white py-5 px-14 z-40">
      
        <Link to="/" className="text-xl text-yellow-500 font-bold">
          Kuku Sama
        </Link>
        <div className="space-x-16">
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-500">
            About
          </Link>
          <Link to="/menu" className="hover:text-yellow-500">
            Menu
          </Link>
          <Link to="/open" className="hover:text-yellow-500">
            Open
          </Link>
          <Link to="/contact" className="hover:text-yellow-500">
            Contact
          </Link>
        </div>
      
    </nav>
  );
};

export default Navbar;
