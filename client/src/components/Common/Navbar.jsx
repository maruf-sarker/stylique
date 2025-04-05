import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiMiniBars3BottomRight,
} from "react-icons/hi2";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left - Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Stylique
          </Link>
        </div>
        {/* Center - Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>
        {/* Right - Search and Cart */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full px-1">
              3
            </span>
          </button>
          {/* Search */}
          <Searchbar />
          <button className="md:hidden">
            <HiMiniBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
