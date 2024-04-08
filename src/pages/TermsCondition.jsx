import React, { useState } from "react";
import { Link } from "react-router-dom";
import noticeImg from "../assets/exclamation-mark.png";

const TermsCondition = ({ openModal }) => {
  const [agree, setAgree] = useState(false);

  const handleAgree = () => {
    if (agree) {
      // Execute the action (e.g., navigate to survey)
      openModal();
    } else {
      // Show error message or perform other actions when not agreed
      alert("Please agree to the terms and conditions");
    }
  };

  return (
    <div className="fixed  inset-0 z-50 flex justify-center items-center overflow-y-auto bg-black bg-opacity-50">
      <div className="relative mt-[240px] p-4 w-full max-w-xl">
        <div className="relative bg-white rounded-lg shadow p-6">
          <img src={noticeImg} alt="" className="h-20 mb-10 m-auto " />
          <h1 className="text-2xl font-bold text-gray-800 ">
            Terms & Conditions
          </h1>
          <div className="border-t border-gray-400 pt-6">
            <p className="text-gray-700 leading-relaxed">
              Greetings WMSU Students! Welcome to our survey on
              <strong className="font-semibold">
                "Understanding the Extracurricular Interests of WMSU Students
                alongside their Academic Endeavors."
              </strong>{" "}
              By participating, you agree to provide truthful and accurate
              responses voluntarily. Your participation is entirely voluntary,
              and you may withdraw from the survey at any time without
              consequence. Your decision will not affect your academic standing
              or rights as a student.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              <strong className="font-semibold">
                Privacy and Confidentiality:
              </strong>{" "}
              All information collected during this survey will be used solely
              for research purposes. Your responses will be anonymized, and
              individual identities will be kept confidential. Your privacy is
              of utmost importance to us.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              <strong className="font-semibold">Data Usage:</strong> The data
              collected will be analyzed to gain insights into the
              extracurricular interests of WMSU ESU students alongside their
              academic endeavors. Results may be shared in academic
              presentations, but no personally identifiable information will be
              disclosed.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              By clicking "Agree," you acknowledge that you have read and agree
              to abide by these terms and conditions.
            </p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <input
              onChange={(e) => setAgree(e.target.checked)}
              type="checkbox"
              className="cursor-pointer h-4 w-4 accent-blue-600 form-checkbox"
            />
            <label className="text-gray-700 ml-2">
              I agree to the terms and conditions
            </label>
          </div>
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={handleAgree}
              className={`${
                !agree ? "cursor-not-allowed opacity-50" : ""
              } bg-blue-500 rounded-lg text-white px-4 py-2 font-bold mt-4 block text-center`}
              disabled={!agree}
            >
              Agree
            </button>
            <Link
              to={"/dashboard"}
              className="bg-gray-300 p-2 rounded-lg text-black font-bold mt-4 block text-center"
            >
              Disagree
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
