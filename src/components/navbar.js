
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import home from "../images/home.png"
import star from "../images/star.png"
import settings from "../images/settings.png"
import logout from "../images/logout.png"
import profile from "../images/profile.png"



const Navbar = () => {
 
    return (

<div className="pb-2">
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


</div>

      );
    };
    
    export default Navbar;