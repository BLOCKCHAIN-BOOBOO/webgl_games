import "../../App.css";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Game from "../game";
import Home from "../home";
import Login from "../login";
import Signup from "../signup";
import Settings from "../settings";
import Favourite from "../favourite";
import { ValidateToken } from "../tokenvalidator/TokenValidate";
import SidebarLayout from "../sidebarlayout";
import { useSelector, useDispatch } from "react-redux";
import UserSignOut from "../../actions/UserSignout";
// import Frontend from "./layouts/Frontend";

const AppRoutes = () => {
  // let token = window.sessionStorage.getItem("token");
  let userdata = useSelector((state) => {
    console.log("home token", state);
    return state?.userToken?.state ? state?.userToken?.state : state?.userToken;
  });
  let navigate = useNavigate();
  let dispatch = useDispatch();
  console.log("token", userdata.token);

  const clearSession = async () => {
    console.log("clear sessions");
    navigate("/login");
    dispatch(UserSignOut());
    sessionStorage.clear();
  };

  useEffect(() => {
    if (userdata.token) {
      if (ValidateToken(userdata.token)) {
        console.log("Token Valid");
        return;
      } else {
        console.log("Session Expired, Signingout");
        navigate("/login");
        clearSession();
      }
    } else {
      navigate("/login");
      clearSession();
    }
    return () => {};
  }, [userdata.token]);

  return (
    <div className="App">
      {userdata.token && ValidateToken(userdata.token) ? (
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/favourite" element={<Favourite />}></Route>
            <Route path="/game/" element={<Game />}></Route>
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="*" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
