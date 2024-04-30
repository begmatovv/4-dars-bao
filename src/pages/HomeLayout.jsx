import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Home = () => {
  return (
    <div >
      <Navbar className="align-element"/>
      <main className="align-element">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
