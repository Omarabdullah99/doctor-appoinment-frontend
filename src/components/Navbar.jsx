import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="logo" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-4">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-4">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-4">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-4">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div>
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <Link to="/my-profile">
                  <p className="hover:text-black cursor-pointer">My Profile</p>
                </Link>
                <Link to="/my-appoinment">
                  <p className="hover:text-black cursor-pointer">
                    My Appoinments
                  </p>
                </Link>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Link to={'/login'}>
            {""}
            <button className="bg-primary rounded-[47px] text-white font-bold p-[16px] flex justify-center items-center cursor-pointer">
              Create Account
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
