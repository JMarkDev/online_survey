import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import api from "../api/api";

const BarChart = () => {
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
    // Calculate series only when surveyData changes
    const calculateSeries = () => {
      const questionId = "question2";
      const answerTexts = [
        "Technology",
        "Healthcare",
        "Finance",
        "Education",
        "Arts and Entertainment",
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
    series: [{ data: series }],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      colors: ["#008FFB", "#00E396", "#333A73", "#FF4560", "#775DD0"],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["Technology"],
          ["Healthcare"],
          ["Finance"],
          "Education",
          ["Arts and Entertainment"],
        ],
        labels: {
          style: {
            colors: ["#008FFB", "#00E396", "#333A73", "#FF4560", "#775DD0"],
            fontSize: "12px",
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
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarChart;
