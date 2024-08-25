import React, { useState, useEffect } from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Label } from '../ui/label';
import AppliedJobTable from './AppliedJobTable';
import { useDispatch, useSelector } from 'react-redux';
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';
import { Link } from 'react-router-dom';
import UpdateProfile from './UpdateProfile';
import { fetchAppliedJobs } from '@/redux/jobSlice';

const Profile = () => {
  useGetAppliedJobs();
  const { user } = useSelector((store) => store.auth);
  const [profileData, setProfileData] = useState(user || {});
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setProfileData(user|| {});
  }, [user]);

  const handleProfileUpdate = (updatedProfile) => {
    setProfileData(updatedProfile);
  };

  const extractFileName = (url) => {
    const fullFileName = url.substring(url.lastIndexOf('/') + 1);
    return decodeURIComponent(fullFileName.split('?')[0]);
  };

  // console.log(profileData);

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.profilePicture} alt="profile" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullName}</h1>
              <p>{user?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.contact}</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {profileData?.skills?.length ? (
              profileData.skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {profileData?.resume ? (
            <Link
              to={profileData.resume}
              target="_blank"
              className="text-blue-600 w-full hover:underline cursor-pointer"
            >
              {extractFileName(profileData.resume)}
            </Link>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
      <UpdateProfile
        open={open}
        setOpen={setOpen}
        onProfileUpdate={handleProfileUpdate}
      />
    </div>
  );
};

export default Profile;
