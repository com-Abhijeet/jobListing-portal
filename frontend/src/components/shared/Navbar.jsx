import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { FaUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import store from '@/redux/store';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';
// import Profile from './../pages/Profile';
// import Cookies from 'js-cookie';
// import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
  // const user = true;
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate('/');
        toast.success(res.data.message);
      }
    } catch {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };



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
        <Link to="/findJobs" className="text-gray-700 hover:text-[#6300b3] p-2">
          Jobs
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
            <div className="hidden md:flex md:justify-between md:items-center transition-all duration-500 ease-in gap-5 font-semibold ms-24">
              {user && user.role === 'recruiter' ? (
                <>
                  <Link
                    to="/admin/companies"
                    className="text-[#6300b3] hover:text-[#6300b3]"
                  >
                    Companies
                  </Link>
                  <Link
                    to="/admin/jobs"
                    className="text-gray-700 hover:text-[#6300b3] focus:border-none"
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        Jobs <i className="ri-arrow-down-s-fill"></i>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Link to="/jobsearch">Job Search</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link to="/joblisting">Job Listing</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/" className="text-[#6300b3] hover:text-[#6300b3]">
                    Home
                  </Link>
                  <Link
                    to="/jobs"
                    className="text-gray-700 hover:text-[#6300b3] focus:border-none"
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        Jobs <i className="ri-arrow-down-s-fill"></i>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Link to="/jobsearch">Job Search</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link to="/joblisting">Job Listing</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Link>

                  <Link
                    to="/admin"
                    className="text-gray-700 hover:text-[#6300b3]"
                  >
                    Admin
                  </Link>
                  <Link
                    to="/aboutUs"
                    className="text-gray-700 hover:text-[#6300b3]"
                  >
                    About Us
                  </Link>
                </>
              )}
            </div>
            <div className="hidden ms-24 justify-end md:flex md:items-center md:justify-between gap-3">
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
                        src={user?.Profile?.profilePhoto}
                        className="text-[#6300b3]"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user?.fullname}</h4>
                      <p className="text-sm text-muted-foreground">
                        {user?.bio}
                      </p>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    {user && user.role === 'student' && (
                      <Button
                        className="flex gap-2 text-md text-[#6300b3]"
                        variant="link"
                      >
                        <FaUser /> <Link to="/profile">Profile</Link>
                      </Button>
                    )}

                    <hr />
                    <Button
                      onClick={logoutHandler}
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
