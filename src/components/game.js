import React, { useEffect } from "react";
import { useState } from "react";
import Iframe from 'react-iframe'


const Game=()=>{


    const [play, setPlay] =useState("https://kryptofam.com");
    const [vid,setvid] =useState("")
      let vurl="";
    useEffect(()=>{
    setvid(play)
    console.log(vid)
    },[play])
    
    
    return(
<div className="unity-div">
    <div className="unity-container">
{/* <div className="flex justify-center "> */}
<Iframe 
// url="https://www.sdrive.app/embed/1ptBQD"
// url={vid}
src={vid}
        // width="640px"
        // height="320px"
        id="" height="600px" width="100%"
        className=""
        allow="autoplay"
        display="block"
        position="relative"/>

{/* <iframe src="https://booboogamesorg.itch.io/crazy-ship-parking-2d" title="description"></iframe> */}
{/* <iframe src={vid} name="iframe_a" height="600px" width="100%" title="Iframe Example"></iframe> */}

    
{/* </div> */}
{/* <Content video={setPlay} /> */}
</div>
</div>

);
};

export default Game;