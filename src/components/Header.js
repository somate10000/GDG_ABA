import React from "react";
import Logo from "../assets/Frame 6.png";

const Header = () => {
  return (
    <div className="flex h-[80px] w-full  backdrop-blur-2xl  z-50  fixed items-center  px-[10px]">
      <div className="ml-52">
        <img src={Logo} alt="" />
      </div>
      <div className="flex ml-64">
        <ul className="flex text-[18px] items-center space-x-10 text-gray-500 cursor-pointer">
          <li>About</li>
          <li>Events</li>
          <li>Talents</li>
          <li>Community projects</li>
          <div className="flex items-center h-[40px] w-[180px] justify-center  mx-auto bg-blue-500 rounded-[10px] ">
            <li className="text-white">Become a member</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
