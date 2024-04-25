import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import questions from "../questions/question.json";

export default function ApexChart({ surveyData }) {
  const question = questions.questions[4];
  const answerTexts = question.choices;
  const [series, setSeries] = useState([]);
  const [course, setCourse] = useState("");
  const [filteredSurveyData, setFilteredSurveyData] = useState([]);

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

  // Chart options with labels and chart type
  const options = {
    chart: {
      type: "pie",
    },
    labels: answerTexts,
    colors: colorList,
  };

  // Function to handle course selection change
  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  // Function to calculate total occurrences of an answer text for a specific question within filtered survey data
  const calculateTotalOccurrences = (questionId, answerText, data) => {
    let totalOccurrences = 0;

    data.forEach((entry) => {
      if (
        entry.answers[questionId] &&
        entry.answers[questionId].includes(answerText)
      ) {
        totalOccurrences++;
      }
    });

    return totalOccurrences;
  };

  useEffect(() => {
    // Filter surveyData based on selected course
    const filterSurveyDataByCourse = () => {
      if (!course) {
        // If no course is selected, use the original surveyData
        setFilteredSurveyData(surveyData);
      } else {
        // Filter surveyData based on selected course
        const filteredData = surveyData.filter(
          (entry) => entry.course === course
        );
        setFilteredSurveyData(filteredData);
      }
    };

    filterSurveyDataByCourse();
  }, [surveyData, course]);

  useEffect(() => {
    // Calculate series based on filteredSurveyData
    const calculateSeries = () => {
      const question = questions.questions[4];
      const questionId = question.id;
      const answerTexts = question.choices;

      const newSeries = answerTexts.map((answerText) =>
        calculateTotalOccurrences(questionId, answerText, filteredSurveyData)
      );

      setSeries(newSeries);
    };

    calculateSeries();
  }, [filteredSurveyData]);

  return (
    <div id="chart">
      <div className="my-6">
        <select
          name="course"
          id="course"
          onChange={handleCourseChange}
          className="border-gray-400 border p-2 rounded-lg w-full"
        >
          <option value="">Default</option>
          <option value="BSCS">Bachelor of Science in Computer Science</option>
          <option value="ACT">Associate in Computer Technology</option>
          <option value="BSED">
            Bachelor of Science in Secondary Education
          </option>
          <option value="BEED">
            Bachelor of Science in Elementary Education
          </option>
          <option value="BSSW">Bachelor of Science in Social Work</option>
          <option value="BSPOLSCIE">
            Bachelor of Science in Political Science
          </option>
          <option value="BSCRIM">Bachelor of Science in Criminology</option>
          <option value="AB FIL">Bachelor of Arts in Filipino</option>
        </select>
      </div>
      <Chart
        options={options}
        series={series}
        type="pie"
        width={"100%"}
        height={350}
      />
    </div>
  );
}
