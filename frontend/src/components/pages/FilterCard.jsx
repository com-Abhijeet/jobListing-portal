import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
  {
    filterType: 'Location',
    options: [
      'Delhi NCR',
      'Banglore',
      'Hyderabad',
      'Pune',
      'Mumbai',
      'Ahmedabad',
    ],
  },
];

const FilterCard = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    Location: '',
    Industry: '',
    Salary: '',
  });

  const dispatch = useDispatch();

  const changeHandler = (filterType, value) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterType]: value,
    }));
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedFilters));
  }, [selectedFilters, dispatch]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      {filterData.map((data, index) => (
        <div key={index} className="flex flex-col">
          <h1 className="font-bold text-md mt-2 mb-2">{data.filterType}</h1>
          <RadioGroup
            value={selectedFilters[data.filterType]}
            onValueChange={(value) => changeHandler(data.filterType, value)}
          >
            {data.options.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div className="flex items-center space-x-2 my-2" key={itemId}>
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
