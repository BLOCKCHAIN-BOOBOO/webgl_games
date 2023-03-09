import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Iframe from "react-iframe";
import Content from "./contet";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Game = () => {
  const [gamedetails, setgamedetails] = useState([]);
  const params = useParams("");
  console.log(params);
  let token = useSelector((state) => {
    console.log("home token", state);
    return state?.userToken?.token ? state?.userToken?.token : "";
  });
  const fetchgamedetails = async () => {
    try {
      await axios({
        method: "get",
        url: "https://html-game-api.kryptofam.com/game",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: params,
      }).then((res) => {
        console.log(res);
        setgamedetails(res?.data?.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchgamedetails();
  }, []);
  return (
    <div className="relative mt-10">
      {/* lg:ml-36 md:ml-36 sm:ml-36  */}
      <div className="unity-div">
        <div className="unity-container">
          <Iframe
            // src=" https://html-game-api.kryptofam.com/play/CrazyShipParking2D/index.html"
            src={gamedetails.url}
            id=""
            height="600px"
            width="100%"
            className=""
            allow="autoplay"
            display="block"
            position="relative"
          />

          <Content id={params.id} />
        </div>
      </div>
    </div>
  );
};

export default Game;
