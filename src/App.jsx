import { useState, useEffect } from "react";
import BandList from "./components/BandList";
import ScheduleList from "./components/ScheduleList";
import "./App.css";

function App() {
  // const [bands, setBands] = useState([]);
  const [schedule, setSchedule] = useState([]);

  // useEffect(() => {
  //   async function getBands() {
  //     const res = await fetch("http://localhost:8080/bands");
  //     const bands = await res.json();
  //     setBands(bands);
  //   }
  //   getBands();
  // }, []);

  useEffect(() => {
    async function getSchedule() {
      const resS = await fetch("http://localhost:8080/schedule");
      const schedule = await resS.json();
      setSchedule(schedule);
    }
    getSchedule();
  }, []);

  return (
    <div className="App">
      {/* <BandList bands={bands} /> */}
      <ScheduleList schedule={schedule} />
    </div>
  );
}

export default App;
