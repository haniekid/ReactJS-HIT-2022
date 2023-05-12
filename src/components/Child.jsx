import React from "react";

const Child = (props) => {
  return (
    <div className="card">
      <h1>{props.id}</h1>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  );
};

export default Child;
