"use client"

import React from 'react';
import LoginForm from './LoginForm';

export default function PopUp({ openPopUp, closePopUp }) {

  const handlelosePopUp = (e) => {
    if (e.target.id === 'ModelContainer') {
      closePopUp();
    }
  }

  if (openPopUp !== true) return null

  return (
    <div
      id='ModelContainer'
      onClick={handlelosePopUp}
      className='fixed inset-0 z-50	 bg-black flex justify-center items-center bg-opacity-200 backdrop-blur-sm'>
      <div 
        className='p-2 bg-white w-10/12 md:w-1/2 lg:1/2 shadow-inner border-e-emerald-600 rounded-lg py-5'>
        <div
          className='w-full   justify-center items-center'>
          <h2
            className='font-semibold  py-3 text-center text-xl w-[500px] h-[450px] m-8'>
              <LoginForm className="justify-center "/>

          </h2>

        </div>
      </div>    
    </div>
  )
}


