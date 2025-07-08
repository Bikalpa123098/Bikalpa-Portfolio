// import React from 'react'
import logo from '../../assets/logo.jpg'; // Adjust the path as necessary
const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-20 py-2'>
        <img className='h-28 w-40' src={logo} alt="Bikalpa" />
        <ul className='flex gap-20 items-center list-none text-lg font-semibold'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className='px-10 py-6 bg-[#8F3985] text-[#CEA2AC] rounded-[50px] text-[1.5rem] cursor-pointer transition delay-70 hover:scale-105 hover:bg-[#7c4375]'>Connect With Me</div>
    </div>
  )
}

export default Navbar