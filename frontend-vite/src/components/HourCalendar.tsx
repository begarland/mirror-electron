import TimeLine from "react-daily-timeline-sheet";

const HourCalendar = () => {
  const workingHours = [
    {
      start: "07:00",
      end: "20:00",
      title: "Awake Time",
    },
  ];

  return (
    <div className="w-[80vw]">
      <TimeLine notWorkingCaption="" workingHours={workingHours} height="20px" nonWorkingColor="#222222" workingColor="orange"/>
    </div>
  );
};

export default HourCalendar;
