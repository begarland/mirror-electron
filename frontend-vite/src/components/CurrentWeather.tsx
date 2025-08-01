import { useEffect, useState } from "react";
import { fetchCurrentWeather } from "../api/weather";

const CurrentWeather = () => {
  const [currentWeather, setCurrentWeather] = useState({
    weather: [
      {
        main: "",
        icon: "",
        temp: 0,
        feels_like: 0,
        temp_max: 0,
        temp_min: 0,
      },
    ],
    main: {
      feels_like: 0,
      grnd_level: 0,
      humidity: 0,
      pressure: 0,
      sea_level: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
  });

  useEffect(() => {
    fetchData();

    async function fetchData() {
      const weather = await fetchCurrentWeather();

      console.log("weather", weather);
      setCurrentWeather(weather);
    }
  }, []);

  return (
    <>
      <>
        {currentWeather ? (
          <>
            <div className="text-white m-4 ">
              <p className="text-4xl font-chalkboard text-slate-300">
                The current forecast is...
              </p>

              <div className="flex justify-center items-center -mt-4 -mb-4">
                <p className="text-white font-bold font-chalk text-3xl w-2/3 me-3">
                  {currentWeather?.weather?.[0].main}
                </p>
                <img
                  className="w-1/3"
                  src={`http://openweathermap.org/img/wn/${currentWeather?.weather?.[0].icon}@2x.png`}
                />
              </div>
            </div>
            <div className="flex justify-center items-center border-b-4 border-b-[#ffd23f]"></div>
            <div className="flex justify-center items-center border-b-4 border-b-[#44af69]">
              <div className="w-1/4"></div>
              <div className="w-2/4">
                <div className="text-white text-2xl text-center">
                  <p className="font-chalkboard">Feels like:</p>
                  <p className="font-feltPen">
                    {currentWeather?.main?.feels_like?.toFixed(0)}
                  </p>
                </div>
              </div>
              <div className="w-1/4"></div>
            </div>
          </>
        ) : (
          <></>
        )}
      </>

      {currentWeather ? (
        <div className="flex flex-col items-center">
          <div className="current-weather-body">
            <div className="current-temp-and-feels-like-container">
              <h3 className="current-temp">
                {currentWeather?.main?.temp?.toFixed(0)}
              </h3>
              <p className="feels-like">
                Feels like: {currentWeather?.main?.feels_like?.toFixed(0)}
              </p>
            </div>
            <div className="icon-and-weather-container"></div>
            <div className="high-low-container">
              <p className="high-low high">
                <span className="bold desc">High:</span>{" "}
                {currentWeather?.main?.temp_max?.toFixed(0)}
              </p>
              <p className="high-low low">
                <span className="bold desc">Low:</span>{" "}
                {currentWeather?.main?.temp_min?.toFixed(0)}
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
