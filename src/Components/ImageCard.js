import React from "react";

import user1 from "../../src/assets/user.png";
import course from "../../src/assets/course.png";
import student from "../../src/assets/student.png";
import employee from "../../src/assets/employee.png";
import { CiPlay1 } from "react-icons/ci";

  <link
    rel="stylesheet"
    href="https://cdn.tailgrids.com/tailgrids-fallback.css"
  />;

const ImageCard = () => {
  return (
    <div className="">



      <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20  -mt-[240px] ">
        <div class="container ">
          <div class="flex flex-wrap -mx-4 ps-24 ">
            <div class="w-full md:w-1/2 xl:w-1/4  px-8  duration-200v hover:scale-105">
              <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-10 w-[290px] py-4 ">
                <img src={user1} alt="image" className="w-32 ps-8 pt-6" />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 ">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      50+ Best creative w
                    </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed ">
                    Lorem ipsum dolor sit amet pretium
                  </p>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 xl:w-1/4 px-8 duration-200 hover:scale-105">
              <div class="bg-white rounded-lg overflow-hidden  mb-10 shadow-sm w-[290px] py-4">
                <img src={course} alt="image" className="w-32 ps-8 pt-6" />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 ">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      The ultimate UX and UI
                    </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed ">
                    Lorem ipsum dolor sit amet pretium
                  </p>
                </div>
              </div>
            </div>
          
            <div class="w-full md:w-1/2 xl:w-1/4 px-8 duration-200 hover:scale-105 ">
              <div class="bg-white rounded-lg overflow-hidden shadow-sm mb-10 w-[290px] py-4 ">
                <img src={student} alt="image" className="w-32 ps-8 pt-6" />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 ">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      esigns graphic
                    </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed ">
                    Lorem ipsum dolor sit amet pretium consectetur
                  </p>
                </div>
              </div>
            </div>
            
            <div class="w-full md:w-1/2 xl:w-1/4 px-8 duration-200 hover:scale-105 ">
              <div class="bg-white rounded-lg overflow-hidden shadow-sm mb-10 w-[290px] py-4 ">
                <img src={employee} alt="image" className="w-32 ps-8 pt-6" />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 ">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      esigns graphic
                    </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed ">
                    Lorem ipsum dolor sit amet pretium consectetur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
<div className='justify-center ps-48'>
      <div className='relative	w-[1000px] h-[600px] 	'>
    <img src="https://demo.createdbycocoon.com/moodle/edumy/15/pluginfile.php/472/block_cocoon_featured_video/content/2.jpg" ></img>
    <a href='https://www.youtube.com/watch?v=UdDwKI4DcGw&ab_channel=CreatedbyCocoon'>

   


 <CiPlay1  size={2} className='absolute	 top-48 left-[460px] text-white p-6 bg-blue-300 rounded-full	 w-24 h-24 duration-200v hover:scale-105'/>
</a>

      </div>
    </div>
    </div>
  );
};

export default ImageCard;
