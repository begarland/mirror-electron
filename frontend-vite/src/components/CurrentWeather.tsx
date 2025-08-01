import { useEffect, useState } from "react";
import { fetchCurrentWeather } from "../api/weather";

const CurrentWeather = () => {
  const [currentWeather, setCurrentWeather] = useState({
    main: "",
    icon: "",
    temp: 0,
    feels_like: 0,
    temp_max: 0,
    temp_min: 0,
  });

  useEffect(() => {
    fetchData();

    async function fetchData() {
      const weather = await fetchCurrentWeather();
      setCurrentWeather(weather?.weather?.[0]);
    }
  }, []);

  return (
    <>
      {currentWeather ? (
        <div className="flex flex-col items-center">
          <div className="current-weather-body">
            <div className="current-temp-and-feels-like-container">
              <h3 className="current-temp">
                {currentWeather?.temp?.toFixed(0)}
              </h3>
              <p className="feels-like">
                Feels like: {currentWeather?.feels_like?.toFixed(0)}
              </p>
            </div>
            <div className="icon-and-weather-container">
              <img
                className="weather-icon"
                src={`http://openweathermap.org/img/wn/${currentWeather?.icon}@2x.png`}
              />
              <p className="text-white -mt-16 font-bold">
                {currentWeather?.main}
              </p>
            </div>
            <div className="high-low-container">
              <p className="high-low high">
                <span className="bold desc">High:</span>{" "}
                {currentWeather?.temp_max?.toFixed(0)}
              </p>
              <p className="high-low low">
                <span className="bold desc">Low:</span>{" "}
                {currentWeather?.temp_min?.toFixed(0)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CurrentWeather;
