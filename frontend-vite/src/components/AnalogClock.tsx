import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import "./AnalogClock.css";

const AnalogClock = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex justify-center items-center mt-8 text-white">
      <Clock size={"300px"} value={value} renderNumbers />
    </div>
  );
};

export default AnalogClock;
