import { useDate } from "../hooks/useDate";

const WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const TodayIs = () => {
  const { date, month, year, day } = useDate();

  return (
    <div className="text-white p-4 flex flex-col gap-1">
      <p className="text-5xl font-chalkboard underline">Today is...</p>
      <p className="text-8xl font-dailycroquete theme-gradient-text ">
        {WEEK[day]}
      </p>
      <p className="text-7xl font-textbook">
        {MONTH[month]} {date}, {year}
      </p>
    </div>
  );
};

export default TodayIs;
