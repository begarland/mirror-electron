import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";

const HourCalendar = () => {
  const [hr, setHr] = useState(new Date().getHours());
  const [min, setMin] = useState(new Date().getMinutes());

  console.log("min", min);

  const hours = Array.from({ length: 23 }, (_, index) => index);

  useEffect(() => {
    // Setup the interval when the component mounts
    const intervalId = setInterval(() => {
      setHr(new Date().getHours());
      setMin(new Date().getMinutes());
    }, 10000); // Update every 5 mins

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures effect runs only once on mount

  const wakeUp = 8;
  const bedTime = 20;

  const { primaryColor } = useContext(ThemeContext);

  return (
    <div className="w-[1440px] text-white rounded-lg flex flex-row justify-center py-4">
      {hours.map((hour) => {
        return (
          <>
            <div
              className={`w-20 border flex justify-center ${
                hour >= wakeUp && hour < bedTime ? primaryColor : ""
              }`}
            >
              {hour}
            </div>
          </>
        );
      })}
      <div
        className="absolute text-white bottom-0 h-[50px]"
        style={{ left: `${(hr * 60) + (min)}px` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default HourCalendar;
