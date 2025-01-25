import { useState } from "react";
import { Helmet } from 'react-helmet';
import { AiFillTool } from "react-icons/ai";
import { FaHome, FaFilter } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { BiColumns } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";
import { TiExport } from "react-icons/ti";
import { HiDotsHorizontal } from "react-icons/hi";
import Map from "../../../Components/Map/Map";
// import Login from "../../loginPage/Login";

const BusinessEntitiesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Helmet>
        <title>Business Entities Page | TRST</title>
        <meta name="description" content="This is the home page description" />
        <meta name="keywords" content="home, react, meta tags" />
    </Helmet>
    <div className="pb-3 relative px-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl font-bold mt-2 text-gray-700 dark:text-light">
            Business Entities
          </span>
          <button className="ml-2 mr-2 mt-4 rounded bg-gray-100 shadow-none text-gray-700 text-lg flex justify-center items-center ">
            <HiDotsHorizontal className="dark:text-light dark:bg-[#333] " />
          </button>
        </div>
        <div className="flex mt-2 mr-2">
          <button className="border border-gray-300 bg-white px-3 py-1 ml-2 cursor-pointer active:bg-orange-500 dark:active:bg-orange-500 dark:bg-[#333] dark:border-black">
            Map
          </button>
          <button className="border border-gray-300 bg-white px-3 py-1 cursor-pointer active:bg-orange-500 active:text-white dark:bg-[#333] dark:active:bg-orange-500 dark:border-black">
            List
          </button>
          <button className="ml-2 mr-4 dark:bg-[#333] dark:text-light w-5 h-6 dark:border-none mt-1 rounded-sm">
            <AiFillTool className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center py-3 px-8">
        <div className="flex items-center">
          <div className="text-xl font-medium text-gray-700 mr-2 dark:text-light">
            Business Entity List
          </div>
          <div className="relative inline-block">
            {/* Button */}
            <button
              onClick={toggleDropdown}
              className="relative border border-gray-300 bg-gray-100 px-6 py-2 text-gray-700 flex items-center dark:border-none dark:bg-[#333] dark:text-light"
            >
              All Business Entities
              <span className="absolute inset-y-3 right-2 w-2 h-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  fill="currentColor"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-300 rounded shadow-md">
                <ul className="py-1 text-dark">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 2
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 3
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button className="ml-2 border border-gray-300 bg-gray-100 p-2 rounded text-gray-700 dark:border-none dark:bg-[#333] dark:text-light">
            <FaHome className="w-4 h-4" />
          </button>
          <button className="ml-2 border border-gray-300 bg-gray-100 p-2 rounded text-gray-700 dark:border-none dark:bg-[#333] dark:text-light">
            <LuRefreshCw className="w-4 h-4" />
          </button>
          <button className="ml-2 border border-gray-300 bg-gray-100 p-2 rounded text-gray-700 dark:border-none dark:bg-[#333] dark:text-light">
            <BiColumns className="w-4 h-4" />
          </button>
          <button className="ml-2 border border-gray-300 bg-gray-100 p-2 rounded text-gray-700 dark:border-none dark:bg-[#333] dark:text-light">
            <FaFilter className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center">
          <button className="relative border bg-slate-700 text-white px-5 py-2 rounded shadow-md flex items-center">
            <span className="absolute inset-y-3 left-0.5 w-3 h-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="24"
                width="15px"
                height="15px"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
              </svg>
            </span>
            Business Entity
          </button>
          <button className="ml-2 border border-gray-300 bg-gray-100 p-2 rounded text-gray-700 dark:border-none dark:bg-[#333] dark:text-light">
            <FaRegTrashCan className="w-4 h-4" />
          </button>
          <button className="ml-2 border border-gray-300 bg-gray-100 p-2 rounded text-gray-700 dark:border-none dark:bg-[#333] dark:text-light">
            <TiExport className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* <Login/> */}
      {/* <Map/> */}
    </div>
    </>
  );
};

export default BusinessEntitiesPage;
