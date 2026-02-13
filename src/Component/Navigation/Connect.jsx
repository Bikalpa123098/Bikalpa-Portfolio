import React, { useState } from "react";
import ConnectWithMe from "./ConnectWithMe";

const Connect = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="bg-white px-8 py-6 font-bold text-[#00A5E0] border-4 border-black rounded-full 
        shadow-[6px_6px_0px_#000] text-xl transition-transform hover:scale-105 hover:rotate-1 hover:bg-[#ac2190]"
      >
        Connect With Me
      </button>

      {/* MODAL */}
      {open && <ConnectWithMe onClose={() => setOpen(false)} />}
    </>
  );
};

export default Connect;
