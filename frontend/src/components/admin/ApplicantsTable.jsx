import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Button } from '../ui/button';
import { APPLICATION_API_END_POINT } from '@/utils/constant';

const shortlistingStatus = ['Accepted', 'Rejected'];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);
  const [applicantsData, setApplicantsData] = useState(applicants);

  useEffect(() => {
    setApplicantsData(applicants);
  }, [applicants]);

  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.put(
        `${APPLICATION_API_END_POINT}/status/update/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        setApplicantsData((prev) =>
          prev.map((applicant) =>
            applicant._id === id ? { ...applicant, status } : applicant
          )
        );
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update status');
    }
  };

  const sendOfferLetter = async (id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/send-offer-letter/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }
      );
      if (res.status === 200) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Failed to send offer letter'
      );
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
            <TableHead className="text-right">Offer Letter</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicantsData &&
            applicantsData.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item?.applicant?.fullName}</TableCell>
                <TableCell>{item?.applicant?.email}</TableCell>
                <TableCell>{item?.applicant?.contact}</TableCell>
                <TableCell>
                  {item.applicant?.resume ? (
                    <a
                      className="text-blue-600 cursor-pointer"
                      href={item?.applicant?.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Download Resume
                    </a>
                  ) : (
                    <span>NA</span>
                  )}
                </TableCell>
                <TableCell>{item?.applicationDate.split('T')[0]}</TableCell>
                <TableCell
                  style={{
                    backgroundColor:
                      item?.status === 'Accepted' ? 'green' : 'red',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  {item?.status === 'Accepted' ? 'Accepted' : 'Rejected'}
                </TableCell>
                <TableCell className="float-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      {shortlistingStatus.map((status, index) => (
                        <div
                          onClick={() => statusHandler(status, item?._id)}
                          key={index}
                          className="flex w-fit items-center my-2 cursor-pointer"
                        >
                          <span>{status}</span>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
                <TableCell className="text-right">
                  {item.status === 'Accepted' && (
                    <Button
                      className="bg-[#6A38C2]"
                      onClick={() => sendOfferLetter(item._id)}
                    >
                      Send Offer Letter
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
