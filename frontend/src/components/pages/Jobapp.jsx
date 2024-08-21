import React, { useState } from "react";
import Select from "react-select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { APPLICATION_API_END_POINT} from "@/utils/constant";
import { toast } from "sonner";
import axios from "axios";

// Your predefined options
const options = [
  /*...*/
];
const job_role = [
  /*...*/
];
const job_type = [
  /*...*/
];
const _experience = [
  /*...*/
];
const _vaccancies = [
  /*...*/
];
const job_level = [
  /*...*/
];
const _country = [
  /*...*/
];
const _city = [
  /*...*/
];

const Jobapp = () => {
  const [input, setInput] = useState({
    jobTitle: '',
    minSalary: '',
    maxSalary: '',
    jobDescription: '',
    role: '',
    skills: [],
    jobRole: null,
    jobType: null,
    experience: null,
    vacancies: null,
    jobLevel: null,
    country: null,
    city: null,
    file: null,
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectChangeHandler = (name, selectedOption) => {
    setInput((prev) => ({
      ...prev,
      [name]: selectedOption,
    }));
  };

  const changeFileHandler = (e) => {
    setInput((prev) => ({
      ...prev,
      file: e.target.files?.[0] || null,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Create a FormData object
    const formData = new FormData();

    try {
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto">
      <form
        onSubmit={submitHandler}
        className="w-1/2 border border-[#8d8296] shadow-2xl shadow-[#986dc0] rounded-md p-4 my-10"
      >
        <h1 className="font-bold text-4xl mb-5">
          <u>Post a New Job</u>
        </h1>
        <h1 className="mt-0">Find the best talent for your company</h1>

        <div>
          <Label>Job Title</Label>
          <Input
            type="text"
            placeholder="Front End Developer"
            value={input.jobTitle}
            name="jobTitle"
            onChange={changeEventHandler}
          />
        </div>

        <div>
          <h1 className="text-sm font-bold">Skills</h1>
          <Select
            options={options}
            value={input.skills}
            onChange={(selectedOption) =>
              selectChangeHandler('skills', selectedOption)
            }
            name="skills"
            isMulti={true}
          />
        </div>

        <div className="mt-4">
          <h1 className="text-sm font-bold">Job Role</h1>
          <Select
            options={job_role}
            value={input.jobRole}
            name="jobRole"
            onChange={(selectedOption) =>
              selectChangeHandler('jobRole', selectedOption)
            }
          />
        </div>

        <div className="my-2 mt-4">
          <h1 className="text-xl font-bold mb-2">*Salary</h1>
          <Label>Min Salary</Label>
          <Input
            type="number"
            placeholder="INR"
            value={input.minSalary}
            name="minSalary"
            onChange={changeEventHandler}
          />
          <Label>Max Salary</Label>
          <Input
            type="number"
            placeholder="INR"
            value={input.maxSalary}
            name="maxSalary"
            onChange={changeEventHandler}
          />
        </div>

        <div className="mt-4">
          <h1 className="text-sm font-bold">Job Type</h1>
          <Select
            options={job_type}
            value={input.jobType}
            onChange={(selectedOption) =>
              selectChangeHandler('jobType', selectedOption)
            }
          />
        </div>
        <div className="mt-4">
          <h1 className="text-sm font-bold">Experience</h1>
          <Select
            options={_experience}
            value={input.experience}
            name="experience"
            onChange={(selectedOption) =>
              selectChangeHandler('experience', selectedOption)
            }
          />
        </div>
        <div className="mt-4">
          <h1 className="text-sm font-bold">Vacancies</h1>
          <Select
            options={_vaccancies}
            value={input.vacancies}
            name="vacancies"
            onChange={(selectedOption) =>
              selectChangeHandler('vacancies', selectedOption)
            }
          />
        </div>

        <div className="mt-4">
          <h1 className="text-sm font-bold">Job Level</h1>
          <Select
            options={job_level}
            value={input.jobLevel}
            onChange={(selectedOption) =>
              selectChangeHandler('jobLevel', selectedOption)
            }
          />
        </div>

        <div className="mt-4">
          <h1 className="text-xl font-bold">*Location</h1>
          <h1 className="text-sm mt-3 font-bold">Country</h1>
          <Select
            options={_country}
            value={input.country}
            onChange={(selectedOption) =>
              selectChangeHandler('country', selectedOption)
            }
          />
          <h1 className="text-sm mt-3 font-bold">City</h1>
          <Select
            options={_city}
            value={input.city}
            onChange={(selectedOption) =>
              selectChangeHandler('city', selectedOption)
            }
          />
        </div>

        <div className="my-2">
          <h1 className="text-xl font-bold mb-2">*Job Description</h1>
          <Textarea
            placeholder="Add your Description"
            rows="5"
            value={input.jobDescription}
            name="jobDescription"
            onChange={changeEventHandler}
          />
        </div>

        <div className="flex items-center justify-between">
          <RadioGroup className="flex items-center gap-4 my-5">
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="student"
                checked={input.role === 'student'}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label htmlFor="student">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role === 'recruiter'}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label htmlFor="recruiter">Recruiter</Label>
            </div>
          </RadioGroup>
          <div className="flex items-center gap-2">
            <Label>Resume</Label>
            <Input
              accept=".pdf,.doc,.docx"
              type="file"
              className="cursor-pointer"
              onChange={changeFileHandler}
            />
          </div>
        </div>
        <Button
          className="text-lg w-full my-4 bg-[#6300b3] hover:border-2 hover:border-[#6300b3] hover:bg-transparent hover:text-[#6300b3]"
          type="submit"
        >
          Post a Job
        </Button>
      </form>
    </div>
  );
};

export default Jobapp;
