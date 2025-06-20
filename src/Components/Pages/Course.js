import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Course() {
  return (
    <div className="group relative ">
    
      <button className=" pe-1 text-xl rounded inline-flex items-center group">
        <span>Courses</span>
        <RiArrowDropDownLine className='inline-flex' />
      </button>
      <ul className="rounded absolute hidden text-gray-700 text-xl pt-4 group-hover:block w-40">
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer rounded-t-md">
        Courses v1
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer">
        Courses v2
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer">
          Single v1
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer">
          Single v2
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer ">
          Social Format
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  cursor-pointer rounded-b-md">
          Instructor
        </li>
      </ul>
      
    </div>
  );
}