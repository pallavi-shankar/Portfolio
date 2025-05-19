import React from "react";
import avatarImg from "../../assets/pallavi_photo.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1><br></br>
        <p className="text-sm md:text-2xl tracking-tight ">
        I am currently pursuing my Master of Computer Applications (MCA) at New Horizon College of Engineering.
     
        </p><br></br>
        {/* <p className="text-sm md:text-2xl tracking-tight ">
        I have a keen interest in software engineering and aspire to work as a software developer.
        </p> */}

        {/* <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button> */}
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
     
    </div>
  );
};

export default Home;
