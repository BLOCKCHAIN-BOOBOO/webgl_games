import { SIGNIN } from "../actiontypes/Types";

const userToken = (
  state = {
    token: sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : null,
  },
  action
) => {
  console.log("acti token", action.payload);

  switch (action.type) {
    case SIGNIN:
      return { ...state, state: action.payload };

    default:
      return state;
  }
};

export default userToken;
