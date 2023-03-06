
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import home from "../images/home.png"
import star from "../images/star.png"
import settings from "../images/settings.png"
import logout from "../images/logout.png"
import profile from "../images/profile.png"



const Sidebar = () => {
 
    return (

<div>
<div className="lg:w-32 md:w-32 sm:w-40 h-full lg:fixed md:fixed sm:fixed" id="sidenavExample">
{/* h-20 lg:h-full md:h-full sm:h-full */}
<div className="mb-10 h-full">
{/* bg-red-600  pt-5 pb-5 shadow-2xl*/}

<div className="block text-3xl relative cursor-pointer md:hidden">
          <button className="flex flex-col text-white float-right right-8 top-6 mx-2 md:mx-0 bar-icon">
          </button>
        </div>

<div  id="show-menu" className=" mobile-menu sm:mobile-menu md:desktop-menu lg:desktop-menu text-black lg:text-black
 block sm:block md:block lg:block xl:block md:text-black sm:text-black z-40">
   {/* hidden */}
 {/* <a href="javascript:void(0)" className="closebtn md:hidden lg:hidden " >&times;</a> */}
 {/* onClick={closeMenu()} */}



<div id="mySidenav" className="sidenav">
  <ul className="fixed z-40 flex flex-col
  sm:mt-10 mt-10 md:mt-0 xl:mt-0 bg-slate-800 sm:bg-slate-800 md:bg-transparent lg:bg-transparent
   font-bold md:flex md:items-center absolute z-[1] md:z-auto
  left-0 py-2 opacity-0 md:opacity-100 transition-all ease-in duration-500">
  {/* relative md:static top-[-400px] */}
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

</div>

      );
    };
    
    export default Sidebar;