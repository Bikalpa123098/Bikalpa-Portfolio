import { FaGithub, FaLinkedin, FaTwitter, FaTimes } from "react-icons/fa";

const ConnectWithMe = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center text-[#202021] bg-black/50 backdrop-blur-sm animate-fadeIn">

      {/* Modal Box */}
      <div className="bg-[#00A5E0] border-[6px] border-black rounded-3xl shadow-[10px_10px_0px_#000] 
      p-10 w-[90%] max-w-4xl relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 bg-white p-3 border-4 border-black rounded-full  hover:scale-110"
        >
          <FaTimes className="text-black text-xl" />
        </button>

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-black mb-4 drop-shadow-[3px_3px_0px_white]">
          Connect With Me 
        </h1>

        <p className="text-lg font-semibold bg-white px-5 py-2 inline-block border-4 border-black rounded-xl shadow-[3px_3px_0px_#000] mb-10">
          Let’s be internet friends 
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <a
            href="https://github.com/bikalpa123098"
            target="_blank"
            className="bg-[#FFB6C1] p-8 rounded-2xl border-4 border-black shadow-[6px_6px_0px_#000] 
            hover:scale-105 transition"
          >
            <FaGithub className="text-5xl mb-3" />
            <h2 className="font-bold text-2xl">GitHub</h2>
          </a>

          <a
            href="https://www.linkedin.com/in/bikalpa-koirala-bb70b6255/E"
            target="_blank"
            className="bg-[#BEE7E8] p-8 rounded-2xl border-4 border-black shadow-[6px_6px_0px_#000] 
            hover:scale-105 transition"
          >
            <FaLinkedin className="text-5xl mb-3" />
            <h2 className="font-bold text-2xl">LinkedIn</h2>
          </a>

          <a
            href="https://x.com/explore"
            target="_blank"
            className="bg-[#FFD6A5] p-8 rounded-2xl border-4 border-black shadow-[6px_6px_0px_#000] 
            hover:scale-105 transition"
          >
            <FaTwitter className="text-5xl mb-3" />
            <h2 className="font-bold text-2xl">Twitter</h2>
          </a>

        </div>
      </div>
    </div>
  );
};

export default ConnectWithMe;
