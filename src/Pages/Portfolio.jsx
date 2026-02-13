import React from "react";

const projects = [
  {
    title: "StackOverflow Clone",
    desc: "Q&A platform where users ask and answer questions. Built authentication and responsive UI.",
    tech: ["React", "Node", "MongoDB"],
    github: "#",
    live: "#",
    color: "#FFB6C1",
  },
  {
    title: "Car Rental Website",
    desc: "A rental service website for Intu Mintu with booking UI and social media design.",
    tech: ["React", "Tailwind"],
    github: "#",
    live: "#",
    color: "#BEE7E8",
  },
  {
    title: "Portfolio v1",
    desc: "My personal portfolio with chunky pastel theme and animated UI components.",
    tech: ["React", "CSS", "Tailwind"],
    github: "#",
    live: "#",
    color: "#FFD6A5",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen text-[#f43bc9] bg-[#00A5E0] px-20 py-20 font-inter">

      {/* Title */}
      <h1 className="text-6xl font-extrabold text-center text-white drop-shadow-[4px_4px_0px_black] mb-6">
        My Work 
      </h1>

      <p className="inline-block w-full text-white text-center px-6 py-0 text-xl font-medium mb-16">
        Real projects. Real learning. Real progress.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <div
            key={index}
            style={{ backgroundColor: project.color }}
            className="p-8 rounded-3xl border-4 border-black shadow-[6px_6px_0px_#000] hover:scale-105 hover:-rotate-1 transition-all"
          >
            <h2 className="text-3xl font-extrabold text-black mb-4">
              {project.title}
            </h2>

            <p className="text-black font-semibold mb-4">{project.desc}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-white px-3 py-1 border-2 border-black rounded-full text-sm font-bold"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={project.github}
                className="bg-black text-white px-4 py-2 font-bold rounded-full border-2 border-black hover:bg-white hover:text-black transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                className="bg-white text-black px-4 py-2 font-bold rounded-full border-2 border-black hover:bg-green-500 hover:text-white transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
