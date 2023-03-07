import "../../App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Game from "../game";
import Home from "../home";
import Login from "../login";
import Signup from "../signup";
import Settings from "../settings";
import Favourite from "../favourite";
import SidebarLayout from "../sidebarlayout";
// import Frontend from "./layouts/Frontend";

function AppRoutes() {
  return (
    <div className="App">
       {/* w-full */}
      <Routes>
        <Route path="*" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route element={<SidebarLayout/>}>
        <Route path="/home" element={<Home />}></Route>

        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>
        <Route path="/game/:id" element={<Game />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
