// import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'; // Adjust the path as necessary
import Connect from './Connect';
const Navbar = () => {
  return (
    <div className='flex  justify-between items-center px-20 py-2'>
        <Link to={"/"}>
          <img className='h-28 w-40' src={logo} alt="Bikalpa" />
          </Link>
        <ul className='w-[50%] flex justify-between items-center list-none text-lg font-semibold'>
             <Link className='hover:text-white focus:text-white text-[#ffffff ] focus:underline decoration-[1.7px]' to={"/"}>Home</Link>
             <Link className='hover:text-white focus:text-white text-[#e2e2e2 ] focus:underline decoration-[1.7px]' to={"/about"}>About Me</Link>
             <Link className='hover:text-white focus:text-white text-[#e2e2e2 ] focus:underline decoration-[1.7px]' to={"/services"}>Services</Link>
             <Link className='hover:text-white focus:text-white text-[#e2e2e2 ] focus:underline decoration-[1.7px]' to={"/portfolio"}>Portfolio</Link>
             <Link className='hover:text-white focus:text-white text-[#e2e2e2 ] focus:underline decoration-[1.7px]' to={"/contact"}>Contact</Link>
        </ul>
        <Connect/>
    </div>
  )
}

export default Navbar