import React from "react";
import { FaHome, FaSearch, FaSubscript, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const SideBar = () => {
  return (
    <div className="aside w-40 fixed  top-0 left-0 h-screen text-white bg-gray-800  ">
      <ul className="flex flex-col justify-between  h-full">
        <div className="bottom mt-4">
          <li className="mb-1 ml-2">
            <div className="flex items-center">
              <FaHome className="mr-2 mb-2 " size={20} /> Home
            </div>
          </li>

           <li className="mb-1  ml-2">
            <div className="flex items-center">
              <FaUser className="mr-2 mb-2 " size={20} /> Users            </div>
          </li>


            <li className="mb-1  ml-2 ">
            <div className="flex items-center">
              <FaSearch className="mr-2 mb-2 " size={20} /> Search
            </div>
          </li>





        </div>

        <div className="bottom ml-3 item-center">
            <li>
              
                 <IoMdSettings size={23} /> 
                <FaUser className="mt-4" size={18}/>
               

            </li>


        </div>






      </ul>
    </div>
  );
};

export default SideBar;
