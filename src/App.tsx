import { useState } from "react";
import "./App.css";
import TrackerLanding from "./Components/TrackerLanding";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TrackerLanding />
      </LocalizationProvider>
    </>
  );
}

export default App;
