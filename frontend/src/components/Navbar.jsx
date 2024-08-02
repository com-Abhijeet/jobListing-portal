import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {};
  return (
    <>
      <div className="container flex justify-between items-center w-full fixed top-0 left-0 right-0 md:w-auto">
        <nav className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="flex justify-between items-center gap-32">
            <div className="font-bold text-[#6300b3] text-2xl gap-1">
              <i className="ri-search-eye-fill "></i>
              AlwaysApply
            </div>
            <div
              onClick="handleMenu()"
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <i class="fa-solid fa-bars" name={open ? 'close' : 'bar'}></i>
            </div>
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
        </nav>
      </div>
    </>
  );
};

export default Navbar;
