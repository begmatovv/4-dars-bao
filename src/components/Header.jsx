import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
const Header = () => {
  const { user } = useSelector((state) => state.userState);
  return (
    <header className=" bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center sm:justify-end">
          {!user && (
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
            </>
          )}
          {user && (
            <>
              <p>{`hi ${user.displayName}`}</p>
              <button onClick={() => signOut(auth)} className="btn btn-sm ">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
