// import Navbar from "./Component/Navigation/Navbar";
// import About from "./Pages/About";
// import Home from "./Pages/Home";
// import { Routes, Route } from "react-router-dom";
// import Services from "./Pages/Services";
// import Portfolio from "./Pages/Portfolio";
// import Contact from "./Pages/Contact";
// function App() {
//   return (
//     <div className="bg-[#25283d] text-[#EFD9CE]  min-h-screen w-full -font-inter px-10">
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import React, { useState, useRef, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const lastSectionRef = useRef(null);

  useEffect(() => {
    if (lastSectionRef.current) {
      lastSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [count]);

  const increaseCount = () => {
    setCount((prev) => Math.min(prev + 1, 7));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-4 py-10 relative">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-12 border border-purple-200">
        <h1 className="text-3xl md:text-5xl font-extrabold text-purple-700 mb-10 text-center leading-tight">
          Stream Control Transmission Protocol (SCTP)
        </h1>

        <div className="space-y-12 text-left text-xl text-gray-800 leading-relaxed">
          {count >= 1 && (
            <div ref={count === 1 ? lastSectionRef : null}>
              <h2 className="text-3xl font-semibold text-indigo-700 mb-2">What is SCTP?</h2>
              <div>
                SCTP is a transport-layer protocol that blends features of TCP and UDP. It supports
                reliable, message-oriented communication and multi-streaming within a single
                connection.
              </div>
            </div>
          )}

          {count >= 2 && (
            <div ref={count === 2 ? lastSectionRef : null}>
              <h2 className="text-3xl font-semibold text-indigo-700 mb-2">Key Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold text-purple-600">Multi-streaming:</span> 
                  Allows for multiple independent data streams within a single connection 
                </li>
                <li>
                  <span className="font-semibold text-purple-600">Multi-homing:</span> 
                  Ability of have multiple IP addresses, enabling it to communicate over multiple network paths
                </li>
                <li>
                  <span className="font-semibold text-purple-600">Message-oriented:</span> 
                  Sends messages, not just raw data.
                </li>
                <li>
                  <span className="font-semibold text-purple-600">Secure handshake:</span> 
                  Prevents TCP attacks.
                </li>
              </ul>
            </div>
          )}

          {count >= 3 && (
            <div ref={count === 3 ? lastSectionRef : null}>
              <h2 className="text-3xl font-semibold text-indigo-700 mb-2">How It Works</h2>
              <p>
                SCTP uses a handshake to establish associations. It sends multiple streams of data
                independently so if one is delayed, others still get through without waiting.
              </p>
            </div>
          )}

          {count >= 4 && (
            <div ref={count === 4 ? lastSectionRef : null}>
              <h2 className="text-3xl font-semibold text-indigo-700 mb-2">Use Cases</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Telecommunication signaling (e.g., SS7)</li>
                <li>VoIP and media streaming</li>
                <li>Financial transaction systems</li>
                <li>Critical infrastructure and defense</li>
              </ul>
            </div>
          )}

          {count >= 5 && (
            <div ref={count === 5 ? lastSectionRef : null}>
              <h2 className="text-3xl font-semibold text-indigo-700 mb-2">Benefits of SCTP</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold text-purple-600">Reliable:</span> Guarantees data
                  integrity and order.
                </li>
                <li>
                  <span className="font-semibold text-purple-600">Efficient:</span> Streams reduce
                  unnecessary delays.
                </li>
                <li>
                  <span className="font-semibold text-purple-600">Redundant:</span> Multi-homing
                  ensures continuity.
                </li>
                <li>
                  <span className="font-semibold text-purple-600">Secure:</span> Resistant to SYN
                  flood and DoS attacks.
                </li>
              </ul>
            </div>
          )}

          {count >= 6 && (
            <div ref={count === 6 ? lastSectionRef : null}>
              <h2 className="text-3xl font-semibold text-indigo-700 mb-2">Real World Example</h2>
              <p>
                In a video conferencing app, SCTP allows voice, video, and chat to stream separately.
                If one stream lags, others continue — smoother experience!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Fixed Button Bottom-Left */}
      <button
        onClick={increaseCount}
        className="fixed bottom-6 left-6 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold text-xl px-6 py-3 rounded-full transition duration-300 shadow-lg"
      >
        Generate
      </button>
    </div>
  );
};

export default App;
