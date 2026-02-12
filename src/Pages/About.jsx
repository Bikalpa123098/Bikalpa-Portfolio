import React from "react";
import MeCatPic from "../assets/MeCat.jpg";

const About = () => {
  return (
    <section className="font-inter bg-[#00A5E0] min-h-screen px-6 md:px-20 py-4 relative overflow-hidden">

      {/* Floating Pastel Blobs */}
      <div className="absolute w-72 h-72 bg-pink-300 opacity-40 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-yellow-300 opacity-40 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* Title */}
      <h2 className="text-6xl font-extrabold text-white text-center drop-shadow-[4px_4px_0px_#000]">
        About Me ✨
      </h2>
      <p className="text-center text-white text-xl mt-4 font-medium">
        {/* I make cute and chunky things for the web. */}
      </p>

      {/* Main Card */}
      <div className="max-w-5xl mx-auto mt-16 bg-[#FFF6E5] border-4 border-black rounded-[2rem] p-10 shadow-[12px_12px_0px_#000]">

        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Profile Image */}
          <img
            src={MeCatPic}
            alt="Bikalpa"
            className="w-64 h-64 object-cover rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000] transition-transform hover:scale-105 hover:-rotate-2"
          />

          {/* Text */}
          <div className="text-xl leading-9 text-black space-y-6 font-medium">

            <p>
              Hi! I’m <span className="font-extrabold text-pink-500">Bikalpa</span> 👋  
              A frontend dev & CSIT student who loves building **clear, colorful, and usable UIs**.
            </p>

            <p>
              I built a StackOverflow-style Q&A platform, play with React & Next.js,
              and experiment with Linux and dev tools for fun.
            </p>

            <p>
              I learn by breaking stuff, fixing it, and making it prettier than before 🧃
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "JavaScript", "HTML", "CSS", "Tailwind", "Node.js"].map(skill => (
                <span
                  key={skill}
                  className="bg-pink-400 text-black px-4 py-2 rounded-full border-2 border-black shadow-[3px_3px_0px_#000] hover:scale-105 transition-transform"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
