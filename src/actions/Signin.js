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
      sessionStorage.setItem("token", data?.data?.token);
      sessionStorage.setItem("email", data?.data?.email);
      sessionStorage.setItem("username", data?.data?.username);
      let token = sessionStorage.getItem("token");
      let email = sessionStorage.getItem("email");
      let username = sessionStorage.getItem("username");
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
