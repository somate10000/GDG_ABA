import React from "react";
import img1 from "../assets/Rectangle 3(6).png";
import img2 from "../assets/Rectangle 3 (1).png";
import img3 from "../assets/people.png";

const data = [
  {
    id: 0,
    img: img1,
    name: "Community Project Two",
    date: "October 21",
  },
  {
    id: 1,
    img: img2,
    name: "Community Project Two",
    date: "October 21",
  },
  {
    id: 2,
    img: img3,
    name: "Speaker/Session Talk",
    date: "October 21",
  },
];

const Community = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-32 overflow-hidden">
      <h1 className="my-24 text-5xl">Community projects</h1>
      <div className="flex flex-col items-center justify-center">
        <ul className="flex space-x-8 text-2xl text-gray-400">
          <li className="text-blue-500">All projects</li>
          <li>Upcoming projects</li>
          <li>Past projects</li>
        </ul>
        <div className="flex h-[2px] w-[900px] bg-gray-200 mt-5 items-center justify-center" />
        <div className="h-[2px] w-[120px] bg-blue-500 mt-5 relative -top-[23px] right-[205px] shadow-[0_35px_60px_rgba(0,0,0,1)] rounded-full" />
      </div>
      <div className="w-full overflow-hidden ">
        <div className="wrapper">
          {data.map((data, index) => {
            return (
              <div className="flex  min-w-[660px] h-[577px]  flex-col p-8 ml-7 bg-white shadow-[0_32px_64px_rgba(0,0,0,0.04)] rounded-[20px]">
                <img
                  src={data.img}
                  alt=""
                  className="h-[360px] w-[600px]  duration-300 "
                />
                <h1 className="mt-6 text-2xl font-medium ">{data.name}</h1>
                <p className="mt-3 text-xl text-gray-500 ">{data.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Community;
<div className="relative flex items-center mt-20 ">
  <div
    id="slider"
    className="flex w-full h-full overflow-x-scroll bg-orange-900 scroll-smooth"
  >
    {data.map((data, index) => {
      return (
        <div className="flex w-[660px] h-[577px]  flex-col p-8 ml-7 bg-white shadow-[0_32px_64px_rgba(0,0,0,0.04)] rounded-[20px]">
          <img
            src={data.img}
            alt=""
            className="h-[360px] w-[600px]  duration-300 "
          />
          <h1 className="mt-6 text-2xl font-medium ">{data.name}</h1>
          <p className="mt-3 text-xl text-gray-500 ">{data.date}</p>
        </div>
      );
    })}
  </div>
</div>;
