import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import questions from "../questions/question.json";

export default function ApexChart({ calculateTotalOccurrences }) {
  // Retrieve question details from questions.json (assuming question1 is the first question)

  const question3 = questions.questions[2];
  const questionId = question3.id;
  const answerTexts = question3.choices;

  // Calculate total occurrences for each answer text in the question
  const series = answerTexts.map((answerText) =>
    calculateTotalOccurrences(questionId, answerText)
  );

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
    "#8576FF",
  ];

  // Chart options with labels and chart type
  const options = {
    chart: {
      type: "donut",
    },
    labels: answerTexts,
    colors: colorList,
  };

  return (
    <div id="chart">
      {/* Render Chart component with computed options and series */}
      <Chart
        options={options}
        series={series}
        type="donut"
        width={"100%"}
        height={350}
      />
    </div>
  );
}
