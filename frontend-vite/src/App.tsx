import { createContext } from "react";
import DigitalClock from "./components/DigitalClock";
import GreetingMessage from "./components/GreetingMessage";
import ScreenSaver from "./components/ScreenSaver";
import CurrentWeather from "./components/CurrentWeather";
import TodayIs from "./components/TodayIs";
import AnalogClock from "./components/AnalogClock";

export const ThemeContext = createContext({
  primaryColor: "bg-green-600",
});

function App() {
  return (
    <ThemeContext.Provider value={{ primaryColor: "bg-green-600" }}>
      <ScreenSaver>
        <div className="bg-black h-screen w-screen flex justify-start items-start relative overflow-hidden">
          <div className="w-4/6 flex justify-center items-end h-screen mb-36">
            <h1 className="text-7xl text-white font-dailycroquete">
              <GreetingMessage />
            </h1>
          </div>

          <div className="w-1/3 flex justify-end">
            <div className="flex flex-col">
              <TodayIs />
              <div className="flex flex-col justify-center border-y-4 p-4 border-t-[#d72638] border-b-[#f46036] ">
                <DigitalClock />
              </div>
              <div className="flex flex-col justify-start"></div>
              <CurrentWeather />
              <AnalogClock />
            </div>
          </div>
        </div>
      </ScreenSaver>
    </ThemeContext.Provider>
  );
}

export default App;
