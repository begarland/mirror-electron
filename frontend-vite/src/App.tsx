import AnalogClock from "./components/AnalogClock";
import DigitalClock from "./components/DigitalClock";
import GreetingMessage from "./components/GreetingMessage";
import HourCalendar from "./components/HourCalendar";

function App() {
  return (
    <div className="bg-black h-screen w-screen flex flex-col justify-start items-start relative overflow-hidden">
      <div className="w-screen flex justify-start pt-5 ps-5">
        <div className="flex flex-col justify-center">
          <AnalogClock />
          <DigitalClock />
        </div>
      </div>
      <div className="w-screen h-[80vw] flex flex-col justify-end items-center pb-10">
        <h1 className="text-7xl text-white">
          <GreetingMessage />
        </h1>
        <HourCalendar />
      </div>
    </div>
  );
}

export default App;
