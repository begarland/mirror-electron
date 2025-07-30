import useClock from "use-clock";

const DigitalClock = () => {
  const { time } = useClock("hh:mm:ss");

  return (
    <p className="text-sm font-bold text-white text-center mt-2">{time}</p>
  );
};

export default DigitalClock;
