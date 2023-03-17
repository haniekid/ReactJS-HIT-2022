import React, { useState } from "react";
import "./ToggleStyles.css";

const Toggle = () => {
  const [on, setOn] = useState(false);
  const handleOnClick = () => {
    setOn((on) => !on);
  };

  return (
    <div className={`toggle ${on ? "active" : ""}`} onClick={handleOnClick}>
      <div className={`circle ${on ? "active" : ""}`}></div>
    </div>
  );
};

export default Toggle;
