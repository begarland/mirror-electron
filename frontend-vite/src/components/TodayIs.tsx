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
  const today = new Date();
  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  return (
    <div className="text-white">
      <p className="text-9xl font-dailycroquete">{WEEK[day]}</p>
      <p>
        {MONTH[month]} {date} {year}
      </p>
    </div>
  );
};

export default TodayIs;
