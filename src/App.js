import React from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import "./App.css";

function App() {
  const { count } = useSelector((state) => state.counter1);
  return (
    <div className="App mt-10">
      <h1 className="text-center">THE COUNT FROM APP IS: {count}</h1>
      <Counter />
    </div>
  );
}

export default App;
