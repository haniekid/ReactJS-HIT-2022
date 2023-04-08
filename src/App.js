import "./App.css";
import Photo from "./components/Photo";
import Toggle from "./components/Toggle.jsx";
import { useState } from "react";

function App() {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn((on) => !on);
  };
  return (
    <div className="App">
      {/* <button onClick={handleToggle} style={{ margin: "5rem" }}>
        {on ? "Nhấn để ẩn toggle" : "Nhấn để hiện toggle"}
      </button>
      {on && <Toggle />} */}
      <Photo />
    </div>
  );
}

export default App;
