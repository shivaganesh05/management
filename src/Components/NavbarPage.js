"use client"

import React, { useState } from "react";
import logo from "../assets/logoimage1.png";
// import slider1 from "../assets/slider1.jpg";
import { HiSpeakerphone } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";

import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import Home from "./Pages/Home";
import PopUp from "./Pages/popup";
import Course from "./Pages/Course";
import Events from "./Pages/Events";
import Page from "./Pages/Page";
import Blog from "./Pages/Blog";
import ImageSlider from "./ImageSlider";

const NavbarPage = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);
  return (
    // <div className="realative h-screen">
    //   <ImageSlider/>
    // </div>
    
    <div className="bg-slider1  h-[800px] ">
      <nav>
        <a href="index.html" className=" ps-10 pt-2 h-64" >
          <img src={logo} alt="" className="inline-flex items-baseline w-36"></img>
        </a>

        <ul className="inline-flex items-center float-right	pt-2 	">
          <li className="pe-8	text-md  text-gray-300 ">
            <a href="/">
              <HiSpeakerphone className="inline-flex" />
              Become an Instructor
            </a>
          </li>
          <li className="pe-8 text-md text-gray-300">
            <a href="/">8989899989</a>
          </li>
          <li className="pe-8 text-md text-gray-300	">
            <a href="/">gani@hi.com</a>
          </li>
          <li className="pe-12 text-xl text-white">

            <div className="w-full p-5 flex justify-center items-center ">
              <div>
                <button
                  onClick={() => setOpenPopup(true)}
                 
                >
                  <FaRegUser className="inline-flex" />
Login               </button>
              </div>
            </div>
          </li>
        </ul>

        <div className="w-full p-5 flex justify-center items-center">
          <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
        </div>

        <ul className=' text-white py-4 inline-flex float-right items-center -mt-[120px] '>
            <li className='pe-8 text-xl'>
              <Home />
            </li>
 
            <li className='pe-12 text-xl'>
             <Course />
            </li>
 
            <li className='pe-12 text-xl'>
              <Events />
            </li>
 
            <li className='pe-12 text-xl'>
             <Page />
            </li>
 
            <li className='pe-12 text-xl'>
              <Blog />
            </li>
 
            <li className='pe-12 text-xl'>
              Contact
            </li>
 
            <li className='pe-16 text-xl'>
              <IoIosSearch size={32} />
            </li>
          </ul>
      </nav>

      <div className="text-white font-Nunito text-center items-center pt-24">
        <h1 className=" text-6xl font-semibold">Learn From Anywhere, On</h1>
        <h1 className=" text-6xl font-semibold pt-4">Any Device</h1>
        <p className="text-2xl py-12 ">
          Reach out to the most competent & passionate mentors
        </p>
        <button className="bg-white rounded-full  py-4 text-2xl border-1 border-slate-500	w-128 hover:bg-black text-black hover:text-white">
          Learn more
        </button>
      </div>
      {/* <ImageSlider/> */}

    </div>


  );
};

export default NavbarPage;
