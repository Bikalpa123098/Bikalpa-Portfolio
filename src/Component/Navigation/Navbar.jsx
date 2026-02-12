import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Connect from "./Connect";

const Navbar = () => {
  return (
    <nav className=" relative top-0 left-0 w-full z-50 bg-[#00A5E0] px-6 md:px-20 py-4">

      {/* Chunky Nav Card */}
      <div className="bg-[#FFF6E5] border-4 border-black rounded-full shadow-[8px_8px_0px_#000] px-6 py-2 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="h-12 w-12 rounded-full border-2 border-black shadow-[2px_2px_0px_#000]"
            src={logo}
            alt="Bikalpa"
          />
          <span className="font-extrabold text-xl text-black hidden sm:block">
            Bikalpa
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 font-bold text-black text-lg">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Portfolio", "/portfolio"],
            ["Contact", "/contact"],
          ].map(([name, path]) => (
            <Link
              key={name}
              to={path}
              className="px-3 py-1  rounded-xl hover:bg-pink-300 border-2 border-transparent hover:border-black transition-all shadow-[0px_0px_0px_#000] hover:shadow-[2px_2px_0px_#000]"
            >
              {name}
            </Link>
          ))}
        </ul>

        {/* Connect Button */}
        <div className="hidden md:block">
          <Connect />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
