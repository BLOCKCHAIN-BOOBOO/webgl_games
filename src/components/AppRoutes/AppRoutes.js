import "../../App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Game from "../game";
import Home from "../home";
import Login from "../login";
import Signup from "../signup";
// import Frontend from "./layouts/Frontend";

function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/game/:id" element={<Game />}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
