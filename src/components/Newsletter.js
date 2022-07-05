import React from "react";
import space from "../assets/spaceship.png";
import chunk from "lodash/chunk";
import arrow from "../assets/icons8-right-24.png";

const Newsletter = () => {
  return (
    <div className="flex overflow-hidden bg-blue-50 h-[732px]">
      <div className="flex h-full ">
        <img
          src={space}
          className=" opacity-20 -top-48 w-[1900px] object-cover  "
        />

        <div className="obidi">
          {chunk(new Array(90)).map((item, itemIndex) => {
            console.log(item);
            return (
              <div className="" key={itemIndex}>
                {item.map((col) => (
                  <div className="min-w-[89.9px] min-h-[82px] border box-border grid border-blue-200" />
                ))}
              </div>
            );
          })}
          <div className="absolute w-full h-[111%] flex items-center justify-center ">
            <div className="flex flex-col bg-white w-[73.3%] h-[328px] items-center justify-center -mt-[54px]">
              <h1 className="text-[40px] -mt-10 mb-5">
                Signup to our Newsletter
              </h1>
              <p className="text-[24px] text-[#828282]">
                Get weekly updates on the latest tech news and events in our
                community.
              </p>
              <p className="text-[24px] mb-16 text-[#828282]">
                Don’t miss a thing!
              </p>

              <div className="h-[44px] flex w-[80%] bg-blue-500 rounded-[10px] justify-between pr-3  items-center">
                <p className="text-white text-[18px] font-medium ml-5 ">
                  Sign up now
                </p>
                <img src={arrow} className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
