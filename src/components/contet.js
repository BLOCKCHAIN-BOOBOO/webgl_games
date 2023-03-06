import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Content = ({ id }) => {
  const [gamecomments, setgamecomments] = useState([]);
  const [info, setinfo] = useState([]);

const savecomment=async()=>{
     try {
       await axios
         .get(`https://html-game-api.kryptofam.com/game?id=${id}`)
         .then((res) => {
           console.log(res?.data?.data);
           setinfo(res?.data?.data);
         });
     } catch (err) {
       console.log(err);
     }
}

  const fetchgamedetails = async () => {
    try {
      await axios
        .get(`https://html-game-api.kryptofam.com/game?id=${id}`)
        .then((res) => {
          console.log(res?.data?.data);
          setinfo(res?.data?.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchgamedetails();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex text-red-500 text-lg float-left text-left  font-semibold py-5">
        <span className="border-b-2 border-red-500">More Information</span>
        <i class="fa fa-angle-down text-xl font-semibold self-center align-middle text-red-500"></i>
      </div>
      {/* <div>{info.description}</div> */}
      <div className="flex flex-row self-center text-center py-5 align">
        <input
          type="text"
          name="search"
          className="header-search bg-red-200 
         b-2 px-3 p-4 h-full dark:focus:border-red-300 focus:ring-red-300 focus:border-red-300 border-0
      border-red-300 placeholder-white font-semibold focus:outline-none 
              xl:w-96 md:w-96 sm:w-60 w-40 block text-white  rounded-full sm:text-sm focus:ring"
          placeholder="Type Comments...."
        />
        <button
          type="button"
          onClick={savecomment}
          className="bg-red-500 w-60 text-white font-semibold -ml-20 px-12 text-xs rounded-full "
        >
          {" "}
          Send Comment
        </button>
      </div>

      {/* <div className="text-sm font-semibold pt-10">This content is constant no need to change the content for any game</div>

    <div className="flex m-3">
<button className="bg-blue-400 text-white text-sm py-2 px-4 m-2" onClick={() => video("https://nft.radiqal.com")}>video1</button>
<button className="bg-blue-600 text-white text-sm py-2 px-4 m-2" onClick={()=>video("http://127.0.0.1:5500/index.html")}>video2</button>

    </div> */}
    </div>
  );
};

export default Content;
