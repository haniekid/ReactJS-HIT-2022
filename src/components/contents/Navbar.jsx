import React from "react";
import vector1 from "../../assets/buoi3/home/Vetor_2.png";
import vector2 from "../../assets/buoi3/home/Vector_1.png";
import "./Partial.scss";
const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <div className="navbar-left">
          <img src={vector1} alt="" />
          <img src={vector2} alt="" />
        </div>
        <div></div>
      </header>
    </div>
  );
};

export default Navbar;
