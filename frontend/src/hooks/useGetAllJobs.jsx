import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

const useGetAllJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllJobs = async () => {
      try {
        const token = Cookies.get('token'); // Retrieve token from local storage
        if (!token) {
          throw new Error('No token found');
        }

        const res = await axios.get(`${JOB_API_END_POINT}/get`, {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${token}`, // Set Authorization header
          },
        });

        if (res.status === 200) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllJobs();
  }, [dispatch]); // Add dispatch to dependency array
};

export default useGetAllJobs;