import React from 'react'
import { GoArrowRight } from "react-icons/go";

const MailLetter = () => {
  return (
    <div className=' bg-white  '>
      <div className='  h-[300px] w-full'>
      <div className=' text-center pt-12 text-3xl text-black font-semibold'>Get Newsletter
          <div className=' text-center pt-4 text-[16px]  font-normal text-lg text-gray-500'>Your download should start automatically, if not Click here. Do you want our newsletter?
          </div>
          </div>
        <div className='flex flex-row my-12 '>
          <div className='box-content h-8 w-96 ml-[475px] bg-white text-base font-light pt-2 pl-2 rounded-t-md rounded-b-md border-2'>Email address
          </div>
          <div className='h-10 w-36 ml-8 bg-blue-500 text-white text-base font-medium pt-2 pl-4 flex flex-row rounded-t-md rounded-b-md'>Get it Now 
          <p className='pl-2'><GoArrowRight size={20}  />
          </p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default MailLetter;