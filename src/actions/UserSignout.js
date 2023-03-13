import { SIGNOUT } from "../actiontypes/Types";

const UserSignOut = () => async (dispatch) => {
  try {
    localStorage.clear();
    const token = localStorage.setItem("token", "");
    const email = localStorage.setItem("email", "");
    const username = localStorage.setItem("username", "");
    const userdata = {
      email: email,
      token: token,
      username: username,
    };
    dispatch({ type: SIGNOUT, payload: userdata });
    return userdata;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};
export default UserSignOut;
