import React, { useContext, useEffect, useState } from 'react';
import { RecoveryContext } from './../../App';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const OtpInput = () => {
  const { email, otp, setPage } = useContext(RecoveryContext);
  const [timerCount, setTimer] = useState(60);
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  const [disable, setDisable] = useState(true);

  const { loading, user } = useSelector((store) => store.auth);

  function resendOTP() {
    if (disable) return;
    axios
      .post('http://localhost:5000/send_recovery_email', {
        OTP: otp,
        recipient_email: email,
      })
      .then(() => setDisable(true))
      .then(() => alert('A new OTP has succesfully been sent to your email.'))
      .then(() => setTimer(60))
      .catch(console.log);
  }

  function verfiyOTP() {
    if (parseInt(OTPinput.join('')) === otp) {
      setPage('reset');
      return;
    }
    alert(
      'The code you have entered is not correct, try again or re-send the link'
    );
    return;
  }

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, [disable]);

  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto">
      <form className="w-1/2 border border-[#8d8296] shadow-2xl shadow-[#986dc0] rounded-md p-4 my-10">
        <h1 className="font-bold text-2xl mb-5">Email Verification</h1>
        <div className="flex flex-row text-sm font-medium text-gray-400">
          <p>We have sent a code to your email {email}</p>
        </div>
        <div className="flex flex-col space-y-16 mt-10 mb-10">
          <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
            <div className="w-16 h-16">
              <Input
                maxLength="1"
                type="text"
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#6300b3]"
                placeholder=""
                name=""
                id=""
                onChange={(e) =>
                  setOTPinput([
                    e.target.value,
                    OTPinput[1],
                    OTPinput[2],
                    OTPinput[3],
                  ])
                }
              />
            </div>
            <div className="w-16 h-16">
              <Input
                maxLength="1"
                type="text"
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#6300b3]"
                placeholder=""
                name=""
                id=""
                onChange={(e) =>
                  setOTPinput([
                    e.target.value,
                    OTPinput[1],
                    OTPinput[2],
                    OTPinput[3],
                  ])
                }
              />
            </div>
            <div className="w-16 h-16">
              <Input
                maxLength="1"
                type="text"
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#6300b3]"
                placeholder=""
                name=""
                id=""
                onChange={(e) =>
                  setOTPinput([
                    e.target.value,
                    OTPinput[1],
                    OTPinput[2],
                    OTPinput[3],
                  ])
                }
              />
            </div>
            <div className="w-16 h-16">
              <Input
                maxLength="1"
                type="text"
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#6300b3]"
                placeholder=""
                name=""
                id=""
                onChange={(e) =>
                  setOTPinput([
                    e.target.value,
                    OTPinput[1],
                    OTPinput[2],
                    OTPinput[3],
                  ])
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div>
            <a
              onClick={() => verfiyOTP()}
              className="flex flex-row cursor-pointer items-center justify-center text-center w-full border rounded-xl outline-none py-2 bg-[#6300b3] border-none text-white text-xl shadow-sm"
            >
              Verify Account
            </a>
          </div>
          <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
            <p>Didn't recieve code?</p>{' '}
            <a
              className="flex flex-row items-center"
              style={{
                color: disable ? 'gray' : 'blue',
                cursor: disable ? 'none' : 'pointer',
                textDecorationLine: disable ? 'none' : 'underline',
              }}
              onClick={() => resendOTP()}
            >
              {disable ? `Resend OTP in ${timerCount}s` : 'Resend OTP'}
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OtpInput;
