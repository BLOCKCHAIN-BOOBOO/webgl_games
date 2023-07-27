import React, { useRef, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import games from "../images/games.png";
import home from "../images/home.png";
import wallet from "../images/wallet.png";
import notification from "../images/notification.png";
import star from "../images/star.png";
import line from "../images/line.png";
import group from "../images/group.png";
import settings from "../images/settings.png";
import logout from "../images/logout.png";
import profile from "../images/profile.png";
import bbicon from "../images/bbicon.png";
import Footer from "./footer";
// import bbicon from "../../public/bbicon.png"

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import bbglogo from "../images/bbfulllogo.png";
import axios from "axios";
import { GAMEID } from "../actiontypes/Types";
import { ValidateToken } from "./tokenvalidator/TokenValidate";
import UserSignOut from "../actions/UserSignout";

const Home = () => {
  const [allGames, setallGames] = useState([]);
  const [sorteddata, setsorteddata] = useState({ results: "" });
  const [search, setsearch] = useState("");
  const [favoritegames, setfavoritegames] = useState([]);
  const dispatch = useDispatch();

  let userdata = useSelector((state) => {
    console.log("home token", state);
    return state?.userToken?.state ? state?.userToken?.state : state?.userToken;
  });

  let navigate = useNavigate();

  let token = sessionStorage.getItem("token");
  sessionStorage.setItem("gameId", "");
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const dataFetchedRef = useRef(false);

  // let temp = [];

  const fetchapi = async () => {
    console.log("fetching");
    try {
      await axios({
        method: "get",
        url: "https://html-game-api.kryptofam.com/games",
        headers: {
          Authorization: `Bearer ${userdata.token}`,
        },
      }).then((res) => {
        console.log(res);

        setallGames(res?.data?.data);
      });
    } catch (err) {
      console.log(err);
      if (err.response?.data?.data?.message === "Invalid Token") {
        console.log("invalid token");
        navigate("/login");
      }
    }
  };

  const fetchfavoritegames = async () => {
    try {
      await axios({
        method: "get",
        url: "https://html-game-api.kryptofam.com/favorite_games",
        headers: {
          Authorization: `Bearer ${userdata.token}`,
        },
      }).then((res) => {
        console.log("favar", res);

        setfavoritegames(res?.data?.data);
      });
    } catch (err) {
      console.log(err);
      if (err.response?.data?.data?.message === "Invalid Token") {
        console.log("invalid token");
        navigate("/login");
      }
    }
  };

  const searchrecords = (searchtxt) => {
    // If input has changed
    console.log(searchtxt);
    if (searchtxt !== "") {
      setsearch(searchtxt);
      console.log(searchtxt);
      // Split the input to get each words
      const words = searchtxt.toLowerCase().trim().split(" ");
      // List here your attributes you want to use in search algorithm
      const attrs = ["name"];
      let res = [];

      // Sort items

      allGames &&
        allGames.forEach((item) => {
          let isIn = false;

          // For each attribute
          attrs.forEach((attr) => {
            const attrValue = item[attr].toLowerCase();

            // For each word in search input
            words.forEach((word) => {
              // Check if word is in item
              const index = attrValue.indexOf(word);

              // If the word is in the item
              if (index != -1) {
                // Insert strong tag
                let strongValue = addHighlightAt(item[attr], word, index);

                // If item is already in the result
                if (isIn) {
                  // Increase matchScore
                  res[res.length - 1].metadata.matchScore += word.length;
                  res[res.length - 1].data[attr] = strongValue;
                } else {
                  // Set score and attribute
                  res.push({
                    data: {
                      ...item,
                      [attr]: strongValue,
                    },
                    metadata: { matchScore: word.length },
                  });
                  isIn = true;
                }
              }
            });
          });
        });

      // Sort res by matchScore DESC
      res = sortByMatchScore(res);
      console.log("res", res);
      setsorteddata({
        results: res,
      });
    }
    if (searchtxt === "" || searchtxt.length < 0) {
      setsorteddata({ results: "" });
      setsearch("");
    }
  };

  const addHighlightAt = (text, word, index) => {
    // Si l'indice est valide
    text = [text.slice(0, index), text.slice(index)].join("");

    text = [
      text.slice(0, index + word.length + 8),
      ,
      text.slice(index + word.length + 8),
    ].join("");

    return text;
  };

  const sortByMatchScore = (res) => {
    return res.sort((a, b) => {
      return b.metadata.matchScore - a.metadata.matchScore;
    });
  };

  const clearsearch = () => {
    setsearch("");
    setsorteddata({ results: "" });
  };

  const getGameId = (id) => {
    console.log("gameId", id);
    if (id) {
      let gameId = id;
      sessionStorage.setItem("gameId", gameId);

      dispatch({ type: GAMEID, payload: gameId });
    }
  };

  useEffect(() => {
    fetchapi();
    fetchfavoritegames();
  }, []);

  return (
    <div className="min-height-100">
      <div className="pb-20 lg:ml-32 md:ml-32 sm:ml-32">
        <section className="" id="games">
          <div className="flex flex-col">
            <div className=" relative md:flex flex-col md:items-left md:justify-between pl-4 py-4 px-10 md:py-4">
              <div className="lg:w-full text-left mt-5 sm:mt-5 md:mt-5 xl:mt-0">
                <div className="flex justify-between flex-row xl:flex-row md:flex-row sm:flex-row ">
                  <div className="flex self-center m-2 align-middle">
                    <img className="" height="120" width="120" src={bbglogo} />
                  </div>
                  <div className="serchwrap sm:hidden hidden md:flex xl:flex">
                    {(sorteddata && sorteddata.results) ||
                    (sorteddata && sorteddata.results.length > 0) ? (
                      <i
                        className="fa fa-times  icnstyle"
                        aria-hidden="true"
                        onClick={clearsearch}
                      ></i>
                    ) : (
                      <i
                        className="fa fa-search icnstyle"
                        aria-hidden="true"
                      ></i>
                    )}

                    <input
                      type="text"
                      name="search"
                      value={search}
                      onChange={(e) => searchrecords(e.target.value)}
                      className="header-search bg-red-200  b-2 px-3 p-4 h-full dark:focus:border-red-300 focus:ring-red-300 focus:border-red-300 border-0
               border-red-300 placeholder-slate-500 font-normal focus:outline-none 
                        w-3/4  block text-slate-800  rounded-lg sm:text-sm focus:ring"
                      placeholder="Search Games"
                    />
                  </div>
                  <div className="flex xl:w-32 md:w-40 sm:w-32 w-32 flex-row header-search rounded-lg float-right bg-red-200">
                    <div className="flex flex-col self-center ml-2">
                      <span className="text-xs text-slate-500">Welcome</span>
                      <span className="text-sm text-slate-500">
                        {userdata.username}
                      </span>
                    </div>
                    <img
                      src={`https://ui-avatars.com/api/?bold=true&name=${userdata.username}`}
                      height="40"
                      width="40"
                      className=" self-center rounded-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative md:flex flex-col md:items-left pl-4 py-4 px-10 md:py-4">
              <div className="serchwrap self-center text-center justify-center sm:flex flex md:hidden xl:hidden">
                {(sorteddata && sorteddata.results) ||
                (sorteddata && sorteddata.results.length > 0) ? (
                  <i
                    className="fa fa-times  icnstyle"
                    aria-hidden="true"
                    onClick={clearsearch}
                  ></i>
                ) : (
                  <i className="fa fa-search icnstyle" aria-hidden="true"></i>
                )}

                <input
                  type="text"
                  name="search"
                  value={search}
                  onChange={(e) => searchrecords(e.target.value)}
                  className="header-search bg-red-200  b-2 px-3 p-4 h-full dark:focus:border-red-300 
                    focus:ring-red-300 focus:border-red-300 border-0
               border-red-300 placeholder-slate-500 font-normal focus:outline-none 
                        w-full  block text-slate-800  rounded-lg sm:text-sm focus:ring"
                  placeholder="Search Games"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative pt-6 px-2">
          <div className=" flex flex-col">
            <div>
              <span className="xl:text-3xl md:text-2xl sm:text-2xl text-xl border-b-4 border-red-500 mb-10 float-left text-left font-bold border-b-600">
                GAMES
              </span>
            </div>
            <div
              className="flex flex-wrap justify-center sm:justify-start md:justify-start xl:justify-start" >
           
              {!(
                (sorteddata && sorteddata.results) ||
                (sorteddata && sorteddata.results.length > 0)
              )
                ? allGames &&
                  allGames.map((details, index) => {
                    console.log("game list", details);
                    return (
                      <div className="star-div m-2">
                        <NavLink
                          to={
                            "/game/" + "?" + details.name.split(" ").join("_")
                          }
                        >
                          <div className="bg-red-600 z-10 relative flex align-middle py-1 rounded-xl xl:w-3/4 md:w-3/4 sm:w-3/4 w-3/4 self-center justify-center mx-auto">
                            <i className="fa fa-star text-white text-xs"></i>
                            <i className="fa fa-star text-white text-xs"></i>
                            <i className="fa fa-star text-white text-xs"></i>
                            <i className="fa fa-star text-white text-xs"></i>
                            <i className="fa fa-star text-white text-xs"></i>
                          </div>
                          <div className="game-card z-40 rounded-xl">
                            <div className="flex flex-col -mt-3 xl:p-4 md:p-4 sm:p-4 p-2 w-full self-center text-center mx-auto">
                              <div>
                                <img
                                  src={
                                    "https://html-game-api.kryptofam.com" +
                                    details.thumbnail
                                  }
                                  height="200px"
                                  className="rounded-lg self-center w-full"
                                  alt=""
                                  onClick={(e) => getGameId(details._id)}
                                />

                                <span className="text-truncate xl:text-sm md:text-sm sm:text-sm text-xs text-white uppercase font-semibold float-left justify-start  text-left">
                                  {details.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    );
                  })
                : sorteddata &&
                  sorteddata.results.map((details, index) => {
                    console.log("sorted  list", details);
                    return (
                      <div className="star-div m-2">
                        <NavLink
                          to={
                            "/game/" +
                            "?" +
                            details.data.name.split(" ").join("_")
                          }
                        >
                          <div className="bg-red-600 z-10 relative rounded-xl align-middle py-1 xl:w-3/4 md:w-3/4 sm:w-3/4 w-3/4 self-center justify-center mx-auto">
                            <i className="fa fa-star text-white text-xs"></i>
                            <i className="fa fa-star text-white text-xs"></i>
                            <i className="fa fa-star text-white text-xs"></i>
                            <i className="fa fa-star text-white text-xs"></i>
                            <i className="fa fa-star text-white text-xs"></i>
                          </div>
                          <div className="game-card z-0 rounded-xl">
                            <div className="flex flex-col -mt-3 xl:p-4 md:p-4 sm:p-4 p-2 w-full self-center text-center mx-auto">
                              <div>
                                <img
                                  src={
                                    "https://html-game-api.kryptofam.com" +
                                    details.data.thumbnail
                                  }
                                  height="200px"
                                  className="rounded-lg self-center w-full"
                                  alt=""
                                  onClick={(e) => getGameId(details.data._id)}
                                />

                                <span className="text-truncate xl:text-sm md:text-sm sm:text-sm text-xs text-white uppercase font-semibold float-left justify-start  text-left">
                                  {details.data.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    );
                  })}
            </div>
          </div>
        </section>

        <section className="relative pt-6 px-2" id="favourites">
          <div className=" flex flex-col">
            <div>
              <span className="xl:text-3xl md:text-2xl sm:text-2xl text-xl border-b-4 border-red-500 mb-10 float-left text-left font-bold border-b-600">
                FAVOURITES{" "}
              </span>
            </div>

            <div
              className="flex flex-wrap justify-center sm:justify-start md:justify-start xl:justify-start">
            
              {favoritegames &&
                favoritegames.map((details, index) => {
                  console.log("favorite game list", details);
                  return (
                    <div className="star-div m-2">
                      <NavLink
                        to={"/game/" + "?" + details.name.split(" ").join("_")}
                      >
                        <div className="bg-red-600 z-10 relative flex align-middle py-1 rounded-xl xl:w-3/4 md:w-3/4 sm:w-3/4 w-3/4 self-center justify-center mx-auto">
                          <i className="fa fa-star text-white text-xs"></i>
                          <i className="fa fa-star text-white text-xs"></i>
                          <i className="fa fa-star text-white text-xs"></i>
                          <i className="fa fa-star text-white text-xs"></i>
                          <i className="fa fa-star text-white text-xs"></i>
                        </div>
                        <div className="game-card z-0 rounded-xl">
                          <div className="flex flex-col -mt-3 xl:p-4 md:p-4 sm:p-4 p-2 w-full self-center text-center mx-auto">
                            <div>
                              <img
                                src={
                                  "https://html-game-api.kryptofam.com" +
                                  details.thumbnail
                                }
                                height="200px"
                                className="rounded-lg self-center w-full"
                                alt=""
                                onClick={(e) => getGameId(details.game_id)}
                              />

                              <span className="text-truncate xl:text-sm md:text-sm sm:text-sm text-xs text-white font-semibold uppercase float-left justify-start  text-left">
                                {details.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
