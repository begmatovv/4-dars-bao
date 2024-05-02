import React from "react";
import { Link } from "react-router-dom";
import Signout from "../pages/Signout";
const Header = () => {
  return (
    <header className=" bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center sm:justify-end">
          {
            <>
              <Link className="link link-hover text-xl sm:text-sm" to="/login">
                Sign in/ Guest
              </Link>
              <Link
                className="link link-hover text-xl sm:text-sm"
                to="/register"
              >
                Create Account
              </Link>
              <Link className="link link-hover text-xl sm:text-sm">
                <Signout />
              </Link>
            </>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
