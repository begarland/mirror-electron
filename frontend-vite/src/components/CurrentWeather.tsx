import { useEffect, useState } from "react";
import { fetchCurrentWeather } from "../api/weather";

const tempToColor = {
  0: "#6c2dc7", // freezing cold
  32: "#564787", // freezing point
  50: "#1985a1", // chilly
  68: "#44af69", // mild
  80: "#ffd23f", // warm
  90: "#f46036", // hot
  100: "#d72638", // very hot
};

function getTempColor(temp: string) {
  if (Number(temp) <= 0) {
    return tempToColor[0];
  } else if (Number(temp) > 0 && Number(temp) <= 32) {
    return tempToColor[32];
  } else if (Number(temp) > 32 && Number(temp) <= 50) {
    return tempToColor[50];
  } else if (Number(temp) > 50 && Number(temp) <= 68) {
    return tempToColor[68];
  } else if (Number(temp) > 68 && Number(temp) <= 80) {
    return tempToColor[80];
  } else if (Number(temp) > 80 && Number(temp) <= 90) {
    return tempToColor[90];
  } else if (Number(temp) > 90) {
    return tempToColor[100];
  }
}

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
              <p className="text-4xl font-chalkboard text-slate-300 underline">
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
            <div className="flex justify- items-center border-b-4 border-b-[#44af69] p-2">
              <div className="text-white text-2x p-2 gap-4 flex ">
                <p className="text-4xl font-chalkboard text-slate-300 underline">
                  The current temperature is:
                </p>
                <p
                  className="font-feltPen text-6xl w-full text-center mt-2"
                  style={{
                    color:
                      getTempColor(currentWeather?.main?.temp?.toFixed(0)) ??
                      "white",
                  }}
                >
                  {currentWeather?.main?.feels_like?.toFixed(0)}&deg;
                </p>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    </>
  );
};

export default CurrentWeather;
