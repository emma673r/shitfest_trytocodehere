import { useState, useEffect } from "react";
import BandList from "./components/BandList";
// import ScheduleList from "./components/ScheduleList";
import "./App.css";

function App() {
  const [bands, setBands] = useState([]);
  // const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    async function getBands() {
      const res = await fetch("https://footrypleaseworkanddeletelateron.fly.dev/bands");
      const bands = await res.json();
      setBands(bands);
    }
    getBands();
  }, []);

  return (
    <div className="App">
      <BandList bands={bands} />
      {/* <ScheduleList schedule={schedule} /> */}
    </div>
  );
}

export default App;
