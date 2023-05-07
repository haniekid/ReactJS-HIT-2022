import React, { useState } from "react";
import { Route, Routes } from "react-router";

import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="reactjs-class-hitclub/" element={<Home />} />
        <Route path="reactjs-class-hitclub/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
