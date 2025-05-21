// PieChart.tsx
import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ categoryTotal }: any) => {
  const data = {
    labels: Object.keys(categoryTotal),
    datasets: [
      {
        label: "Expenses",
        data: Object.values(categoryTotal),
        backgroundColor: ["#A000FF", "#FF9304", "#FDE006"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "#fff",
          font: {
            size: 12,
          },
          generateLabels: (chart: any) => {
            const data = chart.data;
            if (data.labels && data.datasets.length) {
              return data.labels.map((label: any, i: number) => ({
                text: label, // 👈 ensures the label appears
                fillStyle: data.datasets[0].backgroundColor?.[i],
                strokeStyle: "#fff",
                lineWidth: 1,
                fontColor: "#fff",
                hidden: false,
                index: i,
              }));
            }
            return [];
          },
        },
      },
    },
  };

  return (
    <Box sx={{ width: "100%", height: "100%", color: "#fff" }}>
      <Pie data={data} options={options} />
    </Box>
  );
};

export default PieChart;
