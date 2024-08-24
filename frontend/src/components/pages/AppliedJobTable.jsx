import React from 'react';
import { useSelector } from 'react-redux';
import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Badge } from '../ui/badge';

const AppliedJobTable = () => {
  // Get applied jobs data from Redux store
  const appliedJobs = useSelector((store) => store.job.appliedJobs);

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
          {appliedJobs && appliedJobs.length > 0 ? (
            appliedJobs.map((job, index) => (
              <TableRow key={index}>
                <TableCell>{new Date(job.date).toLocaleDateString()}</TableCell>
                <TableCell>{job.role}</TableCell>
                <TableCell>{job.company}</TableCell>
                <TableCell className="text-right">
                  <Badge>{job.status}</Badge>
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
