import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Bookmark } from 'lucide-react';
import { Input } from '../ui/input';
import { useSelector } from 'react-redux';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const JobSearch = () => {
  useGetAllJobs(); // Fetch jobs when the component mounts

  const daysAgoFun = (mongodvTime) => {
    const createdAt = new Date(mongodvTime);
    const now = new Date();
    const timeDiff = now - createdAt;
    return Math.floor(timeDiff / (1000 * 24 * 60 * 60));
  };

  const { allJobs } = useSelector((store) => store.job);

  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setJobs(allJobs); // Update jobs state when allJobs changes
  }, [allJobs]);

  const handleSearch = () => {
    const filteredJobs = allJobs.filter(
      (job) =>
        job.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.companyId?.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setJobs(filteredJobs);
  };
  
  // Trigger search whenever searchTerm changes
  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-8">
      <div className="mx-auto max-w-7xl my-10">
        <h1 className="text-xl sm:text-4xl font-bold">
          Job Search ({jobs.length})
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 mt-2 font-semibold">
          Search For your desired job matching skills
        </p>
        <div className="flex align-center justify-center max-w-4xl mt-10">
          <Input
            className="border-l"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title, company, or location"
          />
          <Button className="bg-[#6300b3] py-2" onClick={handleSearch}>
            Search Job
          </Button>
        </div>
        {jobs.length <= 0 ? (
          <span>Job Not Found</span>
        ) : (
          <div className="grid grid-cols-3 gap-4 mt-16">
            {jobs.map((job) => (
              <div
                key={job?._id}
                className="p-5 rounded-md border-[#8d8296] shadow-2xl bg-white shadow-[#986dc0]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    {daysAgoFun(job?.createdAt) === 0
                      ? 'Today'
                      : `${daysAgoFun(job?.createdAt)}`}{' '}
                    days ago
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full"
                    size="icon"
                  >
                    <Bookmark />
                  </Button>
                </div>

                <div className="flex items-center gap-2 my-2">
                  <Button className="bg-transparent" variant="outline">
                    <Avatar>
                      <AvatarImage src={job?.companyId?.logo} />
                    </Avatar>
                  </Button>
                  <div>
                    <h1 className="font-medium text-lg">{job?.companyId.companyName}</h1>
                    <p className="text-sm text-gray-500">{job?.location}</p>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-lg my-2">{job?.jobTitle}</h1>
                  <p className="text-sm text-gray-600 mb-3">
                    {job?.description}
                  </p>
                </div>
                <div>
                  <Badge className="text-blue-700 font-bold" variant="ghost">
                    {job?.vacancies} Positions
                  </Badge>
                  <Badge className="text-[#02f854] font-bold" variant="ghost">
                    {job?.experience}
                  </Badge>
                  <Badge className="text-[#7209b7] font-bold" variant="ghost">
                    {job.salary}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Button
                    className="border-2 border-[#6300b3]"
                    variant="outline"
                    onClick={()=> navigate(`/description/${job._id}`)}
                  >
                    Details
                  </Button>
                  <Button className="bg-[#6300b3]" variant="">
                    Save For Later
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobSearch;