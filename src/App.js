import Login from "./components/Login.jsx";
import { Route, Routes } from "react-router";
import Content from "./components/Content.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<div>about</div>}></Route>
          <Route path="/content" element={<Content />}></Route>
          <Route path="*" element={<div>not found 404</div>}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
