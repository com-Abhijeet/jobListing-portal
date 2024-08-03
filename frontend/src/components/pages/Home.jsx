import React from 'react';
import { FaSearch, FaRegBookmark } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';

const Home = () => {
  return (
    <>
      <div className="bg-[#f9f4fc] mx-auto px-4 py-8 w-full m-2">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 mt-6 md:mt-20 px-4">
            <p className="text-3xl md:text-5xl font-semibold">
              Find a Job that aligns With
              <br /> your interests and skills
            </p>
            <p className="text-gray-700 font-medium tracking-wider mt-4">
              Thousands of jobs in all the leading sectors are waiting for you
            </p>
            <div className="relative mt-5 flex flex-col md:flex-row items-center md:items-stretch w-full">
              <div className="relative w-full md:w-auto mb-4 md:mb-0">
                <FaSearch className="text-[#6300b3] absolute left-4 top-4 text-base" />
                <input
                  type="text"
                  placeholder="Job Title"
                  className="pl-10 pr-4 py-3 outline-none w-full"
                />
              </div>
              <div className="relative w-full md:w-auto mb-4 md:mb-0 md:ml-4">
                <FaLocationDot className="text-[#6300b3] absolute left-4 top-4 text-base" />
                <input
                  type="text"
                  placeholder="Location"
                  className="pl-10 pr-4 py-3 border-l-2 border-[#6300b3] outline-none w-full"
                />
              </div>
              <button className="bg-[#6300b3] -ms-3 text-white font-bold px-4 py-3 rounded-md w-full md:w-auto md:ml-4">
                Find Job
              </button>
            </div>
            <p className="text-gray-700 font-semibold mt-4 text-sm">
              <span className="text-gray-500">Suggestions:</span> UI/UX
              Designer, Programming,{' '}
              <span className="text-[#6300b3]">Digital Marketing, </span>Video
              Animation.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="./../../assets/hero-img.png"
              alt="hero-image"
              className="w-full md:w-auto max-w-md"
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-24 mb-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-semibold">Featured Jobs</h1>
          <p className="text-xl md:text-2xl mt-2 text-gray-600">
            Choose jobs from the top employers and apply for the same
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
          <div className="bg-[#f9f4fc] flex flex-col rounded-lg shadow-md">
            <div className="flex justify-between items-center p-4">
              <h4 className="text-gray-800 font-medium text-xl">
                Technical Support Specialist
              </h4>
              <FaRegBookmark className="text-gray-600 text-xl" />
            </div>
            <p className="text-sm px-4 text-gray-500 font-semibold">
              <span className="text-[#1bc442] uppercase bg-[#c0dbc7] rounded-md p-1">
                Part-time
              </span>{' '}
              Salary: 20,000 INR - 25,000 INR
            </p>
            <div className="flex items-center px-4 mt-2">
              <img
                src="./../../assets/google.png"
                alt="Google"
                className="w-12 h-12"
              />
              <div className="flex flex-col ml-4">
                <h6 className="font-bold">Google Inc.</h6>
                <p className="flex items-center">
                  <IoLocationOutline className="mr-2" /> New Delhi, India
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 mt-4">
              <div className="flex items-center">
                <img
                  src="./../../assets/1.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
                <img
                  src="./../../assets/2.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
                <img
                  src="./../../assets/3.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
                <img
                  src="./../../assets/4.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
                <img
                  src="./../../assets/5.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
              </div>
              <p className="text-gray-600 text-md font-semibold">
                10+ applicants
              </p>
            </div>
            <div className="flex justify-between items-center gap-4 p-4">
              <button className="border-2 border-[#6300b3] py-2 px-4 rounded-md">
                View details
              </button>
              <button className="bg-[#6300b3] text-white py-2 px-4 rounded-md">
                Apply now
              </button>
            </div>
          </div>
          <div className="bg-[#f9f4fc] flex flex-col rounded-lg shadow-md">
            <div className="flex justify-between items-center p-4">
              <h4 className="text-gray-800 font-medium text-xl">
                Senior UI/UX Designer
              </h4>
              <FaRegBookmark className="text-gray-600 text-xl" />
            </div>
            <p className="text-sm px-4 text-gray-500 font-semibold">
              <span className="text-[#6300b3] uppercase bg-[#e5d8f0] rounded-md p-1">
                Full-time
              </span>{' '}
              Salary: $30,000 - $55,000
            </p>
            <div className="flex items-center px-4 mt-2">
              <img
                src="./../../assets/apple.png"
                alt="Apple"
                className="w-12 h-12"
              />
              <div className="flex flex-col ml-4">
                <h6 className="font-bold">Apple</h6>
                <p className="flex items-center">
                  <IoLocationOutline className="mr-2" /> Boston, USA
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 mt-4">
              <div className="flex items-center">
                <img
                  src="./../../assets/1.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
                <img
                  src="./../../assets/2.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
                <img
                  src="./../../assets/3.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
                <img
                  src="./../../assets/4.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
                <img
                  src="./../../assets/5.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
              </div>
              <p className="text-gray-600 text-md font-semibold">
                9+ applicants
              </p>
            </div>
            <div className="flex justify-between items-center gap-4 p-4">
              <button className="border-2 border-[#6300b3] py-2 px-4 rounded-md">
                View details
              </button>
              <button className="bg-[#6300b3] text-white py-2 px-4 rounded-md">
                Apply now
              </button>
            </div>
          </div>
          <div className="bg-[#f9f4fc] flex flex-col rounded-lg shadow-md">
            <div className="flex justify-between items-center p-4">
              <h4 className="text-gray-800 font-medium text-xl">
                Marketing Officer
              </h4>
              <FaRegBookmark className="text-gray-600 text-xl" />
            </div>
            <p className="text-sm px-4 text-gray-500 font-semibold">
              <span className="text-[#6300b3] uppercase bg-[#e5d8f0] rounded-md p-1">
                Part-time
              </span>{' '}
              Salary: 15,000 INR - 35,000 INR
            </p>
            <div className="flex items-center px-4 mt-2">
              <img
                src="./../../assets/intel.png"
                alt="Intel"
                className="w-12 h-12"
              />
              <div className="flex flex-col ml-4">
                <h6 className="font-bold">Intel Corp.</h6>
                <p className="flex items-center">
                  <IoLocationOutline className="mr-2" /> Bangalore, India
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 mt-4">
              <div className="flex items-center">
                <img
                  src="./../../assets/1.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
                <img
                  src="./../../assets/2.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
                <img
                  src="./../../assets/3.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
                <img
                  src="./../../assets/4.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
                <img
                  src="./../../assets/5.png"
                  alt="card-image"
                  className="w-5 h-5 rounded-full"
                />
              </div>
              <p className="text-gray-600 text-md font-semibold">
                30+ applicants
              </p>
            </div>
            <div className="flex justify-between items-center gap-4 p-4">
              <button className="border-2 border-[#6300b3] py-2 px-4 rounded-md">
                View details
              </button>
              <button className="bg-[#6300b3] text-white py-2 px-4 rounded-md">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-4 py-8 w-full m-4">
        <div className="text-center mb-16 md:mb-32">
          <h1 className="text-xl md:text-5xl font-semibold underline text-[#6300b3]">
            View all
          </h1>
        </div>
        <div className="text-center mb-8">
          <button className="bg-gray-100 text-gray-700 px-6 py-2 text-xl md:text-2xl font-semibold z-10">
            Top companies hiring now
          </button>
          <hr className="-mt-5 z-0 text-gray-500" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10 mt-8">
          <img
            src="./../../assets/google1.png"
            alt="Google"
            className="w-24 h-auto mt-3 md:w-36 lg:w-56"
          />
          <img
            src="./../../assets/microsoft.png"
            alt="Microsoft"
            className="w-20 h-auto mt-3 md:w-32 lg:w-48"
          />
          <img
            src="./../../assets/flipkart.png"
            alt="Flipkart"
            className="w-16 h-auto mt-4 md:mt-10 md:w-28 lg:w-36"
          />
          <img
            src="./../../assets/youtube.png"
            alt="YouTube"
            className="w-10 h-auto mt-8 md:mt-10 md:w-28 lg:w-32"
          />
          <img
            src="./../../assets/ibm.png"
            alt="IBM"
            className="w-10 h-auto mt-8 md:mt-10 md:w-24 lg:w-24"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
