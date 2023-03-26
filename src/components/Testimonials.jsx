import React from "react";
import "./Testimonials.scss";
import avatar from "../assets/buoi3/testimonials/avatar.png";
import dot1 from "../assets/buoi3/testimonials/ellipse_1.png";
import dot2 from "../assets/buoi3/testimonials/ellipse_2.png";
const Testimonials = () => {
  return (
    <div>
      <section className="testimonials">
        <h1>Testimonials</h1>

        <div className="testimonials__main">
          <i class="fa-light fa-arrow-left-long"></i>
          <div className="testimonials-card">
            <div className="man">
              <div className="image">
                <img src={avatar} alt="" />
              </div>
              <div className="info">
                <h1>John Fang</h1>
                <span>wordfaang.com</span>
                <p>
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </div>
          </div>
          <i class="fa-light fa-arrow-right-long"></i>
        </div>

        <div className="testimonials__footer">
          <img src={dot1} alt="" className="img" />
          <img src={dot2} alt="" />
          <img src={dot2} alt="" />
          <img src={dot2} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
