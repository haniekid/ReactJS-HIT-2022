import React from "react";
import { useNavigate } from "react-router-dom";
import vector1 from "../../assets/buoi3/home/Vetor_2.png";
import vector2 from "../../assets/buoi3/home/Vector_1.png";
import "./Partial.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  const handleSignIn = () => {
    navigate("/reactjs-class-hitclub/signin");
  };

  const handleLogout = () => {
    navigate("/reactjs-class-hitclub/");
    localStorage.clear();
  };

  const handleProfile = () => {
    navigate("/reactjs-class-hitclub/profile");
  };

  return (
    <div>
      <header className="navbar">
        <div className="navbar-left">
          <img src={vector1} alt="" />
          <img src={vector2} alt="" />
        </div>

        {Boolean(accessToken) ? (
          <div className="navbar-right">
            <button onClick={handleProfile}>Profiles</button>
            <button onClick={handleLogout}>Log out</button>
          </div>
        ) : (
          <div className="navbar-right">
            <button onClick={handleSignIn}>Sign in</button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
