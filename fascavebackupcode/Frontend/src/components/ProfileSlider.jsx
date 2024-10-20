import React from "react";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function ProfileSlider({ menuOpen, toggleMenu }) {
  return (
    <div
      className={`fixed top-0 right-0 w-[50vh] h-full border border-gray-950 p-4 bg-customgray shadow-lg z-50 transition-transform duration-500 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* Cross symbol */}
      <div className="flex justify-end cursor-pointer">
        <RxCross1
          className="text-2xl hover:origin-center hover:rotate-90 transition-transform duration-300 ease-linear text-gray-700"
          onClick={toggleMenu}
        />
      </div>

      {/* List items */}
      <div className="flex flex-col items-center pt-12 space-y-10">
        <NavLink
          to="/profile"
          className="text-2xl font-semibold text-gray-800 hover:text-black hover:border-b-2 border-black pb-2 transition-all duration-300 ease-in-out"
        >
          Your Profile
        </NavLink>
        <NavLink
          to="/admin"
          className="text-2xl font-semibold text-gray-800 hover:text-black hover:border-b-2 border-black pb-2 transition-all duration-300 ease-in-out"
        >
          Admin Panel
        </NavLink>
        <NavLink
          to="/"
          className="text-2xl font-semibold text-gray-800 hover:text-black hover:border-b-2 border-black pb-2 transition-all duration-300 ease-in-out"
        >
          Orders
        </NavLink>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center">
        <button className="absolute bottom-6 border border-black bg-gray-200 py-2 px-8 rounded-lg text-lg font-medium text-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileSlider;
