
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import home from "../images/home.png"
import star from "../images/star.png"
import settings from "../images/settings.png"
import logout from "../images/logout.png"
import profile from "../images/profile.png"
import { Link, NavLink, useNavigate } from "react-router-dom";



const Sidebar = () => {

  



  const mobileMenutoggle=(e)=>{
    let lists = document.querySelector('ul');
    lists.classList.toggle("ul-close");
   
    let list = document.querySelector('button');
    list.classList.toggle("close-icon");
    
         }
  const showMenu = () => {
    var element = document.getElementById("show-menu");
    element.classList.toggle("hidden");
    document.getElementById("show-menu").style.display = "block";
  };
  const closeMenu = () => {
    var element = document.getElementById("show-menu");
    element.classList.toggle("hidden");

    document.getElementById("show-menu").style.display = "none";
  };

 
    return (

<div>
<div className="lg:w-32 md:w-32 sm:w-32 h-full z-40 absolute lg:fixed md:fixed sm:fixed" style={{position: "sticky"}}>
{/* h-20 lg:h-full md:h-full sm:h-full */}
<div className="z-40 relative h-full">
{/* bg-red-600  pt-5 pb-5 shadow-2xl*/}

     


<div id="mySidenav" className="sidenav">
                  <div className="block text-3xl relative cursor-pointer md:hidden">
          <button className="flex flex-col float-left text-left left-2 top-6 mx-2 md:mx-0 bar-icon"
          // float-right right-8
           onClick={e=>mobileMenutoggle(e)}>
          </button>
        </div>

  <ul className="fixed z-10 flex flex-col
  sm:mt-20 mt-10 md:mt-20 xl:mt-20 bg-slate-800 sm:bg-slate-800 md:bg-slate-800 lg:bg-transparent
   font-bold md:flex md:items-center absolute z-[1] md:z-auto
  left-0 py-2 opacity-0 md:opacity-100 transition-all ease-in duration-500">
  {/* relative md:static top-[-400px] */}

  <li className="relative mb-5">
        <NavLink
          //  onClick={homepage}
          to="/home" id="home"  onClick={e=>mobileMenutoggle(e)}
          className="py-1 justify-center flex justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded 
          grow cursor-pointer transition duration-300 ease-in-out"
        >
          <span className="text-sm ml-2 self-center font-bold "> Home</span>  <img src={home} height="25" width="25" className="" alt="" />
        </NavLink>
      </li>

      <li className="relative mb-5">
        <NavLink
          //  onClick={homepage}
          to="/favourite"  id="favourite"  onClick={e=>mobileMenutoggle(e)}
          className="py-1 justify-center flex justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded 
          grow cursor-pointer transition duration-300 ease-in-out"
        >
          <span className="text-sm  ml-2 self-center font-bold "> Favourite</span> <img src={star} height="25" width="25" className="" alt="" />
        </NavLink>
      </li>

      <li className="relative mb-5">
        <NavLink
          //  onClick={homepage}
          to="/settings"  id="settings" onClick={e=>mobileMenutoggle(e)}
          className="py-1 justify-center flex justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded 
          grow cursor-pointer transition duration-300 ease-in-out"
        >
          <span className="text-sm self-center ml-2 font-bold "> Settings</span> <img src={settings} height="25" width="25" className="" alt="" />
        </NavLink>
      </li>

      <li className="relative mb-5">
        <NavLink id="logout"
          //  onClick={homepage}
          to="/"   onClick={e=>mobileMenutoggle(e)}
          className="py-1 justify-center flex justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded 
          grow cursor-pointer transition duration-300 ease-in-out"
        >
           <span className="text-sm ml-2 self-center font-bold "> Logout</span>  <img src={logout} height="25" width="25" className="" alt="" />
        </NavLink>
      </li>


   {/* <li className="relative mb-5">
      <a id="favourite" className="py-1 justify-center flex justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded 
       grow cursor-pointer transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <span className="text-sm self-center font-bold "> Favourite</span>
       <img src={star} height="25" width="25" className="" alt="" />
      </a>
    </li> 

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
    </li> */}
  </ul>
  {/* </div> */}
  </div>

</div>
</div>
</div>

      );
    };
    
    export default Sidebar;