import React from "react";

const Card = (props) => {
  return (
    <div className="cardItem">
      <img src={props.background} width="100%" height="100%" alt="" />
      <div className="cardItem-info">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <h2>Learn more</h2>
        <i class="fa-light fa-arrow-right"></i>
      </div>

      <div className="cardItem-img">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
};

export default Card;
