import { Badge } from "../ui/badge";
import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "jobid"
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage
              src="https://via.placeholder.com/150"
              alt="Company Logo"
            />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
          molestias in, repellat sit id qui!
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="bg-blue-100 text-blue-700 font-bold">
          12 Positions
        </Badge>
        <Badge className="bg-red-100 text-red-700 font-bold">
          Part Time
        </Badge>
        <Badge className="bg-purple-100 text-purple-700 font-bold">
          24 Lpa
        </Badge>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Button onClick={()=>navigate('/description/${jobId}')} variant="outline">Details</Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
