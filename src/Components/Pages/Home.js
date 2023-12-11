import React from 'react'

const Home = () => {
  return (
    <div className="group relative ">
    
      <button className=" text-white py-4 px-6 rounded inline-flex items-center group">
        <span className="mr-1 ">Menu</span>
        <svg
          className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      
      {/* menu list */}
      <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block w-56 	">
        <li className="bg-white rounded-t-md	   py-4 px-4 cursor-pointer">
          Profile
        </li>
        <li className="bg-white  py-4 px-4 cursor-pointer">
          Settings
        </li>
        <li className="bg-white  py-4 px-4 cursor-pointer rounded-b-md	">
          Logout
        </li>
      </ul>
      
    </div>
  )
}

export default Home
