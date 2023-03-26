import React from "react";
import "./Footer.scss";
import vector1 from "../assets/buoi3/home/Vetor_2.png";
import vector2 from "../assets/buoi3/home/Vector_1.png";
import vector from "../assets/buoi3/footer/vector.png";
import mess1 from "../assets/buoi3/footer/mess1.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <section className="info">
        <div className="card_1">
          <div>
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
            <h1>DataWarehouse</h1>
          </div>
          <h5>Warehouse Society, 234 Bahagia Ave Street PRBW 29281</h5>
          <p>info@warehouse.project 1-232-3434 (Main)</p>
        </div>

        <div className="card_2">
          <h1>About</h1>
          <p>Profile</p>
          <p>Features</p>
          <p>Careers</p>
          <p>DW News</p>
        </div>

        <div className="card_3">
          <h1>Help</h1>
          <p>Support</p>
          <p>Sign up</p>
          <p>Guide</p>
          <p>Reports</p>
          <p>Q&A</p>
        </div>

        <div className="card_4">
          <h1>Social Media</h1>
          <div className="vector">
            <img src={vector} alt="" />
            <img src={vector} alt="" />
            <img src={vector} alt="" />
          </div>
        </div>
      </section>

      <section className="contact">
        <p className="left">
          © Datawarehouse™, 2020. All rights reserved. Company Registration
          Number: 21479524.
        </p>
        <div className="right">
          <img src={mess1} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Footer;
