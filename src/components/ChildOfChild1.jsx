import React, { useContext } from "react";
import store from "../context/store";

const ID = 1;
const ChildOfChild1 = ({ increaseAgeById, daddyName }) => {
  // const handleIncreaseAgeById = () => {
  //   if (!data.id) return;

  //   increaseAgeById(data.id);
  // };
  const userContext = useContext(store.UserContext);
  return (
    <div>
      <div>CHILD of CHILD 1</div>
      <div>I will rename my grandpa: CHILD 1</div>
      {/* <div>My grandpa name: {daddyName}</div> */}
      <div>My grandpa name: {userContext[ID].name}</div>
      <button
        type="button"
        style={{ padding: " 0.5rem 2rem", background: "#ccc" }}
      >
        Random name by id (2){" "}
      </button>
    </div>
  );
};

export default ChildOfChild1;
