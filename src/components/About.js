import React from "react";
import rect from "../assets/Rectangle 1.png";
import facebook from "../assets/FacebookLogo.png";
import twitter from "../assets/TwitterLogo(1).png";
import instagram from "../assets/InstagramLogo(1).png";
import github from "../assets/GithubLogo.png";
import planet from "../assets/Planet.png";
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
    job_title: "Developer Advocate",
    specialities: ["Java,", "XML,", "Technical Writing"],
    handles: [twitter, facebook, instagram, github],
    img: person1,
  },
  {
    id: 1,
    name: "Trust Onyekwere",
    job_title: "Developer Advocate",
    specialities: ["Java,", "XML,", "Technical Writing"],
    handles: [twitter, instagram, github, planet],
    img: person2,
  },
  {
    id: 2,
    name: "Trust Onyekwere",
    job_title: "Developer Advocate",
    specialities: ["Java,", "XML,", "Technical Writing"],
    handles: [twitter, facebook, instagram, planet],
    img: person3,
  },
  {
    id: 3,
    name: "Trust Onyekwere",
    job_title: "Developer Advocate",
    specialities: ["Java,", "XML,", "Technical Writing"],
    handles: [twitter, instagram, github, planet],
    img: person4,
  },
  {
    id: 4,
    name: "James Chimdindu",
    job_title: "Product Designer",
    specialities: ["Java,", "XML,", "Technical Writing"],
    handles: [twitter, facebook, instagram, planet],
    img: person5,
  },
  {
    id: 5,
    name: "Trust Onyekwere",
    job_title: "Developer Advocate",
    specialities: ["Java,", "XML,", "Technical Writing"],
    handles: [twitter, facebook, instagram, github],
    img: person6,
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <h1 className="mt-24 text-[42px] text-gray-800 font-normal">
        About GDG Aba
      </h1>
      <div className="mt-16 px-52">
        <p className="pyramid">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est,
          ultrices dui pretium dolor nec tortor. Volutpat sed at amet eu etiam.
          Sapien morbi ut quis amet, massa ultricies quis. At aenean a viverra
          viverra ornare fermentum suscipit ut. Congue.
        </p>
      </div>
      <img src={rect} className="mt-20 ml-64" alt="" />
      <div className="relative bg-yellow-300/20 rounded-full h-72 w-72 right-[620px] mt-20" />
      <h1 className="relative text-[42px] text-gray-800 font-normal -top-24">
        Community Talent
      </h1>
      <div className="relative w-24 h-24 rounded-full left-[560px] bg-blue-500 -top-44" />
      <div className="grid grid-cols-3 -mt-36">
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-5 mx-5 mt-10 border border-gray-200 rounded-3xl"
            >
              <img src={data.img} alt="" />
              <h1 className="mt-6 text-2xl font-medium ">{data.name}</h1>
              <p className="mt-1 text-[18px] text-gray-500 ">
                {data.job_title}
              </p>
              <div className="flex ml-4">
                {data.specialities.map((specs) => {
                  return (
                    <p className="mx-1 mt-2 text-lg text-gray-500">{specs}</p>
                  );
                })}
              </div>
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
      <div className="my-24">
        <p className="text-xl font-medium text-blue-500">See more</p>
      </div>
    </div>
  );
};

export default About;
