import React, { useEffect, useState } from 'react';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useGetAllJobs();

  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate('/admin/companies');
      // navigate('/recruiter/dashboard');
    }
  }, []);

  return (
    <>
      <div>
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
      </div>
    </>
  );
};

export default Home;
