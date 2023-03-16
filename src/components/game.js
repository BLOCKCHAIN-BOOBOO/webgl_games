import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Iframe from "react-iframe";
import Content from "./contet";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Game = () => {
  const [gamedetails, setgamedetails] = useState([]);
  // const params = useParams("");
  // console.log(params);
  let userdata = useSelector((state) => {
    console.log("home token", state);
    return state?.userToken?.state ? state?.userToken?.state : state?.userToken;
  });

  let gameId = useSelector((state) => {
    console.log("gameid state", state);
    return state?.GameiD?.gameId
      ? state?.GameiD?.gameId
      : state?.GameiD;
  });

  console.log("gameid", gameId);

  const fetchgamedetails = async () => {
    try {
      let gameid = { id: gameId };
      await axios({
        method: "get",
        url: "https://html-game-api.kryptofam.com/game",
        headers: {
          Authorization: `Bearer ${userdata.token}`,
        },
        params: gameid,
      }).then((res) => {
        console.log(res);
        setgamedetails(res?.data?.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(gameId);
    fetchgamedetails();
  }, []);
  return (
    <div className="relative mt-10">
      {/* lg:ml-36 md:ml-36 sm:ml-36  */}
      <div className="unity-div">
        <div className="unity-container">
          <Iframe
            src={"https://html-game-api.kryptofam.com" + gamedetails.url}
            id=""
            height="600px"
            width="100%"
            className="w-full flex"
            allow="autoplay"
            display="block"
            position="relative"
          />
          <Content id={gameId} />
        </div>
      </div>
    </div>
  );
};

export default Game;
