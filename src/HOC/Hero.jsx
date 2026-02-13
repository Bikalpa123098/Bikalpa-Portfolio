import React from "react";
import Connect from "../Component/Navigation/Connect";

const Hero = () => {
  return (
    <section className="font-inter bg-[#00A5E0] min-h-screen flex flex-col justify-center items-center px-6 md:px-20 relative overflow-hidden">

      {/* Pastel Blobs */}
      <div className="absolute w-72 h-72 bg-pink-300 blur-3xl opacity-40 rounded-full top-20 left-10"></div>
      <div className="absolute w-72 h-72 bg-yellow-300 blur-3xl opacity-40 rounded-full bottom-20 right-10"></div>

      {/* Chunky Card */}
      <div className="bg-[#FFF6E5] border-4 border-black rounded-[2.5rem] shadow-[14px_14px_0px_#000] p-10 max-w-4xl text-center">

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4">
          Hi, I’m{" "}
          <span className="bg-pink-400 px-3 py-1 border-2 border-black rounded-xl shadow-[4px_4px_0px_#000]">
            Bikalpa
          </span>{" "}
          👋
        </h1>

        {/* Role */}
        <p className="text-2xl font-bold text-black mb-4">
          Web Developer based in Nepal 🇳🇵
        </p>

        {/* Description */}
        <p className="text-lg text-black max-w-2xl mx-auto leading-7 font-medium">
          Frontend dev who likes building user-friendly and clean UIs with React.
          Learning, experimenting, and turning ideas into pixels.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">

          <Connect />

          <a
            href="/resume.pdf"
            className="bg-white px-8 py-6 font-bold text-[#00A5E0] border-4 border-black rounded-full shadow-[6px_6px_0px_#000] text-xl transition-transform hover:scale-105 hover:-rotate-2"
          >
            My Resume 📄
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
