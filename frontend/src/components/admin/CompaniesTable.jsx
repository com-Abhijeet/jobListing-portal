import React from 'react';
import { Table, TableCaption, TableCell, TableRow } from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2 } from 'lucide-react';

const CompaniesTable = () => {
  return (
    <>
      <div>
        <Table>
          <TableCaption>
            A List of your recent registered companies
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Logo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableCell>
              <Avatar>
                <AvatarImage src="https://media.istockphoto.com/id/952019778/vector/momentum-symbol.jpg?s=612x612&w=is&k=20&c=UcuBjwrgHH1fS8_au4fB_WCS2IQ-PUKQcO5Wbuj03n8=" />
              </Avatar>
            </TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>18/04/2024</TableCell>
            <TableCell className="text-right cursor-pointer">
              <Popover>
                <PopoverTrigger>
                  <PopoverContent className="w-32">
                    <div className="flex items-center gap-2 w-fit cursor-pointer">
                      <Edit2 className="w-4" />
                      <span>Edit</span>
                    </div>
                  </PopoverContent>
                </PopoverTrigger>
              </Popover>
            </TableCell>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default CompaniesTable;
