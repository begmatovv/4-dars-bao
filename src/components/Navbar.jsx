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
          <Link className=" btn btn-primary hidden lg:flex text-3xl" to="/">
            C
          </Link>
          <div className="dropdown lg:hidden">
            <button className=" btn bg-transparent border-none shadow-none  ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
              </svg>
              <div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow text-content bg-base-100 rounded-box w-52"
                >
                  <Navlinks />
                </ul>
              </div>
            </button>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
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
          <div className="indicator mr-3">
            <AiOutlineShoppingCart className="w-6 h-6 " />
            <span className="badge badge-sm badge-primary indicator-item">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
