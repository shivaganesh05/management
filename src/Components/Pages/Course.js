import React from 'react';
import { CiPlay1 } from "react-icons/ci";

const Course = () => {
  return (
    <div className='justify-center ps-48'>
      <div className='relative	w-[1000px] h-[600px] 	'>
    <img src="https://demo.createdbycocoon.com/moodle/edumy/15/pluginfile.php/472/block_cocoon_featured_video/content/2.jpg" ></img>
    <a href='https://www.youtube.com/watch?v=UdDwKI4DcGw&ab_channel=CreatedbyCocoon'>

   


 <CiPlay1  size={2} className='absolute	 top-48 left-[460px] text-white p-6 bg-blue-300 rounded-full	 w-24 h-24 duration-200v hover:scale-105'/>
</a>

      </div>
    </div>
  )
}

export default Course
