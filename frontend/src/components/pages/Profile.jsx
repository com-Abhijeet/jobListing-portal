import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "../ui/badge";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {  Contact, Mail, Pen } from "lucide-react";
import { Label } from "@radix-ui/react-dropdown-menu";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfile from "./UpdateProfile";

const skills = ["html", "css", "javascript", "react"];
const isResume = true;

const Profile = () => {
  const [open,setOpen] = useState(false);
 
  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="data:image/jpeg;base64,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" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quasi.
              </p>
            </div>
          </div>
          <Button onClick={()=>(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>Komal@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>8010176702</span>
          </div>
        </div>
        <div className="my-5">
      <h1>Skills</h1>
      <div className="flex items-center gap-1">
        {skills.map((item, index) => (
          <Badge key={index}>{item}</Badge>
        ))}
      </div>
    </div>
        <div className="grid w-full max-w-5m items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              href="https:youtube.com"
              className="text-blue-500 w-full hover:underline cursor-pointer"
              target="blank"
            >
              You Tube
            </a>
          ) : (
            <span>Not Applicable</span>
          )}
        </div>
        
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-5">All Applied Jobs</h1>
        <AppliedJobTable></AppliedJobTable>
        </div>
        <UpdateProfile open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Profile;
