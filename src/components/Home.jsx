import React from "react";
import "./Home.scss";
import vector1 from "../assets/buoi3/home/Vetor_2.png";
import vector2 from "../assets/buoi3/home/Vector_1.png";
import home from "../assets/buoi3/home/image.png";

const Home = () => {
  return (
    <div className="home">
      <header className="home__header">
        <div className="home__header-left">
          <img src={vector1} alt="" />
          <img src={vector2} alt="" />
        </div>
        <button className="header-right">Sign in</button>
      </header>
      <section className="home__section">
        <h1>Save your data storage here.</h1>
        <img src={home} alt="" width="700px" height="350px" />
        <p>
          Data Warehouse is a data storage area that has been tested for
          security, so you can store your data here safely but not be afraid of
          being stolen by others.
        </p>
        <button>Learn more</button>
      </section>
    </div>
  );
};

export default Home;

