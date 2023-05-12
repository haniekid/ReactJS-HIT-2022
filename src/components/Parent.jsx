import React, { useState } from "react";
import userData from "./mock.json";
import Child1 from "./Child1";

const Parent = () => {
  const [data, setData] = useState(userData);
  const increaseAgeById = (id) => {
    const idx = data.findIndex((item) => item.id === id);
    if (idx === -1) return;

    const newData = [...data];
    newData[idx].age += 1;

    setData(newData);
    // saveState('data', newData)
  };

  return (
    <div>
      PARENT
      {userData.map((item) => (
        <li key={item.id}>
          Id: {item.id} Name: {item.name} Age: {item.age}
        </li>
      ))}
      <div></div>
      <Child1 data={userData[1]} increaseAgeById={increaseAgeById}></Child1>
    </div>
  );
};

export default Parent;
