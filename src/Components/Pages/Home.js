import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="group relative">
    
      <button className=" pe-1 text-xl rounded inline-flex items-center group">
        <span>Home</span>
        <RiArrowDropDownLine className='inline-flex' />
      </button>
      <ul className="rounded absolute hidden text-gray-700 text-xl pt-4 group-hover:block w-40">
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer rounded-t-md">
          Home1
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer">
          Home2
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer">
          Home3
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  border-b-2 cursor-pointer">
          Home4
        </li>
        <li className="bg-white hover:text-[20px] text-[18px] py-2 px-2  cursor-pointer rounded-b-md">
          Home5
        </li>
      </ul>
      
    </div>
  );
}