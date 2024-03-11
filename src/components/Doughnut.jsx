import React from "react";
import Chart from "react-apexcharts";

export default function ApexChart() {
  const series = [44, 55, 41, 17, 15];
  const options = {
    chart: {
      type: "donut",
    },
  };

  return (
    <div id="chart">
      <Chart
        options={options}
        width={"100%"}
        series={series}
        type="donut"
        height={300}
      />
    </div>
  );
}
