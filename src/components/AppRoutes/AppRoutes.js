import "../../App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Game from "../game";
import Home from "../home";
import Login from "../login";
import Signup from "../signup";
import Settings from "../settings";
import Favourite from "../favourite";
import { ValidateToken } from "../tokenvalidator/TokenValidate";
import SidebarLayout from "../sidebarlayout";
import { useSelector } from "react-redux";
// import Frontend from "./layouts/Frontend";

const AppRoutes = () => {
  // let token = window.sessionStorage.getItem("token");
  let userdata = useSelector((state) => {
    console.log("state token", state);
    return state?.userToken?.state ? state?.userToken?.state : state?.userToken;
  });

  console.log("token", userdata.token);

  useEffect(() => {
    if (userdata.token) {
      if (ValidateToken(userdata.token)) {
        console.log("Token Valid");
        return;
      } else {
        console.log("Session Expired, Signingout");
      }
    }
    return () => {};
  }, [userdata.token]);

  return (
    <div className="App">
      {/* {token && ValidateToken() ? ( */}
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/favourite" element={<Favourite />}></Route>
          <Route path="/game/:id" element={<Game />}></Route>
        </Route>
        {/* </Routes>
      ) : (
        <Routes> */}
        <Route path="*" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        {/* </Routes>
      )} */}
      </Routes>
    </div>
  );
};

export default AppRoutes;
