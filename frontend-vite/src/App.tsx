import { createContext } from "react";
import DigitalClock from "./components/DigitalClock";
import GreetingMessage from "./components/GreetingMessage";
import HourCalendar from "./components/HourCalendar";
import ScreenSaver from "./components/ScreenSaver";
import CurrentWeather from "./components/CurrentWeather";
import TodayIs from "./components/TodayIs";
import "./fonts/Nabana-ShadowBold.ttf";

export const ThemeContext = createContext({
  primaryColor: "bg-green-600",
});

function App() {
  return (
    <ThemeContext.Provider value={{ primaryColor: "bg-green-600" }}>
      <ScreenSaver>
        <div className="bg-black h-screen w-screen flex flex-col justify-start items-start relative overflow-hidden">
          <div>
            <TodayIs />
          </div>
          <div className="w-screen flex justify-start pt-5 ps-5">
            <div className="flex flex-col justify-center">
              <DigitalClock />
            </div>
          </div>
          <CurrentWeather />
          <div className="w-screen h-[80vw] flex flex-col justify-end items-center pb-10">
            <h1 className="text-7xl text-white font-dailycroquete">
              <GreetingMessage />
            </h1>
            <HourCalendar />
          </div>
        </div>
      </ScreenSaver>
    </ThemeContext.Provider>
  );
}

export default App;
