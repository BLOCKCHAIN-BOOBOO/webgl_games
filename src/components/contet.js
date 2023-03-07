import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import profile from "../images/profile.png";

import uparrow from "../images/uparrow.png";
import { Accordion } from "react-bootstrap-accordion";
import Iframe from "react-iframe";

const Content = ({ id }) => {
  const [gamecomments, setgamecomments] = useState([]);
  const [info, setinfo] = useState([]);
  const [comment, setcomment] = useState("");

  const savecomment = async () => {
    try {
      console.log(comment);
      await axios
        .post(
          `https://html-game-api.kryptofam.com/add_comments?id=${id}&comment=${comment}`
        )
        .then((res) => {
          if (res?.data?.code === "success") {
            fetchgamedetails();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchgamedetails = async () => {
    try {
      await axios
        .get(`https://html-game-api.kryptofam.com/game?id=${id}`)
        .then((res) => {
          console.log(res?.data?.data?.comments);
          setinfo(res?.data?.data);
          setgamecomments(res?.data?.data?.comments);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchgamedetails();
  }, [comment]);

  return (
    <div className="flex flex-col mt-3 px-2">
      {/* <div className="flex text-red-500 text-lg float-left text-left  font-semibold py-5">
        <span className="border-b-2 border-red-500">More Information</span>
        <i class="fa fa-angle-down text-xl font-semibold self-center align-middle text-red-500"></i>
      </div> */}

      <Accordion
        id="first"
        title="More Information"
        className="flex float-left text-left flex-col accordion-image first"
      >
        {/* onClick={getclick}  */}



                        <div className="body-height close-accordion">
                        <div>{info.description}</div>
                        <div> gfhsdg hfjsg fsjhg fjhdsg</div>
                            
                        </div>
                      </Accordion>

          <div className="flex xl:flex-row md:flex-row sm:flex-row flex-row self-center text-center py-5 align">
        <input
          type="text"
          name="search"
          onChange={(e) => {
            setcomment(e.target.value);
          }}
          className="header-search bg-red-200 
         b-2 px-3 p-4 h-full dark:focus:border-red-300 focus:ring-red-300 focus:border-red-300 border-0
      border-red-300 placeholder-white font-semibold focus:outline-none 
              xl:w-96 md:w-96 sm:w-60 w-60 block text-white  rounded-full sm:text-sm focus:ring"
          placeholder="Type Comments...."
        />

        <button
          type="button"
          onClick={savecomment}
          className="bg-red-500 xl:w-60 md:w-60 sm:w-32 w-32 text-white font-semibold -ml-20
           xl:px-12 md:px-12 sm:px-6 px-4 py-2 text-xs rounded-full "
        >
          Send Comment
        </button>
      </div>     
      {gamecomments.map((comment) => {
        return (
          <div className="flex flex-col py-5 text-left float-left">
            <div className="flex flex-row w-full">
               <img src={profile} height="40" width="40" className="mr-2 self-center" alt="" />
            <span className="flex self-center text-sm font-normal">Profile</span>
            </div>
          <div key={comment._id}>{comment.text}</div>
          </div>
        )
      })}
      </div>
  );
};

export default Content;
