import React from "react";
import "./Features.scss";
import Card from "./Card";
import { cardData } from "./data";

const Features = (props) => {
  console.log(props);
  return (
    <div className="features">
      <h1>Features</h1>
      <p>
        Some of the features and advantages that we provide for those of you who
        store data in this Data Warehouse.
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
  );
};

export default Features;
