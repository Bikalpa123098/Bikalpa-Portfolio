import React from 'react'
import aboutImg from '../assets/about.jpg'; // Adjust the path as necessary
import MeCatPic from '../assets/MeCat.jpg'; // Adjust the path as necessary
const About = () => {
  return (
    <div className="flex font-inter text-gray-200 flex-col justify-center px-40 items-center  h-full ">
        <img src={aboutImg} alt="" />
        <div className='flex justify-center items-center '>
          <img className='h-[30rem] w-[25rem] rounded-[3rem] m-10' src={MeCatPic} alt="" />
          <div className='-font-inter text-xl font-medium w-[60%]  leading-9'>
            <p className='p-6'>
              I'm a Frontend Developer currently pursuing a BSc CSIT degree, with hands-on experience in building responsive web applications using HTML, CSS, JavaScript, and React
            </p>
            <p className='p-6'>
              My enthusiasm for frontend development is reflected not only in the projects I’ve completed but in my commitment to continuous learning and problem-solving
            </p>
            <div>HTML & CSS</div>
            <div>ReactJs</div>
            <div>JavaScript</div>
            <div>NodeJs</div>
          </div>
        </div>
    </div>
  )
}

export default About

{/* <div className='font-semibold text-2xl w-[60%] leading-12'>I'm a Frontend Developer currently pursuing a BSc CSIT degree, with hands-on experience in building responsive web applications using HTML, CSS, JavaScript, and React.</div>
        <div>My enthusiasm for frontend development is reflected not only in the projects I’ve completed but in my commitment to continuous learning and problem-solving.</div> */}