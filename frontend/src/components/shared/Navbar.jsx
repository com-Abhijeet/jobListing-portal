import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';
import { isLoggedIn } from '@/utils/authUtils'; // Import the isLoggedIn function
import Cookies from 'js-cookie';
import { TiArrowSortedDown } from 'react-icons/ti';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    try {
      Cookies.remove('token'); // or sessionStorage.removeItem('authToken');
      dispatch(setUser(null));
      navigate('/');

      toast.success('Successfully logged out');
    } catch (error) {
      console.error('Logout Error:', error);
      toast.error('Logout failed. Please try again.');
    }
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Always<span className="text-[#862ec0]">Apply</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex font-medium items-center gap-5">
            {user && user.role === 'recruiter' ? (
              <>
                <div>
                  <Link to="/admin/companies">Companies</Link>
                </div>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex align-center gap-1">
                      Job <TiArrowSortedDown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link to="/admin/jobs">Jobs</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link to="/jobsearch">Job Search</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link to="joblisting">Job Lisitng</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Link to="/">Home</Link>
                </div>
                <div>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex align-center gap-1">
                        Job <TiArrowSortedDown className="mt-1" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Link to="joblisting">Job Lisitng</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div>
                  <Link to="/jobsearch">Job Search</Link>
                </div>
              </>
            )}
          </div>

          {!isLoggedIn() ? (
            // Show login and signup buttons if the user is not logged in
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            // Show profile popover if the user is logged in
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer bg-slate-200">
                  <AvatarImage
                    src={user?.profilePicture}
                    alt={user?.fullName || '@user'}
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div>
                  <div className="flex gap-2 space-y-2 text-gray-800 rounded-full">
                    <Avatar className="cursor-pointer bg-slate-200">
                      <AvatarImage
                        src={user?.profilePicture}
                        alt={user?.fullName || '@user'}
                        className="text-gray-400 rounded-full "
                      />
                    </Avatar>
                    <div className="text-gray-800">
                      <h4 className="font-medium text-gray-400">
                        {user?.fullName}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-gray-800">
                    {!user?.role !== 'student' && (
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <User2 />
                        <Button variant="link">
                          <Link to="/profile">View Profile</Link>
                        </Button>
                      </div>
                    )}

                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button onClick={logoutHandler} variant="link">
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
