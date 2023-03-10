import axios from "axios";
import { SIGNIN } from "../actiontypes/Types";

export const UsersignIn = (userdata) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://booboo-login.kryptofam.com/users/login",
      userdata
    );
    console.log("data token", data);
    if (data?.code === "success") {
      localStorage.setItem("token", data?.data?.token);
      localStorage.setItem("email", data?.data?.email);
      localStorage.setItem("username", data?.data?.username);
      let token = localStorage.getItem("token");
      let email = localStorage.getItem("email");
      let username = localStorage.getItem("username");
      const userdata = {
        token: token,
        username: username,
        email: email,
      };
      await dispatch({ type: SIGNIN, payload: userdata });
      return data;
    }
  } catch (error) {
    console.log(error.message);
    return error;
  }
};
