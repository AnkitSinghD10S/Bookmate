import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start bg-gray-100 py-24 px-5 font-poppins text-gray-800 text-sm">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-12 mb-16">
        <h2 className="text-4xl font-semibold text-center mb-2 text-gray-900">Privacy Policy</h2>
        <p className="text-center text-gray-500 text-base mb-10">
          This section pertains to the Privacy Policy of <strong>BookMate</strong>. We would like to inform you that our privacy policy is subject to change without prior intimation and you shall be required to review it regularly.
        </p>
        <p className="leading-relaxed text-gray-700 mb-4">
          The protection and security of your personal information is one of BookMate'S top priorities...
        </p>
        <p className="leading-relaxed text-gray-700 mb-4">
          By accessing or using this website, you expressly consent to our use and disclosure...
        </p>
        <p className="leading-relaxed text-gray-700 mb-4">
          <strong>“Personal Information”</strong> refers to any information that identifies or can be used to identify...
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-10 mb-2 pt-8 border-t border-gray-200">
          PLEASE READ THE FOLLOWING TERMS OF OUR PRIVACY POLICY
        </h3>

        <h4 className="text-lg font-semibold text-gray-800 mt-10 mb-2 pt-8 border-t border-gray-200">
          PERSONAL INFORMATION COLLECTED
        </h4>

        <p className="leading-relaxed text-gray-700 mb-4">
          By accepting this privacy policy, you authorize <strong>BookMate</strong> to collect...
        </p>

        <ul className="list-disc pl-5 mb-4 text-gray-700">
          <li className="mb-2">All information entered by you such as your name, address...</li>
          <li className="mb-2">Information collected via cookies installed on your device.</li>
          <li className="mb-2">Details like your IP address, browser type, etc.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
