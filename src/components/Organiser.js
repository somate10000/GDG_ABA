import React from "react";

import facebook from "../assets/FacebookLogo.png";
import twitter from "../assets/TwitterLogo(1).png";
import instagram from "../assets/InstagramLogo(1).png";
import person1 from "../assets/Rectangle 3(2).png";
import person2 from "../assets/Rectangle 3(1).png";
import person3 from "../assets/Rectangle 3.png";
import person4 from "../assets/Rectangle 3(3).png";
import person5 from "../assets/Rectangle 3(4).png";
import person6 from "../assets/Rectangle 3(5).png";

const data = [
  {
    id: 0,
    name: "Trust Onyekwere",
    job_title: "Program Co-ordinator",
    handles: [twitter, facebook, instagram],
    img: person1,
  },
  {
    id: 1,
    name: "Trust Onyekwere",
    job_title: "Developer Advocate",
    handles: [twitter, facebook, instagram],
    img: person2,
  },
  {
    id: 2,
    name: "Trust Onyekwere",
    job_title: "Program Co-ordinator",
    handles: [twitter, facebook, instagram],
    img: person3,
  },
  {
    id: 3,
    name: "Trust Onyekwere",
    job_title: "Program Co-ordinator",
    handles: [twitter, facebook, instagram],
    img: person4,
  },
  {
    id: 4,
    name: "James Chimdindu",
    job_title: "Program Co-ordinator",
    handles: [twitter, facebook, instagram],
    img: person5,
  },
  {
    id: 5,
    name: "Trust Onyekwere",
    job_title: "Program Co-ordinator",
    handles: [twitter, facebook, instagram],
    img: person6,
  },
];

const Organiser = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden bg-red-50/50 ">
      <div className="my-28">
        <h1 className="text-[45px] text-gray-800">Organisers</h1>
      </div>
      <div className="grid grid-cols-3 -mt-24">
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className="z-30 flex flex-col items-center justify-center p-5 mx-5 mt-10 bg-white  shadow-[0_32px_64px_rgba(0,0,0,0.07)] h-96 w-72 rounded-3xl"
            >
              <div className="flex items-center justify-center w-[200px] h-[200px] overflow-hidden rounded-full ">
                <img src={data.img} alt="" className="w-[100%] h-[100%]" />
              </div>
              <h1 className="mt-6 text-2xl font-medium ">{data.name}</h1>
              <p className="mt-3 text-xl text-gray-500 ">{data.job_title}</p>
              <div className="flex mt-7">
                {data.handles.map((img) => {
                  return (
                    <div>
                      <img src={img} className="mx-1" alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className=" h-[150px]">
        <div className="relative bg-green-600 rounded-full w-52 h-52 left-[550px]  -top-[300px]" />
        <div className="relative w-24 h-24 rounded-full left-[-520px] bg-red-500 -top-[200px]" />
      </div>
    </div>
  );
};

export default Organiser;
