import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux store state
import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Badge } from '../ui/badge';
import { setAllAppliedJobs } from '@/redux/jobSlice';
import store from './../../redux/store';

const AppliedJobTable = () => {
  // Get applied jobs data from Redux store
  // const { user } = useSelector((store) => store.auth);
  const appliedJobs = useSelector((store) => store.job.allAppliedJobs); // Adjust according to your state structure
  console.log("appliedJobs", appliedJobs)

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div>
      <table className="min-w-full bg-white border">
        <TableCaption>A list of your Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appliedJobs.length > 0 ? (
            appliedJobs.map((job, index) => (
              <TableRow key={index}>
                <TableCell>{formatDate(job.applicationDate)}</TableCell>
                <TableCell>{job.job.jobTitle}</TableCell>
                <TableCell>{job.company.companyName}</TableCell>
                <TableCell className="text-right">
                  <Badge >{job.status}</Badge>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="4" className="text-center">
                No applied jobs found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </table>
    </div>
  );
};

export default AppliedJobTable;
