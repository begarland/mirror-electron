import useClock from "use-clock";

const DigitalClock = () => {
  const { time } = useClock("hh:mm:ss");

  return <p className="text-sm font-bold text-white">{time}</p>;
};

export default DigitalClock;
