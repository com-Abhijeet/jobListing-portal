import React, { useState } from 'react';

const OfferLetter = ({ candidateName, position, startDate, salary, location, companyName, offerDate, dueDate }) => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
    // Add any further logic for accepting the offer, such as sending a request to an API.
  };

  if (isAccepted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="max-w-2xl bg-white shadow-md rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Thank You, {candidateName}!</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            You have successfully accepted the offer for the position of {position} at {companyName}. We look forward to having you on our team!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl bg-white shadow-md rounded-lg p-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Offer Letter</h1>
          <p className="text-sm text-gray-600 mt-2">Date: {offerDate}</p>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Dear {candidateName},</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We are pleased to offer you the position of <span className="font-medium">{position}</span> at <span className="font-medium">{companyName}</span>. Your skills and experience will be an ideal fit for our development team.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Offer Details</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <span className="font-medium text-gray-700 w-40">Position:</span>
              <span className="text-gray-800">{position}</span>
            </li>
            <li className="flex items-center">
              <span className="font-medium text-gray-700 w-40">Start Date:</span>
              <span className="text-gray-800">{startDate}</span>
            </li>
            <li className="flex items-center">
              <span className="font-medium text-gray-700 w-40">Salary:</span>
              <span className="text-gray-800">${salary} per annum</span>
            </li>
            <li className="flex items-center">
              <span className="font-medium text-gray-700 w-40">Location:</span>
              <span className="text-gray-800">{location}</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">Next Steps</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Please review the terms of this offer and confirm your acceptance by signing and returning this letter by {dueDate}.
          </p>
        </section>

        <footer className="text-center">
          <button
            onClick={handleAccept}
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700"
          >
            Accept Offer
          </button>
        </footer>
      </div>
    </div>
  );
};

export default OfferLetter;