import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { useRef, useState } from "react";
 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
 
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
 
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
 
const Profilecard = () => {
  return (
    <div className=" pt-[80px] ">
      <div className=" bg-[#0067da] h-[500px] w-full">
        <div className=" text-center pt-12 text-3xl text-white font-semibold">
          What People Say
          <div className=" text-center pt-4 text-[16px] text-white font-sans">
            Cum doctus civibus efficiantur in imperdiet deterruisset.
          </div>
          <div className="flex flex-row">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              freeMode={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className=" pl-1 py-12">
                  <div className="box-content h-[220px] w-[360px] p-4 bg-white rounded-t-md rounded-b-md">
                    <div className=" text-black float-right">
                      <FaQuoteLeft size={48} />
                    </div>
                    <div>
                      <div class="mb-8 flex flex-row px-6 py-6 ">
                        <img
                          class="object-center object-cover rounded-full h-16 w-16"
                          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                          alt=" "
                        ></img>
                        <div class="text-center px-4">
                          <p class="text-xl text-black font-medium mb-2">
                            Dany Bailey
                          </p>
                          <p class="text-base text-blue-400 font-normal ">
                            Client
                          </p>
                        </div>
                      </div>
                      <div className=" text-black text-sm pl-4 text-justify font-normal">
                        Customization is very easy with this theme. Clean and
                        quality design and full support for any kind of request!
                        Great theme
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pl-2 py-12">
                  <div className="box-content h-[220px] w-[360px] p-4 bg-white  items-center rounded-t-md rounded-b-md">
                    <div className=" text-black float-right">
                      <FaQuoteLeft size={48} />
                    </div>
                    <div>
                      <div class="mb-8 flex flex-row px-6 py-6 ">
                        <img
                          class="object-center object-cover rounded-full h-16 w-16"
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                          alt=" "
                        ></img>
                        <div class="text-center px-4">
                          <p class="text-xl text-black font-medium mb-2">
                            Lucy Carter
                          </p>
                          <p class="text-base text-blue-400 font-normal ">
                            Client
                          </p>
                        </div>
                      </div>
                      <div className=" text-black text-sm pl-4 text-justify font-normal">
                        Customization is very easy with this theme. Clean and
                        quality design and full support for any kind of request!
                        Great theme
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" pl-1 py-12">
                  <div className="box-content h-[220px] w-[360px] p-4 bg-white  items-center rounded-t-md rounded-b-md">
                    <div className=" text-black float-right">
                      <FaQuoteLeft size={48} />
                    </div>
                    <div>
                      <div class="mb-8 flex flex-row px-6 py-6 ">
                        <img
                          class="object-center object-cover rounded-full h-16 w-16"
                          src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                          alt=" "
                        ></img>
                        <div class="text-center px-4">
                          <p class="text-xl text-black font-medium mb-2">
                            Jade Bradley
                          </p>
                          <p class="text-base text-blue-400 font-normal ">
                            Client
                          </p>
                        </div>
                      </div>
                      <div className=" text-black text-sm text-justify font-normal pl-4">
                        Customization is very easy with this theme. Clean and
                        quality design and full support for any kind of request!
                        Great theme
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className=" pl-1 py-12">
                  <div className="box-content h-[220px] w-[360px] p-4 bg-white  items-center rounded-t-md rounded-b-md">
                    <div className=" text-black float-right">
                      <FaQuoteLeft size={48} />
                    </div>
                    <div>
                      <div class="mb-8 flex flex-row px-6 py-6 ">
                        <img
                          class="object-center object-cover rounded-full h-16 w-16"
                          src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                          alt=" "
                        ></img>
                        <div class="text-center px-4">
                          <p class="text-xl text-black font-medium mb-2">
                            Jade Bradley
                          </p>
                          <p class="text-base text-blue-400 font-normal ">
                            Client
                          </p>
                        </div>
                      </div>
                      <div className=" text-black text-sm pl-4 text-justify font-normal">
                        Customization is very easy with this theme. Clean and
                        quality design and full support for any kind of request!
                        Great theme
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
 
      <div className=" pt-[80px] ">
        <div className=" h-[720px] w-full  ">
          <div className="text-center pt-4 text-3xl text-black font-medium">
            Upcoming Events
            <div className="text-center text-base text-gray-400 font-normal">
              Cum doctus civibus efficiantur in imperdiet deterruisset.
            </div>
            <div className="flex flex-row">
              <div className=" pl-28 pt-14">
                <div className="box-content h-[135px] w-[600px] p-4 bg-gray-50 rounded-t-md rounded-b-md flex flex-col">
                  <div>
                    <img
                      className="inline h-[90px] w-[120px] float-left rounded-b-md"
                      src="https://demo.createdbycocoon.com/moodle/edumy/15/pluginfile.php/476/block_cocoon_event_list_2/images/1/4.jpg"
                      alt="..."
                    ></img>
 
                    <div className=" text-left pl-3">
                      <span className="text-left pl-6 text-xl font-medium">
                        Everything is Teachable
                        <div>
                          <p className="flex flex-row pl-6 font-light text-sm pt-2">
                            {" "}
                            <FcCalendar size={28} />
                            Saturday, 28 December 2019, 9:53 PM
                          </p>
                          <p className="flex flex-row  pl-6 font-light text-sm pt-2">
                            {" "}
                            <CiLocationOn size={28} />
                            Cambridge, MA 02138, USA
                          </p>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="text-blue-500 bg-blue-100 h-12  text-center w-28 text-sm rounded-t-md rounded-b-md flex items-center justify-center">
                    <div class="relative ">28 Dec</div>
                  </div>
                </div>
              </div>
 
              <div className="flex flex-row">
                <div className=" pl-8 pt-14">
                  <div className="box-content h-[135px] w-[600px] p-4 bg-gray-50 rounded-t-md rounded-b-md flex flex-col">
                    <div>
                      <img
                        className="inline h-[90px] w-[120px] float-left rounded-b-md"
                        src="https://demo.createdbycocoon.com/moodle/edumy/15/pluginfile.php/476/block_cocoon_event_list_2/images/2/3.jpg"
                        alt="..."
                      ></img>
                      <div className=" text-left pl-3">
                        <span className="text-left pl-6 text-xl font-medium">
                          Career Fair in San Francisco
                          <div>
                            <p className="flex flex-row pl-6 font-light text-sm pt-2">
                              {" "}
                              <FcCalendar size={28} />
                              Thursday, 23 April 2020, 10:40 AM
                            </p>
                            <p className="flex flex-row  pl-6 font-light text-sm pt-2">
                              {" "}
                              <CiLocationOn size={28} />
                              India
                            </p>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="text-blue-500 bg-blue-100 h-12  text-center w-28 text-sm rounded-t-md rounded-b-md flex items-center justify-center">
                      <div class="relative ">23 Apr</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className=" pl-28 pt-14">
                <div className="box-content h-[135px] w-[600px] p-4 bg-gray-50 rounded-t-md rounded-b-md flex flex-col">
                  <div>
                    <img
                      className="inline h-[90px] w-[120px] float-left rounded-b-md"
                      src="https://demo.createdbycocoon.com/moodle/edumy/15/pluginfile.php/476/block_cocoon_event_list_2/images/3/2.jpg"
                      alt="..."
                    ></img>
                    <div className=" text-left pl-3">
                      <span className="text-left pl-6 text-xl font-medium">
                        Capacitacion
                        <div>
                          <p className="flex flex-row pl-6 font-light text-sm pt-2">
                            {" "}
                            <FcCalendar size={28} />
                            Sunday, 8 March 2020, 6:43 PM
                          </p>
                          <p className="flex flex-row  pl-6 font-light text-sm pt-2">
                            {" "}
                            <CiLocationOn size={28} />
                            Cardona
                          </p>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="text-blue-500 bg-blue-100 h-12  text-center w-28 text-sm rounded-t-md rounded-b-md flex items-center justify-center">
                    <div class="relative ">8 Mar</div>
                  </div>
                </div>
              </div>
 
              <div className="flex flex-row">
                <div className=" pl-8 pt-14">
                  <div className="box-content h-[135px] w-[600px] p-4 bg-gray-50 rounded-t-md rounded-b-md flex flex-col">
                    <div>
                      <img
                        className="inline h-[90px] w-[120px] float-left rounded-b-md"
                        src="https://demo.createdbycocoon.com/moodle/edumy/15/pluginfile.php/476/block_cocoon_event_list_2/images/4/8.jpg"
                        alt="..."
                      ></img>
                      <div className=" text-left pl-3">
                        <span className="text-left pl-6 text-xl font-medium">
                          Career Fair in San Francisco
                          <div>
                            <p className="flex flex-row pl-6 font-light text-sm pt-2">
                              {" "}
                              <FcCalendar size={28} />
                              Thursday, 23 April 2020, 10:40 AM
                            </p>
                            <p className="flex flex-row  pl-6 font-light text-sm pt-2">
                              {" "}
                              <CiLocationOn size={28} />
                              USA
                            </p>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="text-blue-500 bg-blue-100 h-12  text-center w-28 text-sm rounded-t-md rounded-b-md flex items-center justify-center">
                      <div class="relative ">23 Apr</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className=" pl-28 pt-14">
                <div className="box-content h-[135px] w-[600px] p-4 bg-gray-50 rounded-t-md rounded-b-md flex flex-col">
                  <div>
                    <img
                      className="inline h-[90px] w-[120px] float-left rounded-b-md"
                      src="https://demo.createdbycocoon.com/moodle/edumy/15/pluginfile.php/476/block_cocoon_event_list_2/images/5/6.jpg"
                      alt="..."
                    ></img>
                    <div className=" text-left pl-3">
                      <span className="text-left pl-6 text-xl font-medium">
                        Everything is Teachable
                        <div>
                          <p className="flex flex-row pl-6 font-light text-sm pt-2">
                            {" "}
                            <FcCalendar size={28} />
                            Saturday, 28 December 2019, 9:53 PM
                          </p>
                          <p className="flex flex-row  pl-6 font-light text-sm pt-2">
                            {" "}
                            <CiLocationOn size={28} />
                            Cambridge, MA 02138, USA
                          </p>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="text-blue-500 bg-blue-100 h-12  text-center w-28 text-sm rounded-t-md rounded-b-md flex items-center justify-center">
                    <div class="relative ">28 Dec</div>
                  </div>
                </div>
              </div>
 
              <div className="flex flex-row">
                <div className=" pl-8 pt-14">
                  <div className="box-content h-[135px] w-[600px] p-4 bg-gray-50 rounded-t-md rounded-b-md flex flex-col">
                    <div>
                      <img
                        className="inline h-[90px] w-[120px] float-left rounded-b-md"
                        src="https://demo.createdbycocoon.com/moodle/edumy/15/pluginfile.php/476/block_cocoon_event_list_2/images/6/4.jpg"
                        alt="..."
                      ></img>
                      <div className=" text-left pl-3">
                        <span className="text-left pl-6 text-xl font-medium">
                          Capacitacion
                          <div>
                            <p className="flex flex-row pl-6 font-light text-sm pt-2">
                              {" "}
                              <FcCalendar size={28} />
                              Sunday, 8 March 2020, 6:43 PM
                            </p>
                            <p className="flex flex-row  pl-6 font-light text-sm pt-2">
                              {" "}
                              <CiLocationOn size={28} />
                              Cardona
                            </p>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="text-blue-500 bg-blue-100 h-12  text-center w-28 text-sm rounded-t-md rounded-b-md flex items-center justify-center">
                      <div class="relative ">28 Dec</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Profilecard;