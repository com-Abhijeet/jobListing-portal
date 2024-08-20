import { Facebook } from 'lucide-react';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className=" flex items-center justify-between mt-10 px-40 bg-gradient-to-r from-[#f4ebfa] from-30% via-[#fbf7fd] to-[#f4ebfa] ">
        <div className="grid grid-4 py-20 text-gray-500">
          <div className="grid-item font-bold text-[#6300b3] text-xl gap-1 mb-5">
            <h1>AlwaysApply</h1>
          </div>
          <div className="grid-item ">
            <h1>
              Call Now: <span className="text-[#6300b3]">+91 4376565837</span>
            </h1>
          </div>
          <div className="grid-item text-sm mt-3 tracking-tighter">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="grid grid-4 text-gray-500">
          <div className="grid-item -mt-6">
            <Link to="/">
              <h1 className="text-[#6300b3] font-bold">Quick Link</h1>
            </Link>
          </div>
          <div className="grid-item hover:text-[#6300b3] cursor-pointer text-md mt-5">
            About
          </div>
          <div className="grid-item hover:text-[#6300b3] cursor-pointer text-md">
            Contact
          </div>
          <div className="grid-item hover:text-[#6300b3] cursor-pointer text-md">
            Admin
          </div>
        </div>
        <div className="grid grid-4  text-gray-500">
          <div className="grid-item -mt-3">
            <Link to="/">
              <h1 className="text-[#6300b3] font-bold">Candidate</h1>
            </Link>
          </div>
          <div className="grid-item hover:text-[#6300b3] cursor-pointer text-md mt-5">
            Browse Jobs
          </div>
          <div className="grid-item hover:text-[#6300b3] cursor-pointer text-md">
            Browse Employees
          </div>
          <div className="grid-item hover:text-[#6300b3] cursor-pointer text-md">
            Candidate Dashboard
          </div>
          <div className="grid-item hover:text-[#6300b3] cursor-pointer text-md">
            Saved Jobs
          </div>
        </div>
        <div className="grid grid-4  text-gray-500">
          <div className="grid-item -mt-3">
            <Link to="/">
              <h1 className="text-[#6300b3] font-bold">Candidate</h1>
            </Link>
          </div>
          <div className="grid-item hover:text-[#6300b3] cursor-pointer text-md mt-5">
            Post a Job
          </div>
          <div className="grid-item hover:text-[#6300b3] cursor-pointer text-md">
            Browse Candidates
          </div>
          <div className="grid-item hover:text-[#6300b3] cursor-pointer text-md">
            Employee Dashboard
          </div>
          <div className="grid-item hover:text-[#6300b3] cursor-pointer text-md">
            Applications
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#f4ebfa] from-30% via-[#fbf7fd] to-[#f4ebfa] px-40">
        <hr className="border border-gray-300 -mt-10 max-w-6xl mx-auto" />
        <div className="flex items-center justify-between mt-5 pb-5 text-[#6300b3]">
          <div>
            <h1 className="text-sm">
              @ 2024 AlwaysApply - Job portal All rights reserved
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <FaFacebook />
            <FaYoutube />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
