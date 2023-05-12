import { Route, Routes } from "react-router";
import Parent from "./components/Parent.jsx";
import store from "./context/store";
import userData from "./components/mock.json";
import "./App.css";

function App() {
  const { UserContext } = store;
  return (
    <UserContext.Provider value={userData}>
      <div className="App" style={{ width: "800px", margin: "3rem auto" }}>
        <Routes>
          <Route path="/" element={<Parent />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
