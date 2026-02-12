import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ConnectWithMe = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#00A5E0] px-10 py-20">

      {/* Title */}
      <h1 className="text-6xl font-extrabold text-black mb-6 drop-shadow-[4px_4px_0px_white]">
        Connect With Me 💌
      </h1>

      <p className="text-xl font-semibold text-black mb-12 bg-white px-6 py-3 border-4 border-black rounded-xl shadow-[4px_4px_0px_#000]">
        Let’s be internet friends ✨
      </p>

      {/* Social Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* GitHub */}
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          className="bg-pastelPink bg-[#FFB6C1] p-10 rounded-3xl border-4 border-black shadow-[6px_6px_0px_#000] hover:scale-110 hover:-rotate-2 transition-all"
        >
          <FaGithub className="text-6xl text-black mb-4" />
          <h2 className="text-2xl font-extrabold text-black">GitHub</h2>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          className="bg-[#BEE7E8] p-10 rounded-3xl border-4 border-black shadow-[6px_6px_0px_#000] hover:scale-110 hover:rotate-2 transition-all"
        >
          <FaLinkedin className="text-6xl text-black mb-4" />
          <h2 className="text-2xl font-extrabold text-black">LinkedIn</h2>
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/YOUR_USERNAME"
          target="_blank"
          className="bg-[#FFD6A5] p-10 rounded-3xl border-4 border-black shadow-[6px_6px_0px_#000] hover:scale-110 hover:-rotate-1 transition-all"
        >
          <FaTwitter className="text-6xl text-black mb-4" />
          <h2 className="text-2xl font-extrabold text-black">Twitter</h2>
        </a>

      </div>
    </div>
  );
};

export default ConnectWithMe;
