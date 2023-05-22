import React from "react";
import { useSelector } from "react-redux";

import Counter from "./components/redux/Counter";
import "./App.css";

function App() {
  const { count } = useSelector((state) => state.counter);
  return (
    <div className="App">
      {/* <Home /> */}

      <h1 className="text-center">THE COUNT FROM APP IS: {count}</h1>
      <Counter />
    </div>
  );
}

export default App;
