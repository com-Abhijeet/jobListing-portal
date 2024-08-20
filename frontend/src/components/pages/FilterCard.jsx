import React from 'react';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import './FilterCard.css'; // Import the CSS file

const filterData = [
  {
    filterType: 'Location',
    array: ['Delhi NCR', 'Bangalore', 'Hyderabad', 'Pune', 'Mumbai'],
  },
  {
    filterType: 'Industry',
    array: ['IT Industry', 'Manufactaral Industries', 'Electrical', 'Services'],
  },
  {
    filterType: 'Salary',
    array: ['0-40k', '42k-1 Lakh', '1 Lakh to 5 Lakh'],
  },
  {
    filterType:"Job Role",
    array:['Frontend Developer','Backend Developer','Fullstack Devloper','Python Developer']
  },
  {
    filterType:"Job Type",
    array:['Full Time','Part Time','Internship','Contractual']
  }
];

const FilterCard = () => {
  return (
    <div className="filter-card">
      <h1 className="text-2xl">Filter Jobs</h1>
      <hr className="mt-3" />
      {filterData.map((data, index) => (
        <div key={index} className="filter-group">
          <h2 className="font-bold text-lg">{data.filterType}</h2>
          <RadioGroup className="mt-2">
            {data.array.map((item, index) => (
              <div className="flex items-center space-x-2 my-2" key={index}>
                <RadioGroupItem value={item} id={`radio-${item}`} className="radio-button" />
                <label htmlFor={`radio-${item}`} className="radio-label">{item}</label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
