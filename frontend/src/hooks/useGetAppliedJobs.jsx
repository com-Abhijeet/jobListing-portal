import { setAllAppliedJobs } from '@/redux/jobSlice';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAppliedJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const token = Cookies.get('token');

        if (!token) {
          console.error('No token found. Please log in.');
          return;
        }

        const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Request URL:', `${APPLICATION_API_END_POINT}/get`);
        console.log('Response Data:', res.data);

        if (res.status === 200) {
          if (res.data && res.data.application) {
            dispatch(setAllAppliedJobs(res.data.application));
          } else {
            console.error('Unexpected response structure:', res.data);
          }
        } else {
          console.error('Request failed with status code:', res.status);
        }
      } catch (error) {
        console.error('Error fetching applied jobs:', error);

        if (error.response) {
          if (error.response.status === 404) {
            console.error('API Endpoint not found. Please check the API URL.');
          } else if (error.response.status === 401) {
            console.error('Unauthorized. Please check your token.');
          } else {
            console.error('Error response status:', error.response.status);
            console.error('Error response data:', error.response.data);
          }
        } else {
          console.error('An unexpected error occurred:', error.message);
        }
      }
    };

    fetchAppliedJobs();
  }, [dispatch]);
};

export default useGetAppliedJobs;
