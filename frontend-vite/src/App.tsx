import AnalogClock from "./components/AnalogClock";
import DigitalClock from "./components/DigitalClock";

function App() {
  return (
    <div className="bg-[#222222] h-screen w-screen flex flex-col justify-start items-start relative overflow-hidden">
      <div className="w-screen flex justify-end pt-2 pe-2">
        <DigitalClock />
      </div>
      <div className="w-screen">
        <h1 className="text-9xl text-white">Good Morning Charlie</h1>
      </div>
      <div className="absolute bottom-5 right-5">
        <AnalogClock />
      </div>
    </div>
  );
}

export default App;
