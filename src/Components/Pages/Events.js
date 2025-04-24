import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Events() {
  return (
    <div className="group relative ">
    
      <button className=" pe-1 text-xl rounded inline-flex items-center group">
        <span>Events</span>
        <RiArrowDropDownLine className='inline-flex' />
      </button>
      <ul className="rounded absolute hidden text-gray-700 text-xl pt-4 group-hover:block w-48">
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer rounded-t-md">
          Event List
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer">
          Event Single
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer">
          Calendar
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer">
          Month View
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  cursor-pointer rounded-b-md">
          Day View
        </li>
      </ul>
      
    </div>
  );
}