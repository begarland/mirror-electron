import { useEffect, useState } from "react";

const returnGreeting = (hrs: number): string => {
  let greet = "Hello";
  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  return greet;
};

const GreetingMessage = () => {
  console.log("new Date().getHours()", new Date().getHours());
  const [hr, setHr] = useState(new Date().getHours());

  useEffect(() => {
    // Setup the interval when the component mounts
    const intervalId = setInterval(() => {
      setHr(new Date().getHours()); // Use functional update for state
    }, 60000); // Update every 5 mins

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures effect runs only once on mount

  return <>{returnGreeting(hr)} Charlie</>;
};

export default GreetingMessage;
