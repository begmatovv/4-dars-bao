import React, { useContext } from "react";
import Signout from "../pages/Signout";
import { GlobalContext } from "../context/useGlobalContext";
const TopSide = () => {
    const { user } = useContext(GlobalContext);
    console.log(user);
  return (
    <div className="p-2 text-end bg-neutral ">
      <div className="align-element ">
      {user && <p className="mr-3">{user.name}</p>}
        <Signout />
      </div>
    </div>
  );
};

export default TopSide;
