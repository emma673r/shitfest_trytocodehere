// import Schedule from "./Schedule";

function ScheduleList(props) {
  console.log(props);
  return (
    <main className="ScheduleList">
      {props.schedule.map((schedule) =>
        // <Schedule key={schedule.mon} schedule={schedule} />
        console.log("schedule", schedule)
      )}
    </main>
  );
}

export default ScheduleList;
