import React, { useEffect, useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '@/components/ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    role: '',
  });
  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!input.email || !input.password || !input.role) {
      toast.error('Please fill all fields and select a role.');
      return;
    }

    try {
      dispatch(setLoading(true));
      console.log('Sending login request:', input); // Log the input data
      const res = await axios.post(
        `https://joblisting-portal.onrender.com/api/v1/user/login`,
        input,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        dispatch(setUser(res.data.user));
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error('Login error:', error); // Log the full error
      toast.error(error.response?.data?.message || 'Internal Server Error');
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/'); // Redirect to home if user is already logged in
    }
  }, [user, navigate]);

  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto">
      <form
        onSubmit={submitHandler}
        className="w-1/2 border border-[#8d8296] shadow-2xl shadow-[#986dc0] rounded-md p-4 my-10"
      >
        <h1 className="font-bold text-xl mb-5">Login</h1>
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
        <div className="my-2">
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="*******"
            value={input.password}
            name="password"
            onChange={changeEventHandler}
          />
        </div>
        <div className="flex items-center justify-between">
          <RadioGroup className="flex items-center gap-4 my-5">
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="student"
                checked={input.role === 'student'}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label htmlFor="r1">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role === 'recruiter'}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label htmlFor="r2">Recruiter</Label>
            </div>
          </RadioGroup>
        </div>
        {loading ? (
          <Button className="w-full my-4">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...
          </Button>
        ) : (
          <Button
            className="text-lg w-full my-4 bg-[#6300b3] hover:border-2 hover:border-[#6300b3] hover:bg-transparent hover:text-[#6300b3]"
            type="submit"
          >
            Login
          </Button>
        )}

        <div className="flex align-center justify-between">
          <span>
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 font-semibold">
              Sign Up
            </Link>
          </span>
          <Link to="/forgotpass" className="text-blue-600 font-semibold">
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
