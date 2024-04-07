import React from "react";
import { Link } from "react-router-dom";

const TermsCondition = () => {
  const handleAcknowledge = () => {
    // Implement acknowledgment logic here (e.g., mark terms as acknowledged)
    console.log("Terms acknowledged!");
  };

  return (
    <div className="max-w-xl bg-gray-200 m-auto mt-8 rounded-lg p-6 shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Terms & Conditions
      </h1>
      <div className="text-gray-700 mb-4">
        <p>
          Thank you for participating in this career survey! This survey is
          designed to gather information about your career goals, interests, and
          aspirations. By participating, you agree to the following terms and
          conditions.
        </p>
        <p className="mt-4">
          Participation in this survey is voluntary. You have the right to skip
          any question you do not feel comfortable answering or withdraw from
          the survey at any time.
        </p>
      </div>

      <div className="border-t border-gray-400 pt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Privacy and Confidentiality
        </h2>
        <p className="text-gray-700">
          We respect your privacy. All responses to this survey will be kept
          confidential. Your individual answers will not be shared with any
          third party and will only be used for statistical analysis of the
          overall data.
        </p>
      </div>

      <div className="border-t border-gray-400 pt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Data Usage</h2>
        <p className="text-gray-700">
          The anonymized data collected from this survey may be used for
          research purposes or to improve career resources.
        </p>
      </div>

      <div className="mt-4 text-gray-700">
        <p>
          By clicking "Acknowledge," you acknowledge that you have read and
          understood these terms and conditions.
        </p>
      </div>
      <div className="mt-8 flex justify-end">
        <Link
          to={"/survey"}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300 ease-in-out"
        >
          Acknowledge
        </Link>
      </div>
    </div>
  );
};

export default TermsCondition;
