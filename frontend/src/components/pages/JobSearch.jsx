import React, { useState } from 'react';
import { FaRegBookmark, FaSearch } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import { PiSuitcaseSimpleFill } from 'react-icons/pi';
import { FaCaretDown } from 'react-icons/fa';
import { PiCaretUpBold } from 'react-icons/pi';
import { PiCaretDownBold } from 'react-icons/pi';
import { IoLocationOutline } from 'react-icons/io5';

const JobSearch = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">Job Search</h1>
          <p className="text-lg sm:text-xl text-gray-500 mt-2 font-semibold">
            Search For your desired job matching skills
          </p>
        </div>

        <div className="mt-10">
          <div className="bg-[#f7f7f7] flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 py-4 rounded-lg relative space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="relative w-full lg:w-auto">
              <FaSearch className="text-[#848484] absolute top-3 left-3" />
              <input
                type="text"
                placeholder="Enter Job title"
                className="bg-transparent border-[#f7f7f7] border rounded-md px-12 py-2 pl-10 w-full lg:w-60"
              />
            </div>
            <div className="relative w-full lg:w-auto">
              <MdOutlineLocationOn className="text-[#848484] absolute top-3 left-3" />
              <input
                type="text"
                placeholder="Enter location"
                className="bg-transparent border-[#f7f7f7] border rounded-md px-12 py-2 pl-10 w-full lg:w-60"
              />
            </div>
            <div className="relative w-full lg:w-auto">
              <PiSuitcaseSimpleFill className="text-[#848484] absolute top-3 left-3" />
              <input
                type="text"
                placeholder="Years of Experience"
                className="bg-transparent border-[#f7f7f7] border rounded-md px-12 py-2 pl-10 w-full lg:w-60"
              />
            </div>
            <button className="bg-[#6300b3] text-white px-5 py-2.5 rounded-md w-full lg:w-auto lg:absolute lg:right-4">
              Search
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-4 px-4">
          <div className="flex items-center justify-between -mt-72">
            <h5 className="text-xl font-semibold">Filter</h5>
            <h6 className="text-blue-600 cursor-pointer hover:underline">
              Clear all
            </h6>
          </div>
          <div className="lg:col-span-2 flex items-center justify-between">
            <h5 className="font-semibold -mt-72">All Jobs (2310)</h5>
            <div className="relative w-full lg:w-[300px] h-[300px] flex items-center justify-center">
              <button className="flex items-center border border-gray-300 px-4 py-2 rounded-md -mt-72">
                Popular <FaCaretDown className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="bg-[#f7f7f7] p-4 rounded-xl">
              <p className="text-md font-semibold">Salary Range</p>
              <div className="flex flex-col md:flex-row gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Min"
                  className="w-full md:w-1/2 border border-gray-300 rounded-md px-2 py-1"
                />
                <input
                  type="text"
                  placeholder="Max"
                  className="w-full md:w-1/2 border border-gray-300 rounded-md px-2 py-1"
                />
              </div>
              <div className="border-1 border-b-[#d8d2d2] w-60 text-center ms-[42px] mt-9"></div>
              <div className="p-4 md:p-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-lg">Job Type</h4>
                  <PiCaretUpBold className="text-xl" />
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    'All (2567)',
                    'Full-Time (450)',
                    'Part-Time (145)',
                    'Internship (65)',
                    'Contract (12)',
                  ].map((label, index) => (
                    <label
                      key={index}
                      htmlFor={`custom-checkbox-${index}`}
                      className="flex items-center text-gray-700 text-sm font-medium"
                    >
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        className="form-checkbox h-4 w-4 text-blue-600 mr-2"
                        checked={checked}
                        onChange={handleCheckboxChange}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-1 border-b-[#d8d2d2] w-60 text-center ms-[42px] mt-9"></div>
              <div className="p-4 md:p-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-lg">Work Mode</h4>
                  <PiCaretUpBold className="text-xl" />
                </div>
                <div className="flex flex-col gap-2">
                  {['On-Site', 'Remote (180)', 'Hybrid (200)'].map(
                    (label, index) => (
                      <label
                        key={index}
                        htmlFor={`work-mode-checkbox-${index}`}
                        className="flex items-center text-gray-700 text-sm font-medium ml-4"
                      >
                        <input
                          type="checkbox"
                          id={`work-mode-checkbox-${index}`}
                          className="form-checkbox h-4 w-4 text-blue-600 mr-2"
                          checked={checked}
                          onChange={handleCheckboxChange}
                        />
                        {label}
                      </label>
                    )
                  )}
                </div>
              </div>

              <div className="border-1 border-b-[#d8d2d2] w-60 text-center ms-[42px] mt-9"></div>
              <div className="p-4 md:p-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-lg">Job Functions</h4>
                  <PiCaretUpBold className="text-xl" />
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    'Marketing (21)',
                    'Engineering (45)',
                    'Design (71)',
                    'Sales (24)',
                    'Customer Service (109)',
                  ].map((label, index) => (
                    <label
                      key={index}
                      htmlFor={`job-function-checkbox-${index}`}
                      className="flex items-center text-gray-700 text-sm font-medium ml-4"
                    >
                      <input
                        type="checkbox"
                        id={`job-function-checkbox-${index}`}
                        className="form-checkbox h-4 w-4 text-blue-600 mr-2"
                        checked={checked}
                        onChange={handleCheckboxChange}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-1 border-b-[#d8d2d2] w-60 text-center ms-[42px] mt-9"></div>
              <div className="p-4 md:p-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-lg">Engineering Level</h4>
                  <PiCaretUpBold className="text-xl" />
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    'Fresher/Entry-Level (265)',
                    'Junior (21)',
                    'Mid-Level (212)',
                    'Senior (12)',
                    'Lead/Managerial (24)',
                    'Director/Executive (10)',
                  ].map((label, index) => (
                    <label
                      key={index}
                      htmlFor={`engineering-level-checkbox-${index}`}
                      className="flex items-center text-gray-700 text-sm font-medium ml-4"
                    >
                      <input
                        type="checkbox"
                        id={`engineering-level-checkbox-${index}`}
                        className="form-checkbox h-4 w-4 text-blue-600 mr-2"
                        checked={checked}
                        onChange={handleCheckboxChange}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center mt-4">
                <div className="flex items-center space-x-2">
                  <PiCaretDownBold className="text-[#6300b3] text-2xl" />
                  <h1 className="text-[#6300b3] text-lg font-bold">
                    Expand all
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 -ms-4">
            <div className="flex flex-wrap justify-between gap-4 p-4">
              <div className="bg-[#f9f4fc] flex flex-col rounded-lg shadow-md w-full sm:w-80 md:w-96 h-auto">
                <div className="flex justify-between items-center p-4">
                  <h4 className="text-gray-800 font-medium text-sm sm:text-md">
                    Senior UI/UX Designer
                  </h4>
                  <FaRegBookmark className="text-gray-600 text-lg sm:text-xl" />
                </div>
                <p className="text-xs px-4 text-gray-500 font-semibold">
                  <span className="text-[#6300b3] uppercase bg-[#e5d8f0] rounded-md p-1">
                    Full-time
                  </span>{' '}
                  Salary: $30,000 - $55,000
                </p>
                <div className="flex items-center px-4 py-2">
                  <img
                    src="./../../assets/apple.png"
                    alt="Apple"
                    className="w-12 h-12"
                  />
                  <div className="flex flex-col ml-4">
                    <h6 className="font-semibold text-xs sm:text-sm">Apple</h6>
                    <p className="flex items-center text-xs sm:text-sm">
                      <IoLocationOutline className="mr-2" /> Boston, USA
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 mt-2 sm:mt-4">
                  <div className="flex items-center space-x-1">
                    <img
                      src="./../../assets/1.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                    <img
                      src="./../../assets/2.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                    <img
                      src="./../../assets/3.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                    <img
                      src="./../../assets/4.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                    <img
                      src="./../../assets/5.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm font-semibold">
                    9+ applicants
                  </p>
                </div>
                <div className="flex justify-between items-center gap-2 p-4">
                  <button className="border-2 border-[#6300b3] py-1 px-2 sm:py-2 sm:px-4 rounded-md text-xs sm:text-sm">
                    View details
                  </button>
                  <button className="bg-[#6300b3] text-white py-1 px-2 sm:py-2 sm:px-4 rounded-md text-xs sm:text-sm">
                    Apply now
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-4 p-4">
              <div className="bg-[#f9f4fc] flex flex-col rounded-lg shadow-md w-full sm:w-80 md:w-96 h-auto">
                <div className="flex justify-between items-center p-4">
                  <h4 className="text-gray-800 font-medium text-sm sm:text-md">
                    Senior UI/UX Designer
                  </h4>
                  <FaRegBookmark className="text-gray-600 text-lg sm:text-xl" />
                </div>
                <p className="text-xs px-4 text-gray-500 font-semibold">
                  <span className="text-[#6300b3] uppercase bg-[#e5d8f0] rounded-md p-1">
                    Full-time
                  </span>{' '}
                  Salary: $30,000 - $55,000
                </p>
                <div className="flex items-center px-4 py-2">
                  <img
                    src="./../../assets/apple.png"
                    alt="Apple"
                    className="w-12 h-12"
                  />
                  <div className="flex flex-col ml-4">
                    <h6 className="font-semibold text-xs sm:text-sm">Apple</h6>
                    <p className="flex items-center text-xs sm:text-sm">
                      <IoLocationOutline className="mr-2" /> Boston, USA
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 mt-2 sm:mt-4">
                  <div className="flex items-center space-x-1">
                    <img
                      src="./../../assets/1.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                    <img
                      src="./../../assets/2.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                    <img
                      src="./../../assets/3.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                    <img
                      src="./../../assets/4.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                    <img
                      src="./../../assets/5.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm font-semibold">
                    9+ applicants
                  </p>
                </div>
                <div className="flex justify-between items-center gap-2 p-4">
                  <button className="border-2 border-[#6300b3] py-1 px-2 sm:py-2 sm:px-4 rounded-md text-xs sm:text-sm">
                    View details
                  </button>
                  <button className="bg-[#6300b3] text-white py-1 px-2 sm:py-2 sm:px-4 rounded-md text-xs sm:text-sm">
                    Apply now
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-4 p-4">
              <div className="bg-[#f9f4fc] flex flex-col rounded-lg shadow-md w-full sm:w-80 md:w-96 h-auto">
                <div className="flex justify-between items-center p-4">
                  <h4 className="text-gray-800 font-medium text-sm sm:text-md">
                    Senior UI/UX Designer
                  </h4>
                  <FaRegBookmark className="text-gray-600 text-lg sm:text-xl" />
                </div>
                <p className="text-xs px-4 text-gray-500 font-semibold">
                  <span className="text-[#6300b3] uppercase bg-[#e5d8f0] rounded-md p-1">
                    Full-time
                  </span>{' '}
                  Salary: $30,000 - $55,000
                </p>
                <div className="flex items-center px-4 py-2">
                  <img
                    src="./../../assets/apple.png"
                    alt="Apple"
                    className="w-12 h-12"
                  />
                  <div className="flex flex-col ml-4">
                    <h6 className="font-semibold text-xs sm:text-sm">Apple</h6>
                    <p className="flex items-center text-xs sm:text-sm">
                      <IoLocationOutline className="mr-2" /> Boston, USA
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 mt-2 sm:mt-4">
                  <div className="flex items-center space-x-1">
                    <img
                      src="./../../assets/1.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                    <img
                      src="./../../assets/2.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                    <img
                      src="./../../assets/3.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                    <img
                      src="./../../assets/4.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                    <img
                      src="./../../assets/5.png"
                      alt="card-image"
                      className="w-4 h-4 rounded-full"
                    />
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm font-semibold">
                    9+ applicants
                  </p>
                </div>
                <div className="flex justify-between items-center gap-2 p-4">
                  <button className="border-2 border-[#6300b3] py-1 px-2 sm:py-2 sm:px-4 rounded-md text-xs sm:text-sm">
                    View details
                  </button>
                  <button className="bg-[#6300b3] text-white py-1 px-2 sm:py-2 sm:px-4 rounded-md text-xs sm:text-sm">
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSearch;
