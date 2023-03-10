import { SIGNIN, SIGNOUT } from "../actiontypes/Types";

const userToken = (
  state = {
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    username: localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "",
    email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
  },
  action
) => {
  console.log("acti token", action.payload);

  switch (action.type) {
    case SIGNIN:
      return { ...state, state: action.payload };
    case SIGNOUT:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};

export default userToken;
