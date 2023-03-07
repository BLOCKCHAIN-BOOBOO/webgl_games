import jwtDecode from "jwt-decode";

export const GetDecodedToken = () => {
  console.log("main");
  let token = window.sessionStorage.getItem("token");
  if (token) {
    let user_object = token;
    const DecodedToken = jwtDecode(user_object);
    console.log("token valid");
    return DecodedToken;
  } else {
    console.log("Token Not Found");
    return false;
  }
};

export const ValidateToken = () => {
  const DecodedToken = GetDecodedToken();
  if (DecodedToken) {
    let currentDate = new Date();
    if (DecodedToken.exp * 1000 < currentDate.getTime()) {
      // window.location.reload();
      console.log("Token Expired");
      return false; //Token Expired
    } else {
      return true; //Token Not Expired
    }
  } else {
    console.log("Token NotFound");
    return false;
  }
};
