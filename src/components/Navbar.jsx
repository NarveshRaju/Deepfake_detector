import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Left: Logo & Name */}
      <div className="flex items-center">
      {/* <img src="/deepshield.jpeg" alt="DeepShield Logo" className="h-10 w-10 mr-2" /> */}
      <Link to="/" className="text-xl font-bold transition duration-200">
        DeepShield
      </Link>
      </div>

      {/* Center: Navigation Links */}
      <div>
        <Link to="/Home" className="text-l px-4 py-2 hover:text-gray-400">Home</Link>
      </div>

      {/* Right: Login Button */}
      <div>
        <button className="bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
