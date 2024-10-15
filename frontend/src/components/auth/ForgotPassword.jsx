import React, { useEffect, useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';

const ForgotPassword = () => {
  const [input, setInput] = useState({
    email: '',
  });

  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/forgotPassword`, input, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      // console.log(res.data.success);
      if (res.data.success) {
        navigate('/otpinput');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/otpinput');
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-[#8d8296] shadow-2xl shadow-[#986dc0] rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-2xl mb-5">Forgot Password</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="sam@gmail.com"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
            />
          </div>

          {loading ? (
            <Button className="w-full my-4">
              {' '}
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...{' '}
            </Button>
          ) : (
            <Link to="/otpinput">
              <Button
                className="text-lg w-full my-4 bg-[#6300b3] hover:border-2 hover:border-[#6300b3] hover:bg-transparent hover:text-[#6300b3]"
                type="submit"
              >
                Forgot Password
              </Button>
            </Link>
          )}

          {/* <div className="flex align-center justify-between">
            <span>
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 font-semibold">
                Sign Up
              </Link>
            </span>
            <Link to="/forgotpass" className="text-blue-600 font-semibold">
              Forgot Password?
            </Link>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
