import { useEffect, useState } from "react";

const ScreenSaver: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hr, setHr] = useState(new Date().getHours());

  const wakeUp = 6;
  const sleep = 9;

  // console.log(hr, wakeUp, sleep);
  const saveScreen = hr <= wakeUp || hr >= sleep;
  // const saveScreen = false;

  useEffect(() => {
    // Setup the interval when the component mounts
    const intervalId = setInterval(() => {
      setHr(new Date().getHours());
    }, 60000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <>
      {saveScreen ? <div className="bg-black h-screen w-screen" /> : children}
    </>
  );
};

export default ScreenSaver;
