import React from "react";

const Hero = () => {
  return (
    <div className="flex font-inter text-gray-200 flex-col justify-end  items-center pt-40 pb-16  h-full ">
      <div className="text-5xl font-semibold w-[49%]  py-4 my-4 "> 
        I'm <span className="bg-red-700 "> Bikalpa Koirala </span>
      <div className=" font-medium py-4"> Web Developer based in Nepal</div>
      <div className="text-[1.2rem] font-normal leading-7">Frontend developer from Bhairahawa, learning React and building clean, responsive UIs. Eager to grow through hands-on experience and collaboration.</div>
      </div>
      <div className="flex justify-centre items-center ">
        <div className=' w-60 p-6 m-4  text-center bg-[#8F3985] text-[#f3f3f3] rounded-[50px] text-[1.5rem] cursor-pointer transition delay-70 hover:scale-105 hover:bg-[#7c4375]'>Connect With Me</div>
        <div className=" w-60 p-6 m-4 text-center text-[#f3f3f3] border-2 border-[#f3f3f3] rounded-[50px] text-[1.5rem] cursor-pointer transition delay-70 hover:scale-105">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
