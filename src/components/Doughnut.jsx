import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import api from "../api/api";

export default function ApexChart() {
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await api.get("/survey/all");
        setSurveyData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResponse();
  }, []);

  const calculateTotalOccurrences = (questionId, answerText) => {
    let totalOccurrences = 0;
    surveyData.forEach((entry) => {
      if (entry.answers[questionId]?.answer_text === answerText) {
        totalOccurrences++;
      }
    });
    return totalOccurrences;
  };

  // Example question ID and answer texts
  const questionId = "question1";
  const answerTexts = [
    "Pursue further education (e.g., graduate school)",
    "Secure a full-time job in my field of study",
    "Start my own business or freelance",
    "Undecided / Unsure",
  ];

  // Calculate total occurrences for each answer
  const series = answerTexts.map((answerText) =>
    calculateTotalOccurrences(questionId, answerText)
  );

  const options = {
    chart: {
      type: "donut",
    },
    labels: answerTexts,
  };

  return (
    <div id="chart">
      <Chart
        options={options}
        width={"100%"}
        series={series}
        type="donut"
        height={350}
      />
    </div>
  );
}
