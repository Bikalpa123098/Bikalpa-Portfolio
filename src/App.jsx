import Navbar from "./Component/Navigation/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div className="bg-[#450693] text-[#FFC400]  min-h-screen w-full -font-inter px-10">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

