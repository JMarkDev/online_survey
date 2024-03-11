import React from "react";
import Doughnut from "../components/Doughnut";
import LineChart from "../components/LineChart";

const Dashboard = () => {
  const cardsData = [
    { title: "Total Responses", count: 100 },
    { title: "Total Course", count: 100 },
    { title: "Total Questions", count: 100 },
  ];

  return (
    <>
      <div className="bg-gray-200 shadow-lg p-4">
        <h1 className="text-2xl font-bold ml-10">Survey Dashboard</h1>
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
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h1 className="text-lg font-semibold text-gray-800 mb-2">
            Survey Responses
          </h1>
          <Doughnut />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
