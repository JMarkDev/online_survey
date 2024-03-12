import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Doughnut from "../components/Doughnut";
import LineChart from "../components/LineChart";
import api from "../api/api";
import ApexChart from "../components/BarChart";
import RadarChart from "../components/RadarChart";

const Dashboard = () => {
  const [surveyData, setSurveyData] = useState([]);
  const [responseCount, setResponseCount] = useState(0);
  const cardsData = [
    { title: "Total Responses", count: responseCount },
    { title: "Total Course", count: 5 },
    { title: "Total Questions", count: 10 },
  ];

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await api.get("/survey/all");
        setResponseCount(response.data.length);
        setSurveyData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResponse();
  }, []);

  return (
    <>
      <div className="bg-gray-200 shadow-lg p-4 flex justify-between">
        <h1 className="text-2xl font-bold ml-10">Survey Dashboard</h1>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 flex items-center rounded-lg"
          to={"/survey"}
        >
          Survey Form
        </Link>
      </div>
      <div className="max-w-5xl m-auto ">
        <div className="grid md:grid-cols-3 gap-10 mt-5 px-20">
          {cardsData.map((card, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <h1 className="text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h1>
              <h1 className="text-3xl font-bold text-blue-500">{card.count}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mt-10 m-auto">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h1 className="text-lg font-semibold text-gray-800 mb-2">
            Survey Responses
          </h1>
          <LineChart />
        </div>
      </div>
      <div className="max-w-5xl mt-10 m-auto">
        <div className="bg-white rounded-lg shadow-md">
          <h1 className="text-lg p-6 font-semibold text-gray-800 mb-2">
            Primary career goal upon completing education
          </h1>
          <Doughnut surveyData={surveyData} data={surveyData} />
        </div>
      </div>
      <div className="max-w-5xl mt-10 m-auto">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h1 className="text-lg font-semibold text-gray-800 mb-2">
            Industry or field are most interested in pursuing a career
          </h1>
          <ApexChart />
        </div>
      </div>
      <div className="max-w-5xl mt-10 m-auto">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h1 className="text-lg font-semibold text-gray-800 mb-2">
            Most important factors when considering a career
          </h1>
          <RadarChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
