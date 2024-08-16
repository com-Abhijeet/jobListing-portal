import React, { useState } from 'react';

import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Bookmark } from 'lucide-react';
import { Input } from '../ui/input';

const searchJob = [1, 2, 3, 4, 5, 6];

const JobSearch = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-8">
        <div className="mx-auto max-w-7xl my-10">
          <h1 className="text-xl sm:text-4xl font-bold">
            Job Search ({searchJob.length})
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 mt-2 font-semibold">
            Search For your desired job matching skills
          </p>
          <div className="flex align-center justify-center max-w-4xl mt-10">
            <Input className="border-l" />
            <Button className="bg-[#6300b3] py-2">Search Job</Button>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-16">
            {searchJob.map((item, index) => {
              return (
                <div className="p-5 rounded-md border-[#8d8296] shadow-2xl bg-white shadow-[#986dc0]">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">2 days ago</p>
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
                        <AvatarImage src="https://media.istockphoto.com/id/952019778/vector/momentum-symbol.jpg?s=612x612&w=is&k=20&c=UcuBjwrgHH1fS8_au4fB_WCS2IQ-PUKQcO5Wbuj03n8=" />
                      </Avatar>
                    </Button>
                    <div>
                      <h1 className="font-medium text-lg">Comapny Name</h1>
                      <p className="text-sm text-gray-500">India</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-lg my-2">Title</h1>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tenetur, totam.
                    </p>
                  </div>
                  <div>
                    <Badge
                      className={'text-blue-700 font-bold'}
                      variant="ghost"
                    >
                      12 Positions
                    </Badge>
                    <Badge
                      className={'text-[#02f854] font-bold'}
                      variant="ghost"
                    >
                      Part Time
                    </Badge>
                    <Badge
                      className={'text-[#7209b7] font-bold'}
                      variant="ghost"
                    >
                      24LPA
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <Button
                      className="border-2 border-[#6300b3]"
                      variant="outline"
                    >
                      Details
                    </Button>
                    <Button className="bg-[#6300b3]" variant="">
                      Save For Later
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSearch;
