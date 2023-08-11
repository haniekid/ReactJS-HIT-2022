import React from "react";
import Card from "./Card";
import { cardData } from "../../assets/data";

import home from "../../assets/buoi3/home/image.png";

import avatar from "../../assets/buoi3/testimonials/avatar.png";
import dot1 from "../../assets/buoi3/testimonials/ellipse_1.png";
import dot2 from "../../assets/buoi3/testimonials/ellipse_2.png";

import "./Features.scss";

const Features = (props) => {
  console.log(props);
  return (
    <div>
      <div className="home">
        <section className="home__section">
          <h1>Save your data storage here.</h1>
          <img src={home} alt="" width="700px" height="350px" />
          <p>
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>
          <button>Learn more</button>
        </section>
      </div>

      <div className="features">
        <h1>Features</h1>
        <p>
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>
        <div className="cardList">
          {cardData.map((item, index) => (
            <Card
              key={item.id}
              img={item.image}
              description={item.description}
              title={item.title}
              background={item.background}
              slug={item.slug}
            ></Card>
          ))}
        </div>
      </div>

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
                    viverra enim erat tortor ultricies massa turpis. Arcu
                    pulvinar aenean nam laoreet nulla.
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
    </div>
  );
};

export default Features;
