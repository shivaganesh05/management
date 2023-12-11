import React, { useState } from "react";
import logo from "../assets/header-logo4.png";
// import slider1 from "../assets/slider1.jpg";
import { HiSpeakerphone } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";

import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import Home from "./Pages/Home";
import PopUp from "./Pages/popup";

const NavbarPage = () => {
  // const handlelosePopUp = (e) => {
  //   if (e.target.id === 'ModelContainer') {
  //     closePopUp();
  //   }
  // }

  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);
  return (
    <div className="bg-slider1  h-[800px]  ">
      <nav>
        <a href="index.html" className=" ps-32 pt-2">
          <img src={logo} alt="" className="inline-flex items-baseline "></img>
        </a>

        <ul className="inline-flex items-center float-right	pt-4 	">
          <li className="pe-8	text-lg hover:text-black text-[#838489] ">
            <a href="/">
              <HiSpeakerphone className="inline-flex" />
              Become an Instructor
            </a>
          </li>
          <li className="pe-8 text-lg hover:text-black	text-[#848587]">
            <a href="/">8989899989</a>
          </li>
          <li className="pe-8 text-lg hover:text-black text-[#838489]	">
            <a href="/">gani@hi.com</a>
          </li>
          <li className="pe-12	text-lg hover:text-black  text-white">

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

        <ul className="inline-flex items-center float-right	 	-mt-[80px]">
          <li className="pe-12	text-xl ">
            <a href="/">
              <Home />
            </a>
          </li>
          <li className="pe-16 text-xl	">
            <a href="/">
            <Home />
            </a>
          </li>

          <li className="pe-12 text-xl 	">
            <a href="/">
            <Home />
            </a>
          </li>
          <li className="pe-12	text-xl hover:text-black">
            <a href="/">
            <Home />
            </a>
          </li>
          <li className="pe-12	text-xl hover:text-black">
            <a href="/">
            <Home />
            </a>
          </li>
          <li className="pe-12	text-md hover:text-black text-white">
            <a href="/">CONTACTS</a>
          </li>
          <li className="pe-12	text-xl hover:text-black ">
            <a href="/">
              <IoIosSearch size={30} />
            </a>
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
    </div>
  );
};

export default NavbarPage;
