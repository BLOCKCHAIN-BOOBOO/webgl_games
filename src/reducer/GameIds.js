import { GAMEID } from "../actiontypes/Types";

const GameiD = (
  state = {
    gameId: localStorage.getItem("gameId")
      ? localStorage.getItem("gameId")
      : null,
  },
  action
) => {
  console.log("state gameid", action);
  switch (action.type) {
    case GAMEID:
      return action.payload;

    default:
      return state;
  }
};

export default GameiD;
