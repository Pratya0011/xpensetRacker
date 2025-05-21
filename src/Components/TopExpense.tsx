import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Grid } from "@mui/material";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const TopExpense = ({ categoryTotal }: any) => {
  const getTotal = (categoryTotal: any) => {
    const total = categoryTotal?.reduce(
      (acc: number, item: any) => acc + Number(item),
      0
    );
    return total;
  };
  const data = {
    labels: Object.keys(categoryTotal),
    datasets: [
      {
        label: "Expenses",
        data: Object.values(categoryTotal),
        backgroundColor: "#a08df3",
        borderRadius: 10,
        barThickness: 20,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false },
        ticks: { stepSize: 20 },
        max: getTotal(Object.values(categoryTotal)) || 0,
      },
      y: {
        grid: { display: false },
      },
    },
  };

  return (
    <Grid
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        border: "1px solid #9B9B9B",
        borderRadius: "15px",
        pt: "40px",
        px: "30px",
      }}
    >
      <Bar data={data} options={options} />
    </Grid>
  );
};

export default TopExpense;
