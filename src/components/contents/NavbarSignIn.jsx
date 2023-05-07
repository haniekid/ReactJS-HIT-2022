import React from "react";
import { useNavigate } from "react-router-dom";

import vector1 from "../../assets/buoi3/home/Vetor_2.png";
import vector2 from "../../assets/buoi3/home/Vector_1.png";

import "./Partial.scss";
const NavbarSignIn = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("reactjs-class-hitclub/");
  };
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
      </div>

      <div className="navbar-right">
        <button>Profiles</button>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </header>
  );
};

export default NavbarSignIn;
