import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import Navlinks from "./Navlinks";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

function LocalStorageTheme() {
  return localStorage.getItem("mode") || themes.winter;
}

const Navbar = () => {
  const [theme, setTheme] = useState(LocalStorageTheme());
  function handleClick() {
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter;
    setTheme(newTheme);
    toast.success("Mode changed successfully");
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("mode", theme);
  }, [theme]);
  return (
    <div className="bg-base-300">
      <div className="navbar align-element mb-10 p-3">
        <div className="navbar-start">
          <Link className=" btn btn-primary  lg:btn-lg  " to="/">
            <span className="text-3xl">C</span>
          </Link>
        </div>
        <div className="navbar-center">
          <Navlinks className=" menu menu-horizontal flex gap-3" />
        </div>

        <div className="navbar-end flex gap-7">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={handleClick} />

            {/* sun icon */}
            <FaSun className="swap-on fill-current w-6 h-6" />

            {/* moon icon */}
            <FaMoon className="swap-off fill-current w-6 h-6" />
          </label>
          <AiOutlineShoppingCart className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
