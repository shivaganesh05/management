import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Blog() {
  return (
    <div className="group relative ">
    
      <button className=" pe-1 text-xl rounded inline-flex items-center group">
        <span>Blog</span>
        <RiArrowDropDownLine className='inline-flex' />
      </button>
      <ul className="rounded absolute hidden text-gray-700 text-xl pt-4 group-hover:block w-48">
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer rounded-t-md">
          Blog List 1
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer">
          Blog List 2
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer">
          Blog List 3
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  cursor-pointer rounded-b-md">
          Blog Single
        </li>
      </ul>
      
    </div>
  );
}