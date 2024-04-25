// import React, { useState, useEffect } from "react";
// import ReactApexChart from "react-apexcharts";
// import api from "../api/api";
// import questions from "../questions/question.json";

// const BarChart = ({ calculateTotalOccurrences, surveyData }) => {
//   const [series, setSeries] = useState([]);

//   useEffect(() => {
//     // Calculate series only when surveyData changes
//     const calculateSeries = () => {
//       const question4 = questions.questions[3];
//       const questionId = question4.id;
//       const answerTexts = question4.choices;

//       const newSeries = answerTexts.map((answerText) =>
//         calculateTotalOccurrences(questionId, answerText)
//       );

//       setSeries(newSeries);
//     };

//     calculateSeries();
//   }, [surveyData]);

//   const colorList = [
//     "#008FFB",
//     "#00E396",
//     "#FFD700",
//     "#FF6384",
//     "#36A2EB",
//     "#FF00FF",
//     "#FF4500",
//     "#7CFC00",
//     "#FF1493",
//     "#9400D3",
//   ];

//   const chartData = {
//     series: [{ data: series }],
//     options: {
//       chart: {
//         height: 350,
//         type: "bar",
//       },
//       colors: colorList,
//       plotOptions: {
//         bar: {
//           columnWidth: "45%",
//           distributed: true,
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       legend: {
//         show: false,
//       },
//       xaxis: {
//         categories: questions.questions[3].choices,
//         labels: {
//           style: {
//             colors: colorList,
//             fontSize: "12px",
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart
//           options={chartData.options}
//           series={chartData.series}
//           type="bar"
//           height={350}
//         />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };

// export default BarChart;

import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import questions from "../questions/question.json";
import FilterChart4 from "../components/FilterChart4";

export default function ApexChart({ surveyData }) {
  // Retrieve question details from questions.json (assuming question1 is the first question)

  const question = questions.questions[3];
  const questionId = question.id;
  const answerTexts = question.choices;

  const [series2, setSeries2] = useState([]);
  const [course, setCourse] = useState("ACT");
  const [bscs, setBSCS] = useState("BSCS");
  const [filterBSCS, setFilterBSCS] = useState([]);
  const [bsed, setBSED] = useState("BSED");
  const [filterBSED, setFilterBSED] = useState([]);
  const [beed, setBEED] = useState("BEED");
  const [filterBEED, setFilterBEED] = useState([]);
  const [bssw, setBSSW] = useState("BSSW");
  const [filterBSSW, setFilterBSSW] = useState([]);
  const [BSPOLSCIE, setBSPOLSCIE] = useState("BSPOLSCIE");
  const [filterBSPOLSCIE, setFilterBSPOLSCIE] = useState([]);
  const [BSCRIM, setBSCRIM] = useState("BSCRIM");
  const [filterBSCRIM, setFilterBSCRIM] = useState([]);
  const [abfil, setabfil] = useState("AB FIL");
  const [filterabfil, setFilterabfil] = useState([]);
  const [filteredSurveyData, setFilteredSurveyData] = useState([]);

  // Function to calculate total occurrences of an answer text for a specific question within filtered survey data
  const calculateTotalOccurrences = (questionId, answerText) => {
    let totalOccurrences = 0;

    surveyData.forEach((entry) => {
      if (
        entry.answers[questionId] &&
        entry.answers[questionId].includes(answerText)
      ) {
        totalOccurrences++;
      }
    });

    return totalOccurrences;
  };

  const calculateTotalOccurrences2 = (questionId, answerText, data) => {
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
      // Filter surveyData based on selected course
      const filteredData = surveyData.filter(
        (entry) => entry.course === course
      );
      setFilteredSurveyData(filteredData);
    };

    filterSurveyDataByCourse();
  }, [surveyData, course]);

  useEffect(() => {
    // Filter surveyData based on selected course
    const filterSurveyDataByCourse = () => {
      // Filter surveyData based on selected course
      const filteredData = surveyData.filter(
        (entry) => entry.course === course
      );
      setFilteredSurveyData(filteredData);
    };

    filterSurveyDataByCourse();
  }, [surveyData, course]);

  useEffect(() => {
    // Filter surveyData based on selected course
    const filterSurveyDataByCourse = () => {
      // Filter surveyData based on selected course
      const filteredData = surveyData.filter((entry) => entry.course === bscs);
      setFilterBSCS(filteredData);
    };

    filterSurveyDataByCourse();
  }, [surveyData, bscs]);

  useEffect(() => {
    // Filter surveyData based on selected course
    const filterSurveyDataByCourse = () => {
      // Filter surveyData based on selected course
      const filteredData = surveyData.filter((entry) => entry.course === bsed);
      setFilterBSED(filteredData);
    };

    filterSurveyDataByCourse();
  }, [surveyData, bsed]);

  useEffect(() => {
    // Filter surveyData based on selected course
    const filterSurveyDataByCourse = () => {
      // Filter surveyData based on selected course
      const filteredData = surveyData.filter((entry) => entry.course === beed);
      setFilterBEED(filteredData);
    };

    filterSurveyDataByCourse();
  }, [surveyData, beed]);

  useEffect(() => {
    // Filter surveyData based on selected course
    const filterSurveyDataByCourse = () => {
      // Filter surveyData based on selected course
      const filteredData = surveyData.filter((entry) => entry.course === bssw);
      setFilterBSSW(filteredData);
    };

    filterSurveyDataByCourse();
  }, [surveyData, bssw]);

  useEffect(() => {
    // Filter surveyData based on selected course
    const filterSurveyDataByCourse = () => {
      // Filter surveyData based on selected course
      const filteredData = surveyData.filter(
        (entry) => entry.course === BSPOLSCIE
      );
      setFilterBSPOLSCIE(filteredData);
    };

    filterSurveyDataByCourse();
  }, [surveyData, BSPOLSCIE]);

  useEffect(() => {
    // Filter surveyData based on selected course
    const filterSurveyDataByCourse = () => {
      // Filter surveyData based on selected course
      const filteredData = surveyData.filter(
        (entry) => entry.course === BSCRIM
      );
      setFilterBSCRIM(filteredData);
    };

    filterSurveyDataByCourse();
  }, [surveyData, BSCRIM]);

  useEffect(() => {
    // Filter surveyData based on selected course
    const filterSurveyDataByCourse = () => {
      // Filter surveyData based on selected course
      const filteredData = surveyData.filter((entry) => entry.course === abfil);
      setFilterabfil(filteredData);
    };

    filterSurveyDataByCourse();
  }, [surveyData, abfil]);

  useEffect(() => {
    // Calculate series based on filteredSurveyData
    const calculateSeries = () => {
      const newSeries = answerTexts.map((answerText) =>
        calculateTotalOccurrences2(questionId, answerText, filteredSurveyData)
      );

      setSeries2(newSeries);
    };

    calculateSeries();
  }, [filteredSurveyData]);

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

  const options = {
    chart: {
      type: "donut",
    },
    labels: answerTexts,
    colors: colorList,
  };

  return (
    <div id="chart" className="px-5">
      <Chart
        options={options}
        series={series}
        type="donut"
        width={"100%"}
        height={400}
      />

      <div className="grid grid-cols-4 gap-4">
        <div className="mt-10 bg-gray-200">
          <h1 className="font-bold text-xl">ACT</h1>
          <FilterChart4 surveyData={filteredSurveyData} />
        </div>
        <div className="mt-10 bg-gray-200">
          <h1 className="font-bold text-xl">BSCS</h1>
          <FilterChart4 surveyData={filterBSCS} />
        </div>
        <div className="mt-10 bg-gray-200">
          <h1 className="font-bold text-xl">BSED</h1>
          <FilterChart4 surveyData={filterBSED} />
        </div>
        <div className="mt-10 bg-gray-200">
          <h1 className="font-bold text-xl">BEED</h1>
          <FilterChart4 surveyData={filterBEED} />
        </div>
        <div className="mt-10 bg-gray-200">
          <h1 className="font-bold text-xl">BSSW</h1>
          <FilterChart4 surveyData={filterBSSW} />
        </div>
        <div className="mt-10 bg-gray-200">
          <h1 className="font-bold text-xl">BSPOLSCIE</h1>
          <FilterChart4 surveyData={filterBSPOLSCIE} />
        </div>
        <div className="mt-10 bg-gray-200">
          <h1 className="font-bold text-xl">BSCRIM</h1>
          <FilterChart4 surveyData={filterBSCRIM} />
        </div>
        <div className="mt-10 bg-gray-200">
          <h1 className="font-bold text-xl">AB FIL</h1>
          <FilterChart4 surveyData={filterabfil} />
        </div>
      </div>
    </div>
  );
}
