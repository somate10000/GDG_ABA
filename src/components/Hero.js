import React from "react";
import blueCircle from "../assets/Property 1=Frame 28.png";
//import boy from "../assets/Ellipse 4.png";

const Hero = () => {
  return (
    <div className="flex bg-gray-50 h-[100%] items-center justify-center pb-32">
      <div className="items-center justify-center w-full mt-52">
        <div className="relative flex justify-center text-7xl top-44">
          <h1 id="pop-up" className="text-blue-500">
            Connect.
          </h1>
          <h1 id="pop-up" className="text-red-500">
            Learn.
          </h1>
          <h1 id="pop-up" className="text-green-600">
            Grow.
          </h1>
        </div>
        <div className="flex items-center justify-center   h-[550px] ">
          <img src={blueCircle} className="relative top-8" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
