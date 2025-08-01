import useClock from "use-clock";

const DigitalClock = () => {
  const { time } = useClock("hh:mm:ss");

  return (
    <p className="text-4xl font-digital font-bold text-white text-center mt-2">
      {time}
    </p>
  );
};

export default DigitalClock;
