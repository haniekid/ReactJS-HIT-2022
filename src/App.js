import { Route, Routes } from "react-router";
import "./App.css";

import HomeNotSignIn from "./components/HomeNotSignIn.jsx";
import SignIn from "./components/SignIn.jsx";
import HomeSignIn from "./components/HomeSignIn";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="reactjs-class-hitclub/" element={<HomeNotSignIn />} />
        <Route
          path="reactjs-class-hitclub/home-sign-in"
          element={<HomeSignIn />}
        />
        <Route path="reactjs-class-hitclub/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
