import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="bg-[#f9f4fc] mx-auto px-4 py-14">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center md:items-start md:text-left space-y-4 ms-20">
            <h2 className="font-bold text-[#6300b3] text-xl">
              <i className="ri-search-eye-fill"></i> AlwaysApply
            </h2>
            <p className="text-gray-700">
              Call now: <span className="text-[#6300b3]">+91 9591776078</span>
            </p>
            <p className="text-gray-700 text-sm">
              456, Chandani Chowk Street, Near
              <br /> Red Fort, Old Delhi, New Delhi,
              <br />
              Delhi 110006, India
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 ms-10 text-sm">
            <h2 className="font-bold text-[#6300b3] text-lg">Quick Links</h2>
            <a href="/about" className="hover:text-[#6300b3]">
              About
            </a>
            <a href="/contact" className="text-[#6300b3] hover:text-[#6300b3]">
              Contact
            </a>
            <a href="/admin" className="hover:text-[#6300b3]">
              Admin
            </a>
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 text-sm">
            <h2 className="font-bold text-[#6300b3] text-lg">Candidates</h2>
            <a href="/jobs" className="hover:text-[#6300b3]">
              Browse Jobs
            </a>
            <a href="/employers" className="hover:text-[#6300b3]">
              Browse Employers
            </a>
            <a href="/dashboard" className="hover:text-[#6300b3]">
              Candidate Dashboard
            </a>
            <a href="/saved-jobs" className="hover:text-[#6300b3]">
              Saved Jobs
            </a>
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 text-sm">
            <h2 className="font-bold text-[#6300b3] text-lg">Employers</h2>
            <a href="/post-job" className="hover:text-[#6300b3]">
              Post a Job
            </a>
            <a href="/candidates" className="hover:text-[#6300b3]">
              Browse Candidates
            </a>
            <a href="/employer-dashboard" className="hover:text-[#6300b3]">
              Employer Dashboard
            </a>
            <a href="/applications" className="hover:text-[#6300b3]">
              Applications
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
