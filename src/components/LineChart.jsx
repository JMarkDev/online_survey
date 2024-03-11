import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Dropdown from "../components/Dropdown";

const Analytics = () => {
  const COLORS = [
    "#e88245",
    "#8daa3b",
    "#1f82c1",
    "#9333ea",
    "#ff5733",
    "#6c5b7b",
    "#ffcc29",
    "#00a8cc",
  ];

  const graphColors = [
    "#e88245",
    "#8daa3b",
    "#1f82c1",
    "#9333ea",
    "#ff5733",
    "#6c5b7b",
    "#ffcc29",
    "#00a8cc",
  ];
  const [strand, setStrand] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2024);
  const [data, setData] = useState([
    { month: "Jan", BSCS: 30, BSCRIM: 45, BSED: 60, BSSW: 30, BSPOLSCIE: 10 },
    { month: "Feb", BSCS: 40, BSCRIM: 55, BSED: 40, BSSW: 25, BSPOLSCIE: 20 },
    { month: "Mar", BSCS: 25, BSCRIM: 30, BSED: 50, BSSW: 50, BSPOLSCIE: 30 },
    { month: "Apr", BSCS: 25, BSCRIM: 30, BSED: 50, BSSW: 50, BSPOLSCIE: 30 },
    { month: "May", BSCS: 25, BSCRIM: 30, BSED: 50, BSSW: 50, BSPOLSCIE: 30 },
    { month: "Jun", BSCS: 25, BSCRIM: 30, BSED: 50, BSSW: 50, BSPOLSCIE: 30 },
    { month: "Jul", BSCS: 25, BSCRIM: 30, BSED: 50, BSSW: 50, BSPOLSCIE: 30 },
    { month: "Aug", BSCS: 25, BSCRIM: 30, BSED: 50, BSSW: 50, BSPOLSCIE: 30 },
    { month: "Sep", BSCS: 25, BSCRIM: 30, BSED: 50, BSSW: 50, BSPOLSCIE: 30 },
    { month: "Oct", BSCS: 25, BSCRIM: 30, BSED: 50, BSSW: 50, BSPOLSCIE: 30 },
    { month: "Nov", BSCS: 25, BSCRIM: 30, BSED: 50, BSSW: 50, BSPOLSCIE: 30 },
    { month: "Dec", BSCS: 25, BSCRIM: 30, BSED: 50, BSSW: 50, BSPOLSCIE: 30 },
  ]);

  let colorIndex = 0;

  const getNextColor = () => {
    const color = COLORS[colorIndex];
    colorIndex = (colorIndex + 1) % COLORS.length;
    return color;
  };

  let graphColorIndex = 1;

  const getGraphColor = () => {
    const color = graphColors[graphColorIndex];
    graphColorIndex = (graphColorIndex + 1) % graphColors.length;
    return color;
  };

  const fetchDataStatatistics = async (year) => {
    try {
      const response = await api.get(`/strand/monthly/${year}`);
      setData(response.data);
      setSelectedYear(year);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataStatatistics(selectedYear);
  }, [selectedYear]);

  const handleYearChange = (year) => {
    fetchDataStatatistics(year);
  };

  return (
    <div
      style={
        {
          // maxWidth: "100%",
          // background: "white",
          // overflowX: "auto",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // margin: "auto",
          // marginTop: "20px",
          // padding: "10px",
        }
      }
      className="dash  w-auto overflow-x-auto"
    >
      <div className="flex flex-col md:flex-row md:gap-6 mt-[16px] w-full">
        <div className="basis-[60%] border-2 border-gray dark:border-white bg-white shadow-md cursor-pointer rounded-[4px] dark:bg-black mb-4 md:mb-0 lg:mb-0 lg:mr-4">
          <div className="bg-gray-500 py-[15px] px-[20px] dark:border-white  mb-[20px]">
            <div className="gap-3 flex flex-col md:flex-row justify-between items-center">
              <h2 className="  text-white leading-[19px] font-bold ">
                Respondents Chart
              </h2>
              <div className="flex gap-5">
                <Dropdown />
                <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-5">
                  Download
                </button>
              </div>
            </div>
          </div>

          <div
            className="lineChart"
            style={{
              background: "white",
              //   padding: "10px",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              overflowX: "auto",
            }}
          >
            <ResponsiveContainer width={950} height={400}>
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 5,
                  left: 5,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="6 6" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, "dataMax + 1"]} />
                {/*
                            <YAxis domain={[0, 500]} /> 
                            
                            <YAxis domain={[0, 500]} ticks={[0, 100, 200, 300, 400, 500]} />
                            */}
                <Tooltip />
                <Legend />
                {data &&
                  data.length > 0 &&
                  Object.keys(data[0])
                    .filter((key) => key !== "month")
                    .map((key, index) => (
                      <Line
                        key={index}
                        type="monotone"
                        dataKey={key}
                        stroke={getGraphColor()}
                        activeDot={{ r: 8 }}
                      />
                    ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
