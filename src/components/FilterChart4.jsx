import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import api from "../api/api";
import questions from "../questions/question.json";

const BarChart = ({ surveyData }) => {
  const [series, setSeries] = useState([]);

  // Function to calculate total occurrences of an answer text for a specific question
  const calculateTotalOccurrences = (questionId, answerText) => {
    // Initialize total occurrences count
    let totalOccurrences = 0;

    // Loop through surveyData to count occurrences
    surveyData.forEach((entry) => {
      // Check if the entry has an answer for the specified questionId and it matches the answerText
      if (
        entry.answers[questionId] &&
        entry.answers[questionId].includes(answerText)
      ) {
        // Increment totalOccurrences if the answer matches
        totalOccurrences++;
      }
    });

    return totalOccurrences;
  };

  useEffect(() => {
    // Calculate series only when surveyData changes
    const calculateSeries = () => {
      const question2 = questions.questions[3];
      const questionId = question2.id;
      const answerTexts = question2.choices;

      const newSeries = answerTexts.map((answerText) =>
        calculateTotalOccurrences(questionId, answerText)
      );

      setSeries(newSeries);
    };

    calculateSeries();
  }, [surveyData]);

  const colorList = [
    "#1C1678",
    "#00E396",
    "#FFD700",
    "#FF6384",
    "#36A2EB",
    "#FF00FF",
    "#6C0345",
    "#7CFC00",
    "#FF1493",
    "#9400D3",
  ];

  const answerTexts = questions.questions[3].choices;
  const indexCategories = Array.from(
    { length: answerTexts.length },
    (_, i) => i + 1
  );

  const chartData = {
    series: [{ data: series }],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      colors: colorList,
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
        categories: indexCategories,
        labels: {
          style: {
            colors: colorList,
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val;
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
