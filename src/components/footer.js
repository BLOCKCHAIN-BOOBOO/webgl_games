import React from "react";
import bbicon from "../images/bbicon.png";

const Footer = () => {
    return (
<footer id="footer" className="mt-10" style={{ height: "5.5rem" }}>
<section className="relative bg-red-100  footer-align">
  <div className=" px-2 sm:px-2 md:px-2 xl:px-0 flex flex-wrap xl:flex-row md:flex-row sm:flex-row flex-row self-center text-center justify-between py-4 relative mx-auto container">
    {/* <div className="flex flex-col self-center align-middle"> */}
    <a target="_blank" href="https://booboogames.com/"  className="rounded-lg cursor-pointer self-center w-1/6 h-1/6">
      <img  
        src={bbicon}
        // height="200"
        // width="200"
        className=" cursor-pointer self-center"
        alt=""
      />
      </a>
    {/* </div> */}
    <div className="flex flex-col align-middle">
      <span className="xl:text-xl md:text-lg sm:text-md text-md flex text-left  text-red-500 mt-5 mb-5 font-bold">
        Get In Touch
      </span>
      <div className="flex flex-col">
        <span className="flex xl:text-sm md:text-sm sm:text-sm text-xs font-semibold float-left">
          India - Ahmedabad |
        </span>
        <span className="flex xl:text-sm md:text-sm sm:text-sm text-xs font-semibold text-left float-left">
          Hyderabad
        </span>
        <span className="flex xl:text-sm md:text-sm sm:text-sm text-xs font-semibold float-left">
          Connect@booboo.games
        </span>
        <span className="flex font-semibold float-left"></span>

        {/* DEFAULT */}
      </div>
    </div>
    <div className="flex flex-col self-center align-middle">
      <span className="xl:text-xl md:text-lg sm:text-md text-md flex text-left  text-red-500 mt-5 mb-5 font-bold">
        Quick Links
      </span>
      <div className="flex flex-col">
      <a target="_blank" href="https://booboogames.com/mobile-games"  className="cursor-pointer">
        <span className="flex xl:text-sm md:text-sm sm:text-sm text-xs float-left font-semibold">
          Mobile Games
        </span>
        </a>
        <a target="_blank" href="https://booboogames.com/websites"  className="cursor-pointer">
        <span className="flex xl:text-sm md:text-sm sm:text-sm text-xs text-left font-semibold float-left">
          Websites
        </span>
        </a>
        <a target="_blank" href="https://booboogames.com/mobile-applications"  className="cursor-pointer">
        <span className="flex xl:text-sm md:text-sm sm:text-sm text-xs font-semibold float-left">
          Mobile Applications
        </span>
        </a>
        <a target="_blank" href="https://booboogames.com/blockchain"  className="cursor-pointer">
        <span className="flex xl:text-sm md:text-sm sm:text-sm text-xs font-semibold float-left">
          Blockchain
        </span>
        </a>
      </div>
    </div>
  </div>
</section>
</footer>
);};

export default Footer;