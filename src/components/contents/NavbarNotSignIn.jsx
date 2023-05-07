import React from "react";
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router-dom";

import vector1 from "../../assets/buoi3/home/Vetor_2.png";
import vector2 from "../../assets/buoi3/home/Vector_1.png";
import "./Partial.scss";

const NavbarNotSignIn = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/reactjs-class-hitclub/signin");
  };
  return (
    <div>
      <header className="navbar">
        <div className="navbar-left">
          <img src={vector1} alt="" />
          <img src={vector2} alt="" />
        </div>
        <div className="navbar-right">
          <button onClick={handleSignIn}>Sign in</button>
        </div>
      </header>
    </div>
  );
};

export default NavbarNotSignIn;
