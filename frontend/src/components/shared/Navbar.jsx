import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { FaUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = false;

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const mobileContent = (
    <>
      <div
        className={`flex flex-col items-center w-full ${
          click ? 'block' : 'hidden'
        } md:hidden`}
      >
        <Link to="/" className="text-[#6300b3] hover:text-[#6300b3] p-2">
          Home
        </Link>
        <Link to="/jobs" className="text-gray-700 hover:text-[#6300b3] p-2">
          Find Jobs
        </Link>
        <Link
          to="/employers"
          className="text-gray-700 hover:text-[#6300b3] p-2"
        >
          Employers
        </Link>
        <Link to="/admin" className="text-gray-700 hover:text-[#6300b3] p-2">
          Admin
        </Link>
        <Link to="/aboutUs" className="text-gray-700 hover:text-[#6300b3] p-2">
          About Us
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 border border-[#6300b3] text-purple-700 hover:bg-[#6300b3] hover:text-white transition-colors my-2 w-full text-center"
        >
          Contact Us
        </Link>
        <Link
          to="/login"
          className="px-4 py-2 bg-purple-700 text-white hover:border-[#6300b3] my-2 w-full text-center"
        >
          Login
        </Link>
      </div>
    </>
  );

  return (
    <>
      <div className="container bg-white flex justify-between items-center w-full top-0 left-0 right-0 md:w-auto">
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
            <div className="hidden ms-16 md:flex md:justify-between md:items-center transition-all duration-500 ease-in gap-5 font-semibold">
              <Link to="/" className="text-[#6300b3] hover:text-[#6300b3]">
                Home
              </Link>
              <Link
                to="/jobs"
                className="text-gray-700 hover:text-[#6300b3]"
              >
                Find Jobs
              </Link>
              <Link
                to="/employers"
                className="text-gray-700 hover:text-[#6300b3]"
              >
                Employers
              </Link>
              <Link to="/admin" className="text-gray-700 hover:text-[#6300b3]">
                Admin
              </Link>
              <Link
                to="/aboutUs"
                className="text-gray-700 hover:text-[#6300b3]"
              >
                About Us
              </Link>
            </div>
            <div className="hidden ms-16 justify-end md:flex md:items-center md:justify-between gap-3">
              <div className="flex gap-3">
                <a
                  href="/contact"
                  className="px-4 py-1.5 border font-semibold border-[#6300b3] text-purple-700 hover:bg-[#6300b3] hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </div>
              {!user ? (
                <div className="flex items-center gap-2">
                  <Link to="/login">
                    <Button
                      variant="outline"
                      className="text-md border border-[#6300b3] text-[#6300b3] hover:bg-[#6300b3] hover:text-white transition-colors"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button
                      variant="outline"
                      className="text-md border border-[#6300b3] text-[#6300b3] hover:bg-[#6300b3] hover:text-white transition-colors"
                    >
                      Signup
                    </Button>
                  </Link>
                </div>
              ) : (
                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer bg-amber-300">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        className="text-[#6300b3]"
                      />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <Button
                      className="flex gap-2 text-md text-[#6300b3]"
                      variant="link"
                    >
                      <FaUser /> Profile
                    </Button>
                    <hr />
                    <Button
                      className="flex gap-2 text-md text-[#6300b3]"
                      variant="link"
                    >
                      <MdLogout />
                      Logout
                    </Button>
                  </PopoverContent>
                </Popover>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center gap-10 md:hidden">
            <div className="flex justify-end items-center w-1/2">
              <button
                className="flex-1 text-3xl p-4 flex justify-end"
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
