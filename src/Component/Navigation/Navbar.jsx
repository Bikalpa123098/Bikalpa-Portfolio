// import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'; // Adjust the path as necessary
const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-20 py-2'>
        <Link to={"/"}>
          <img className='h-28 w-40' src={logo} alt="Bikalpa" />
          </Link>
        <ul className='w-[50%] flex justify-between items-center list-none text-lg font-semibold'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About Me</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/portfolio"}>Portfolio</Link>
            <Link to={"/contact"}>Contact</Link>
        </ul>
        <div className='px-10 py-6 bg-[#FF3F7F] text-[#ffffff] rounded-[50px] text-[1.7rem] font-bold cursor-pointer transition delay-70 hover:scale-105 hover:bg-[#f32d6f]'>Connect With Me</div>
    </div>
  )
}

export default Navbar