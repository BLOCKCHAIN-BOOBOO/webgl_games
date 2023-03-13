import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import profile from "../images/profile.png";

import uparrow from "../images/uparrow.png";
import { Accordion } from "react-bootstrap-accordion";
import Iframe from "react-iframe";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { COMMENTS } from "../actiontypes/Types";

const Content = ({ id }) => {
  const [gamecomments, setgamecomments] = useState([]);
  const [info, setinfo] = useState([]);
  const [comment, setcomment] = useState("");
  const params = useParams("");
  console.log("asdfds", params);
  let dispatch = useDispatch();
  let userdata = useSelector((state) => {
    console.log("home token", state);
    return state?.userToken?.state ? state?.userToken?.state : state?.userToken;
  });

  let token = sessionStorage.getItem("token");

  const savecomment = async () => {
    setcomment("");
    try {
      console.log(comment);
      let data = {
        comment: comment,
      };
      await axios({
        method: "post",
        url: `https://html-game-api.kryptofam.com/add_comments?id=${params.id}`,
        headers: {
          Authorization: `Bearer ${userdata.token}`,
        },
        data: data,
      }).then((res) => {
        console.log("comment added", res);
        if (res?.data?.code === 200) {
          setgamecomments(res?.data?.data?.comments);
        }
      });
    } catch (err) {
      console.log("ertr", err);
      setcomment("");
    }
  };

  const fetchgamedetails = async () => {
    try {
      await axios({
        method: "get",
        url: "https://html-game-api.kryptofam.com/game",
        headers: {
          Authorization: `Bearer ${userdata.token}`,
        },
        params: params,
      }).then((res) => {
        console.log("comments deta", res);
        setinfo(res?.data?.data);
        setgamecomments(res?.data?.data?.comments);
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
          {/* <div> gfhsdg hfjsg fsjhg fjhdsg</div> */}
        </div>
      </Accordion>

      <div className="flex flex-row self-center text-center py-5 align">
        <input
          type="text"
          name="search"
          value={comment}
          onChange={(e) => {
            setcomment(e.target.value);
          }}
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
          Send Comment
        </button>
      </div>
      <div className="flex w-full flex-col h-96 overflow-y-auto">
      {gamecomments
        .slice()
        .reverse()
        .map((comment) => {
          return (
          
            <div className="flex flex-col py-3 text-left float-left">
              <div className="flex flex-row w-full">
                <img
                  src={profile}
                  height="40"
                  width="40"
                  className="mr-2 self-center"
                  alt=""
                />
                <span className="flex self-center text-sm font-normal">
                  Profile
                </span>
              </div>
              <div key={comment._id}>{comment.text}</div>
            </div>
          
          );
        })}
      </div>
    </div>
  );
};

export default Content;
