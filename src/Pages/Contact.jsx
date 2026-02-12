import React from "react";
import Connect from "../Component/Navigation/Connect";

const Contact = () => {
  return (
    <section className="bg-[#00A5E0] px-6 md:px-20 py-20">

      {/* Title */}
      <h2 className="text-6xl font-extrabold text-white text-center drop-shadow-[4px_4px_0px_#000]">
        Contact Me
      </h2>
      <p className="text-white text-center text-xl mt-4">
        Say hi, send memes, or talk about code.
      </p>

      {/* Chunky Contact Card */}
      <div className="max-w-3xl mx-auto mt-16 bg-[#FFF6E5] border-4 border-black rounded-3xl shadow-[12px_12px_0px_#000] p-10">

        <form className="flex flex-col gap-6 text-black font-bold">

          <input
            type="text"
            placeholder="Your Name"
            className="border-4 border-black rounded-xl p-4 shadow-[4px_4px_0px_#000] focus:outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border-4 border-black rounded-xl p-4 shadow-[4px_4px_0px_#000] focus:outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message..."
            className="border-4 border-black rounded-xl p-4 shadow-[4px_4px_0px_#000] focus:outline-none"
          />

          <button
            type="submit"
            className="bg-pink-400 px-8 py-4 text-black font-extrabold border-4 border-black rounded-full shadow-[6px_6px_0px_#000] text-xl hover:scale-105 hover:-rotate-2 transition-transform"
          >
            Send Message 🚀
          </button>
        </form>

        {/* Social Connect Button */}
        <div className="mt-8 flex justify-center">
          <Connect />
        </div>

      </div>
    </section>
  );
};

export default Contact;
