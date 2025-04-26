import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-20 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Privacy Policy</h2>
        <p className="text-center text-gray-500 mb-10 text-base">
          This section pertains to the Privacy Policy of <strong>BookMate</strong>. We would like to inform you that our privacy policy is subject to change without prior intimation and you shall be required to review it regularly.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          The protection and security of your personal information is one of BookMate'S top priorities...
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          By accessing or using this website, you expressly consent to our use and disclosure...
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>“Personal Information”</strong> refers to any information that identifies or can be used to identify...
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-t pt-6">
          PLEASE READ THE FOLLOWING TERMS OF OUR PRIVACY POLICY
        </h3>

        <h4 className="text-xl font-semibold text-gray-700 mb-4">
          PERSONAL INFORMATION COLLECTED
        </h4>

        <p className="text-gray-700 leading-relaxed mb-6">
          By accepting this privacy policy, you authorize <strong>BookMate</strong> to collect...
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>All information entered by you such as your name, address...</li>
          <li>Information collected via cookies installed on your device.</li>
          <li>Details like your IP address, browser type, etc.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
