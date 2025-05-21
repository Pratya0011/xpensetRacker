import { useState } from "react";
import "./App.css";
import TrackerLanding from "./Components/TrackerLanding";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TrackerLanding />
    </>
  );
}

export default App;
