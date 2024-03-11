import React, { useEffect, useState } from "react";
import "../../src/App.css";
import questions from "../questions/question.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Survey = () => {
  const [values, setValues] = useState({
    fullname: "",
    course: "",
    gender: "",
    questions: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Survey submitted successfully");
  };

  return (
    <div className="m-5">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition: Bounce
      />
      <ToastContainer />
      <div className="container bg-gray-200 max-w-2xl my-5 m-auto">
        <header className="bg-gray-800 text-white py-6 px-4 rounded-t-lg">
          <h1 className="text-lg md:text-3xl font-bold leading-tight">
            Understanding the Extracurricular Interests of WMSU Students
            alongside their Academic Endeavors.
          </h1>
        </header>

        <form action="#" className="px-5" onSubmit={handleSubmit}>
          <div className="respondents_info my-10">
            <h1 className="text-lg md:text-3xl font-bold text-left text-gray-800 mb-3">
              Please fill out personal details
            </h1>

            <div>
              <label
                htmlFor="name"
                className="block text-md font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Full Name"
                  className="block w-full border py-2 px-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                />
              </div>
            </div>
            <div className="name flex flex-col mt-2">
              <label
                htmlFor="course"
                className="block text-md font-medium text-gray-700"
              >
                Course
              </label>
              <div className="relative inline-block w-full">
                <select
                  name="course"
                  id="course"
                  className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow-md leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Course</option>
                  <option value="bs_computer_science">
                    Bachelor of Science in Computer Science
                  </option>
                  <option value="bs_elementary_education">
                    Bachelor of Science in Elementary Education
                  </option>
                  <option value="bs_social_work">
                    Bachelor of Science in Social Work
                  </option>
                  <option value="bs_political_science">
                    Bachelor of Science in Political Science
                  </option>
                  <option value="bs_criminology">
                    Bachelor of Science in Criminology
                  </option>
                  <option value="associate_computer_technology">
                    Associate in Computer Technology
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 7l5 5 5-5z" />
                  </svg>
                </div>
              </div>
              <div className="mt-2">
                <label
                  htmlFor="gender"
                  className="block text-md font-medium text-gray-700"
                >
                  Gender
                </label>
                <div className="flex items-start">
                  <label className="inline-flex items-center mt-2 mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      // checked={values.gender === "Male"}
                      // onChange={(e) =>
                      //   setValues({ ...values, gender: e.target.value })
                      // }
                      className="accent-blue-600 form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      // checked={values.gender === "Female"}
                      className="accent-blue-600 form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2">Female</span>
                  </label>
                  <label className="inline-flex items-center mt-2 ml-3">
                    <input
                      type="radio"
                      name="gender"
                      value="Non-Binary"
                      // checked={values.gender === "Non-Binary"}
                      className="accent-blue-600 form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2">Non-binary</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-lg md:text-3xl font-bold text-left text-gray-800 mb-3">
            Please answer the following questions:
          </h1>
          {questions.questions.map((question) => (
            <div className="question mb-6" key={question.id}>
              <label
                htmlFor={question.id}
                className="block text-lg font-semibold mb-2"
              >
                {question.question_text}
              </label>
              <div className="options">
                {question.choices.map((choice, choiceIndex) => (
                  <div className="flex items-center mb-2" key={choiceIndex}>
                    <input
                      type="radio"
                      id={`${question.id}-${choiceIndex}`}
                      name={question.id}
                      className="mr-2 cursor-pointer h-4 w-4 accent-blue-600 form-radio"
                    />
                    <label
                      htmlFor={`${question.id}-${choiceIndex}`}
                      className="cursor-pointer"
                    >
                      {choice}
                    </label>
                    {choice === "Other (please specify)" && (
                      <input
                        type="text"
                        className="ml-2 border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-blue-500"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="mb-5 btn bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Survey;
