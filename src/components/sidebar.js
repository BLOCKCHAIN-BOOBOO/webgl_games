
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

</div>

      );
    };
    
    export default Sidebar;