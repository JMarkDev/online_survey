import React, { useState, useEffect } from "react";
import api from "../api/api";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [surveyData, setSurveyData] = useState([]);
  const [series, setSeries] = useState([]);

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

  useEffect(() => {
    const calculateSeries = () => {
      const questionId = "question3";
      const answerTexts = [
        "Salary and benefits",
        "Opportunities for advancement",
        "Work-life balance",
        "Job security",
        "Impact and purpose",
        "Flexibility and autonomy",
        "Company culture",
        "Location",
        "Learning and growth opportunities",
        "Job satisfaction",
        "Social responsibility of the organization",
      ];

      const newSeries = answerTexts.map((answerText) =>
        calculateTotalOccurrences(questionId, answerText)
      );

      setSeries(newSeries);
    };

    calculateSeries();
  }, [surveyData]);

  const calculateTotalOccurrences = (questionId, answerText) => {
    let totalOccurrences = 0;
    surveyData.forEach((entry) => {
      if (entry.answers[questionId]?.answer_text === answerText) {
        totalOccurrences++;
      }
    });
    return totalOccurrences;
  };

  const chartData = {
    series: [{ name: "Series 1", data: series }],
    options: {
      chart: {
        height: 350,
        type: "radar",
      },

      //   title: {
      //     text: "Basic Radar Chart",
      //   },
      xaxis: {
        categories: [
          "Salary and benefits",
          "Opportunities for advancement",
          "Work-life balance",
          "Job security",
          "Impact and purpose",
          "Flexibility and autonomy",
          "Company culture",
          "Location",
          "Learning and growth opportunities",
          "Job satisfaction",
          "Social responsibility of the organization",
        ],
        labels: {
          style: {
            fontSize: "16px", // Adjust the font size here
          },
        },
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="radar"
          height={700}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
