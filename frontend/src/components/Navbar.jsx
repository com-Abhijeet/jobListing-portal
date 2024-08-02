import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg mt-2 mb-2">
        <div className="container mx-auto">
          <a className="navbar-brand" href="/">
            <i className="ri-search-eye-fill text-purple-700"></i>
            &nbsp;
            <span className="text-purple-700 font-semibold text-lg">
              AlwaysApply
            </span>
          </a>
          <button
            className="navbar-toggler text-black-500"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-purple-700 font-semibold"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-gray-600 hover:text-purple-700"
                  href="/findJobs"
                >
                  Find Jobs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-gray-600 hover:text-purple-700"
                  href="/employers"
                >
                  Employers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-gray-600 hover:text-purple-700"
                  href="/admin"
                >
                  Admin
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-gray-600 hover:text-purple-700"
                  href="/aboutUs"
                >
                  About Us
                </a>
              </li>
            </ul>
            <form className="flex gap-3">
              <button
                className="bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white px-4 py-2 rounded"
                type="submit"
              >
                Contact Us
              </button>
              <button
                className="bg-purple-700 text-white hover:bg-transparent hover:text-purple-700 hover:border-2 hover:border-purple-700 px-4 py-2 rounded"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
