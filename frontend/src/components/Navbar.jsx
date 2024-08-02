import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const mobileContent = (
    <>
      <div
        className={`flex flex-col items-center w-full ${
          click ? 'block' : 'hidden'
        } md:hidden`}
      >
        <a href="/" className="text-[#6300b3] hover:text-[#6300b3] p-2">
          Home
        </a>
        <a href="/findJobs" className="text-gray-700 hover:text-[#6300b3] p-2">
          Find Jobs
        </a>
        <a href="/employers" className="text-gray-700 hover:text-[#6300b3] p-2">
          Employers
        </a>
        <a href="/admin" className="text-gray-700 hover:text-[#6300b3] p-2">
          Admin
        </a>
        <a href="/aboutUs" className="text-gray-700 hover:text-[#6300b3] p-2">
          About Us
        </a>
        <a
          href="/contact"
          className="px-4 py-2 border border-[#6300b3] text-purple-700 hover:bg-[#6300b3] hover:text-white transition-colors my-2 w-full text-center"
        >
          Contact Us
        </a>
        <a
          href="/login"
          className="px-4 py-2 bg-purple-700 text-white hover:border-[#6300b3] my-2 w-full text-center"
        >
          Login
        </a>
      </div>
    </>
  );

  return (
    <>
      <div className="container bg-white flex justify-between items-center w-full fixed top-0 left-0 right-0 md:w-auto">
        <nav className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="flex justify-between items-center gap-32">
            <div className="font-bold text-[#6300b3] text-2xl gap-1">
              <i className="ri-search-eye-fill "></i>
              AlwaysApply
            </div>
            {/* <div
              onClick="handleMenu()"
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <i class="fa-solid fa-bars" name={open ? 'close' : 'bar'}></i>
            </div> */}
            <div className="hidden md:flex md:justify-between md:items-center transition-all duration-500 ease-in gap-5 font-semibold">
              <a href="/" className="text-[#6300b3] hover:text-[#6300b3]">
                Home
              </a>
              <a
                href="/findJobs"
                className="text-gray-700 hover:text-[#6300b3]"
              >
                Find Jobs
              </a>
              <a
                href="/employers"
                className="text-gray-700 hover:text-[#6300b3]"
              >
                Employers
              </a>
              <a href="/admin" className="text-gray-700 hover:text-[#6300b3]">
                Admin
              </a>
              <a href="/aboutUs" className="text-gray-700 hover:text-[#6300b3]">
                About Us
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-between gap-3">
              <a
                href="/contact"
                className="px-4 py-2 border border-[#6300b3] text-purple-700 hover:bg-[#6300b3] hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/login"
                className="px-4 py-2 bg-purple-700 text-white hover:border-[#6300b3] "
              >
                Login
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center md:hidden w-full">
            <div className="flex-1">
              <button
                className="text-3xl p-4 flex justify-end"
                onClick={handleClick}
              >
                {click ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            {click && (
              <div className="flex-1 bg-white shadow-md">{mobileContent}</div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
