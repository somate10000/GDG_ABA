import React from "react";
import gdg from "../assets/GDG(1).png";
import aba from "../assets/Learn.2(1).png";
import twitter from "../assets/twitter.png";
import Instagram from "../assets/Instargram.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <div className="h-[80px] flex items-center  ">
      <div className="relative flex items-center left-60">
        <img src={gdg} className="object-contain h-5 ml-2" alt="/" />
        <p className="ml-2 text-blue-500 text-[18px]">GDG Aba</p>
        <p className="ml-5 text-blue-500 text-[18px]">Copyright (c) 2022</p>
      </div>
      <div className="flex ml-[739px]">
        <img src={twitter} className="ml-3" alt="/" />
        <img src={facebook} className="ml-3" alt="/" />
        <img src={Instagram} className="ml-3" alt="/" />
      </div>
    </div>
  );
};

export default Footer;
