import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import TopSide from "../components/TopSide";
import Signout from "./Signout";

const Home = () => {
  return (
    <div>
      <TopSide className="align-element" />
      <Navbar className="align-element" />
      <main className="align-element">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
