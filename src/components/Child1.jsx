import React from "react";
import ChildOfChild1 from "./ChildOfChild1";

const Child1 = ({ data, increaseAgeById }) => {
  const handleIncreaseAgeById = () => {
    if (!data.id) return;
    increaseAgeById(data.id);
  };
  return (
    <div>
      <hr /> <br />
      <div>CHILD 1</div>
      <div>Name: {data.name}</div>
      <div>Age: {data.age}</div>
      <button
        onClick={handleIncreaseAgeById}
        style={{ padding: " 0.5rem 2rem", background: "#ccc" }}
      >
        Increase age
      </button>
      <hr />
      <br />
      <ChildOfChild1 daddyName={data.name} />
    </div>
  );
};

export default Child1;
