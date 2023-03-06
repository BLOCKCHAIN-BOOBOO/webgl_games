import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Iframe from "react-iframe";
import Content from "./contet";
import { useParams } from "react-router-dom";
const Game = () => {
  const [play, setPlay] = useState("http://127.0.0.1:5500/index.html");
  const [vid, setvid] = useState("");
  const [gamedetails, setgamedetails] = useState([]);
  const params = useParams("");
  console.log(params);
  let vurl = "";

  const fetchgamedetails = async () => {
    try {
      await axios
        .get(`https://html-game-api.kryptofam.com/game?id=${params.id}`)
        .then((res) => {
          console.log(res);
          setgamedetails(res?.data?.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchgamedetails();
    setvid(play);
    console.log(vid);
  }, [play]);
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

          <Content />
        </div>
      </div>
    </div>
  );
};

export default Game;
