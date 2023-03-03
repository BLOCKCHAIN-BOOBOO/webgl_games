
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import games from "../images/games.png"
import home from "../images/home.png"
import wallet from "../images/wallet.png"
import notification from "../images/notification.png"
import star from "../images/star.png"
import line from "../images/line.png"
import group from "../images/group.png"
import settings from "../images/settings.png"
import logout from "../images/logout.png"
import profile from "../images/profile.png"

import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import game1 from "../images/game1.png"
import game2 from "../images/game2.png"
import game3 from "../images/game3.png"
import game4 from "../images/game4.png"



const Home = ({video}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    return (



<div className="pb-20">
<div className="lg:w-32 md:w-32 sm:w-40 h-20 lg:h-full md:h-full sm:h-full lg:fixed md:fixed sm:fixed" id="sidenavExample">
<div className="mb-10 h-full pt-5 pb-5">
{/* bg-red-600  shadow-2xl*/}

<div  id="show-menu" className=" mobile-menu sm:mobile-menu md:desktop-menu lg:desktop-menu text-white lg:text-black
 block sm:block md:block lg:block xl:block md:text-black sm:text-black">
   {/* hidden */}
 {/* <a href="javascript:void(0)" className="closebtn md:hidden lg:hidden " >&times;</a> */}
 {/* onClick={closeMenu()} */}

<div id="mySidenav" className="sidenav">
  <ul className="fixed z-10">
  {/* relative */}
  <li className="relative mb-5">
      <a id="home" className="py-1 justify-center flex justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded 
       grow cursor-pointer transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
   <span className="text-sm self-center font-bold "> Home</span>   <img src={home} height="25" width="25" className="" alt="" />        
      </a>
    </li>
    {/* <li className="relative mb-5">
      <a className="py-1 justify-center flex items-center overflow-hidden text-ellipsis whitespace-nowrap rounded grow cursor-pointer transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
       <img src={games} height="25" width="25" className="mr-2" alt="" />      
      </a>
    </li>
    <li className="relative mb-5">
      <a className="py-1 justify-center flex items-center overflow-hidden text-ellipsis whitespace-nowrap rounded grow cursor-pointer transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
       <img src={wallet} height="25" width="25" className="mr-2" alt="" />       
      </a>
    </li>   
       <li className="relative mb-5">
      <a className="py-1 justify-center flex items-center overflow-hidden text-ellipsis whitespace-nowrap rounded grow cursor-pointer transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
       <img src={notification} height="25" width="25" className="mr-2" alt="" />       
      </a>
    </li>   */}

 <li className="relative mb-5">
      <a id="favourite" className="py-1 justify-center flex justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded 
       grow cursor-pointer transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <span className="text-sm self-center font-bold "> Favourite</span> <img src={star} height="25" width="25" className="" alt="" />
      </a>
    </li>

    {/* <li className="relative mb-5">
      <a className="py-1 justify-center flex items-center overflow-hidden text-ellipsis whitespace-nowrap rounded grow cursor-pointer transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
       <img src={line} height="25" width="25" className="mr-2" alt="" />
      </a>
    </li>

    <li className="relative mb-5">
      <a className="py-1 justify-center flex items-center overflow-hidden text-ellipsis whitespace-nowrap rounded grow cursor-pointer transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
       <img src={group} height="25" width="25" className="mr-2" alt="" />
      </a>
    </li> */}

    <li className="relative mb-5">
      <a id="settings" className="py-1 justify-center flex justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded 
       grow cursor-pointer transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <span className="text-sm self-center font-bold "> Settings</span> <img src={settings} height="25" width="25" className="" alt="" />
      </a>
    </li>


    <li className="bottom-0 relative mt-28">
      <a id="logout" className="py-1 justify-center flex justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded 
       grow cursor-pointer transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <span className="text-sm self-center font-bold ">  Logout </span> <img src={logout} height="25" width="25" className="" alt="" />
      </a>
    </li>
  </ul>
  </div>

</div>
</div>



</div>






<section className="lg:ml-40 md:ml-40 sm:ml-40 relative ">
{/* pt-6 */}

	<div className="container relative md:flex flex-col md:items-left md:justify-between pl-4 py-4 px-10 md:py-4">
    <div className="lg:w-full text-left mt-20 sm:mt-10 md:mt-10 xl:mt-0"> 
                             
      <div className="flex justify-between flex-row xl:flex-row md:flex-row sm:flex-row ">
        
                 <input type="text" name="search" className="header-search bg-red-200  b-2 px-3 p-4 h-full dark:focus:border-red-300 focus:ring-red-300 focus:border-red-300 border-0
               border-red-300 placeholder-slate-500 font-normal focus:outline-none 
                        w-3/4  block text-slate-800  rounded-lg sm:text-sm focus:ring" placeholder="Search Games" />
                          

             <div className="flex flex-row header-search rounded-lg float-right bg-red-200">

             
             <div className="flex flex-col self-center ml-2"><span className="text-xs text-slate-500">Welcome</span>
              <span className="text-sm text-slate-500">Eddie Janson</span>
            </div>
            <div className="flex flex-col self-center text-center lg:ml-4">            
              <img src={profile} height="40" width="40" className="mr-2 self-center" alt="" />
             </div>
          
          </div>	
            </div>
           
            
         </div>	
     </div>
</section>


<section className="lg:ml-40 md:ml-40 sm:ml-40 relative pt-6">
  <div className="mr-10">
    <div className="text-3xl border-b-4 border-red-500 mb-10 float-left text-left font-bold border-b-600">GAMES</div>

    <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              // autoPlay={window.deviceType !== "mobile" ? true : false}
              // autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container w-full"
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px "
            >
             
<div className="star-div">
<div className="bg-red-600 z-10 relative rounded-xl w-3/4 self-center justify-center mx-auto">
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                </div>
             <div className="game-card z-0 rounded-xl">
             
                        <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                          <div onClick={() => video("https://nft.radiqal.com")}>
                          <NavLink to="/game" >
                              <img
                                src={game3}
                                height="200px"
                                // width="150px"
                                className="rounded-lg self-center"
                                alt=""
                              />
                          
                                <span className="text-sm text-white font-semibold float-left justify-start  text-left">
                            Lorem Ipsum
                                </span>
                                </NavLink>
                                                        
                          </div>
                        </div>
                      </div>
                      </div>


                      <div className="star-div">
<div className="bg-red-600 z-10 relative rounded-xl w-3/4 self-center justify-center mx-auto">
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                </div>
             <div className="game-card z-0 rounded-xl">
             
                        <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                          <div>
                              <img
                                src={game1}
                                height="200px"
                                // width="150px"
                                className="rounded-lg self-center"
                                alt=""
                              />
                          
                                <span className="text-sm text-white font-semibold float-left justify-start  text-left">
                            Lorem Ipsum
                                </span>
                             
                            
                          </div>
                        </div>
                      </div>
                      </div>

                      <div className="star-div">
<div className="bg-red-600 z-10 relative rounded-xl w-3/4 self-center justify-center mx-auto">
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                </div>
             <div className="game-card z-0 rounded-xl">
             
                        <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                          <div>
                              <img
                                src={game2}
                                height="200px"
                                // width="150px"
                                className="rounded-lg self-center"
                                alt=""
                              />
                          
                                <span className="text-sm text-white font-semibold float-left justify-start  text-left">
                            Lorem Ipsum
                                </span>
                             
                            
                          </div>
                        </div>
                      </div>
                      </div>

                      <div className="star-div">
<div className="bg-red-600 z-10 relative rounded-xl w-3/4 self-center justify-center mx-auto">
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                </div>
             <div className="game-card z-0 rounded-xl">
             
                        <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                          <div>
                              <img
                                src={game3}
                                height="200px"
                                // width="150px"
                                className="rounded-lg self-center"
                                alt=""
                              />
                          
                                <span className="text-sm text-white font-semibold float-left justify-start  text-left">
                            Lorem Ipsum
                                </span>
                             
                            
                          </div>
                        </div>
                      </div>
                      </div>

                      <div className="star-div">
<div className="bg-red-600 z-10 relative rounded-xl w-3/4 self-center justify-center mx-auto">
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                </div>
             <div className="game-card z-0 rounded-xl">
             
                        <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                          <div>
                              <img
                                src={game4}
                                height="200px"
                                // width="150px"
                                className="rounded-lg self-center"
                                alt=""
                              />
                          
                                <span className="text-sm text-white font-semibold float-left justify-start  text-left">
                            Lorem Ipsum
                                </span>
                             
                            
                          </div>
                        </div>
                      </div>
                      </div>

                      <div className="star-div">
<div className="bg-red-600 z-10 relative rounded-xl w-3/4 self-center justify-center mx-auto">
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                </div>
             <div className="game-card z-0 rounded-xl">
             
                        <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                          <div>
                              <img
                                src={game1}
                                height="200px"
                                // width="150px"
                                className="rounded-lg self-center"
                                alt=""
                              />
                          
                                <span className="text-sm text-white font-semibold float-left justify-start  text-left">
                            Lorem Ipsum
                                </span>
                             
                            
                          </div>
                        </div>
                      </div>
                      </div>


            </Carousel>


  </div>
</section>





<section className="lg:ml-40 md:ml-40 sm:ml-40 relative pt-6">
  <div className="mr-10">
    <div className="text-3xl border-b-4 border-red-500 mb-10 float-left text-left font-bold border-b-600">MOST POPULAR GAMES</div>

    <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              // autoPlay={window.deviceType !== "mobile" ? true : false}
              // autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container w-full"
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px "
            >
             
<div className="star-div">
<div className="bg-red-600 z-10 relative rounded-xl w-3/4 self-center justify-center mx-auto">
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                </div>
             <div className="game-card z-0 rounded-xl">
             
                        <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                          <div>
                              <img
                                src={game1}
                                height="200px"
                                // width="150px"
                                className="rounded-lg self-center"
                                alt=""
                              />
                          
                                <span className="text-sm text-white font-semibold float-left justify-start  text-left">
                            Lorem Ipsum
                                </span>
                             
                            
                          </div>
                        </div>
                      </div>
                      </div>


                      <div className="star-div">
<div className="bg-red-600 z-10 relative rounded-xl w-3/4 self-center justify-center mx-auto">
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                </div>
             <div className="game-card z-0 rounded-xl">
             
                        <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                          <div>
                              <img
                                src={game2}
                                height="200px"
                                // width="150px"
                                className="rounded-lg self-center"
                                alt=""
                              />
                          
                                <span className="text-sm text-white font-semibold float-left justify-start  text-left">
                            Lorem Ipsum
                                </span>
                             
                            
                          </div>
                        </div>
                      </div>
                      </div>

                      <div className="star-div">
<div className="bg-red-600 z-10 relative rounded-xl w-3/4 self-center justify-center mx-auto">
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                </div>
             <div className="game-card z-0 rounded-xl">
             
                        <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                          <div>
                              <img
                                src={game3}
                                height="200px"
                                // width="150px"
                                className="rounded-lg self-center"
                                alt=""
                              />
                          
                                <span className="text-sm text-white font-semibold float-left justify-start  text-left">
                            Lorem Ipsum
                                </span>
                             
                            
                          </div>
                        </div>
                      </div>
                      </div>

                      <div className="star-div">
<div className="bg-red-600 z-10 relative rounded-xl w-3/4 self-center justify-center mx-auto">
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                </div>
             <div className="game-card z-0 rounded-xl">
             
                        <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                          <div>
                              <img
                                src={game4}
                                height="200px"
                                // width="150px"
                                className="rounded-lg self-center"
                                alt=""
                              />
                          
                                <span className="text-sm text-white font-semibold float-left justify-start  text-left">
                            Lorem Ipsum
                                </span>
                             
                            
                          </div>
                        </div>
                      </div>
                      </div>

                      <div className="star-div">
<div className="bg-red-600 z-10 relative rounded-xl w-3/4 self-center justify-center mx-auto">
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                </div>
             <div className="game-card z-0 rounded-xl">
             
                        <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                          <div>
                              <img
                                src={game1}
                                height="200px"
                                // width="150px"
                                className="rounded-lg self-center"
                                alt=""
                              />
                          
                                <span className="text-sm text-white font-semibold float-left justify-start  text-left">
                            Lorem Ipsum
                                </span>
                             
                            
                          </div>
                        </div>
                      </div>
                      </div>

                      <div className="star-div">
<div className="bg-red-600 z-10 relative rounded-xl w-3/4 self-center justify-center mx-auto">
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                <i className="fa fa-star text-white text-xs"></i>
                </div>
             <div className="game-card z-0 rounded-xl">
             
                        <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                          <div>
                              <img
                                src={game2}
                                height="200px"
                                // width="150px"
                                className="rounded-lg self-center"
                                alt=""
                              />
                          
                                <span className="text-sm text-white font-semibold float-left justify-start  text-left">
                            Lorem Ipsum
                                </span>
                             
                            
                          </div>
                        </div>
                      </div>
                      </div>


            </Carousel>


  </div>
</section>
		</div>

      );
    };
    
    export default Home;