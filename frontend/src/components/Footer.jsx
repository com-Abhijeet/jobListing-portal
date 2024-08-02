import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="container bg-[#f9f4fc] mx-auto px-4 w-full left-0 right-0 p-14 ps-16 pl-16">
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          <div className="grid grid-cols-4 gap-2 ms-20">
            <div>
              <h2 className="font-bold text-[#6300b3] text-1xl gap-1 mb-2">
                <i className="ri-search-eye-fill "></i>
                AlwaysApply
              </h2>
              <p className="text-gray-700">
                Call now: <span className="text-[#6300b3]">+91 9591776078</span>
              </p>
              <p className="text-gray-700 text-sm mt-2">
                456, Chandani Chowk Street, Near
                <br />
                Red Fort, Old Delhi, New Delhi,
                <br /> Delhi 110006, India
              </p>
            </div>
            <div className="flex flex-col justify-center align-center">
              <h2 className="font-bold text-[#6300b3] text-1xl gap-2 mb-2">
                <a>Quick Link</a>
              </h2>
              <a>About</a>
              <a className="text-[#6300b3]">Contact</a>
              <a>Admin</a>
            </div>
            <div className="flex flex-col justify-center align-center">
              <h2 className="font-bold text-[#6300b3] text-1xl gap-2 mb-2">
                <a>Candidate</a>
              </h2>
              <a>Browse Jobs</a>
              <a>Browse Employers</a>
              <a>Candidate Dashboard</a>
              <a>Saved Jobs</a>
            </div>
            <div className="flex flex-col justify-center align-center">
              <h2 className="font-bold text-[#6300b3] text-1xl gap-2 mb-2">
                <a>Employers</a>
              </h2>
              <a>Post a Job</a>
              <a>Browse Candidates</a>
              <a>Employers Dashboard</a>
              <a>Applications</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
