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
        <div className='px-10 py-6 bg-[#8F3985] text-[#f3f3f3] rounded-[50px] text-[1.5rem] cursor-pointer transition delay-70 hover:scale-105 hover:bg-[#7c4375]'>Connect With Me</div>
    </div>
  )
}

export default Navbar