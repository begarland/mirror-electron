import { useEffect, useState } from "react";

export const useDate = () => {
  const [today, setToday] = useState<Date>(new Date());

  useEffect(() => {
    // setInterval(() => {
    setToday(new Date());
    // }, 300000);
  }, [setToday]);

  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  return {
    day,
    date,
    month,
    year,
  };
};
