import React from "react";
import Connect from "../Component/Navigation/Connect";

const Hero = () => {
  return (
    <div className="flex font-inter text-gray-200 flex-col justify-end  items-center pt-40 pb-16  h-full ">
      <div className="text-5xl font-bold w-[49%]  py-4 my-4 "> 
        I'm <span className="bg-[#f32d6f] px-2"> Bikalpa Koirala </span>
      <div className=" font-bold py-4"> Web Developer based in Nepal</div>
      <div className="text-[1.2rem] font-sans font-medium leading-6">Frontend developer from Bhairahawa, learning React and building clean, responsive UIs. Eager to grow through hands-on experience and collaboration.</div>
      </div>
      <div className="flex justify-centre items-center ">
      <Connect/>
        <div className=" w-60 p-6 m-4 text-center font-bold bg-white text-[#00A5E0] border-2 border-[#f3f3f3] rounded-[50px] text-[1.5rem] cursor-pointer transition delay-70 hover:scale-105">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
