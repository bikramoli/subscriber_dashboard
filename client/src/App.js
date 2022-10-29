import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SideBar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
