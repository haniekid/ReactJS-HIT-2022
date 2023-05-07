import { Route, Routes } from "react-router";
import "./App.css";

import HomeNotSignIn from "./components/HomeNotSignIn.jsx";
import SignIn from "./components/SignIn.jsx";
import HomeSignIn from "./components/HomeSignIn";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeNotSignIn />} />
        <Route path="/home-sign-in" element={<HomeSignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<h1>not found 404 !!!</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
