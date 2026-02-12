import React from "react";

const services = [
  {
    title: "Frontend Development",
    emoji: "💻",
    desc: "I build responsive, fast, and cute web interfaces using React, HTML, CSS, and Tailwind.",
  },
  {
    title: "UI Design",
    emoji: "🎨",
    desc: "Designing playful and clean layouts with a focus on usability and aesthetics.",
  },
  {
    title: "Learning Full Stack",
    emoji: "🧠",
    desc: "Exploring backend, APIs, and scalable systems to become a full-stack developer.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#00A5E0] px-6 md:px-20 py-20">

      {/* Title */}
      <h2 className="text-6xl font-extrabold text-white text-center drop-shadow-[4px_4px_0px_#000]">
        Services
      </h2>
      <p className="text-white text-center text-xl mt-4">
        Things I like building for the web.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-[#FFF6E5] border-4 border-black rounded-3xl shadow-[10px_10px_0px_#000] p-8 
            hover:scale-105 hover:-rotate-1 transition-transform"
          >
            <div className="text-5xl mb-4">{s.emoji}</div>
            <h3 className="text-2xl font-extrabold text-black mb-2">
              {s.title}
            </h3>
            <p className="text-black text-lg font-medium">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
