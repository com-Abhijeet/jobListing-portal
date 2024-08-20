import React, { useContext } from 'react';
import { RecoveryContext } from './../../App';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Reset = () => {
  const { setPage } = useContext(RecoveryContext);

  function changePassword() {
    setPage('recovered');
  }

  return (
    <>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form className="w-1/2 border border-[#8d8296] shadow-2xl shadow-[#986dc0] rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5">Change Password</h1>
          <div className="my-2">
            <Label>New Password</Label>
            <Input
              type="password"
              id="newPassword"
              placeholder="*********"
              value=""
              name="newPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="my-2">
            <Label>Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="*********"
              value=""
              name="confirmPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex items-start mt-5">
            <div className="flex items-center h-5">
              <Input
                id="newsletter"
                aria-describedby="newsletter"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              ></Input>
            </div>
            <div className="ml-3 text-md">
              <Label
                htmlFor="newsletter"
                className="font-light text-gray-800 dark:text-gray-300"
              >
                I accept the{' '}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </Label>
            </div>
          </div>
          <Link to="/recovered">
            <Button
              onClick={() => changePassword()}
              className="w-full mt-5 mb-5 text-white bg-[#6300b3] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset passwod
            </Button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Reset;
