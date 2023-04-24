import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };
  return (
    <div className="text-green-300">
      Home
      <br />
      <button onClick={handleNavigate} className="signup">
        SIGN UP
      </button>
    </div>
  );
};

export default Home;
