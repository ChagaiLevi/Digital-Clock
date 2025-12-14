import { useState, useEffect } from "react";
import Dot from "./Components/Dot";
import Digit from "./Components/Digit";

type NumberProps = {
  hours: { first: number | null; second: number | null; };
  minutes: { first: number | null; second: number | null; };
  seconds: { first: number | null; second: number | null; };
}

function App() {
  const [numbersTimes, setNumbersTimes] = useState<NumberProps>({
    hours: { first: null, second: null },
    minutes: { first: null, second: null },
    seconds: { first: null, second: null },
  });

  useEffect(() => {
    const mainFunction = () => {
      const date = new Date();
      const hoursNumber = date.getHours();
      const minutesNumber = date.getMinutes();
      const secondsNumber = date.getSeconds();

      setNumbersTimes({
        hours: {
          first: hoursNumber < 10 ? 0 : Math.floor(hoursNumber / 10),
          second: hoursNumber < 10 ? hoursNumber : hoursNumber % 10,
        },
        minutes: {
          first: minutesNumber < 10 ? 0 : Math.floor(minutesNumber / 10),
          second: minutesNumber < 10 ? minutesNumber : minutesNumber % 10,
        },
        seconds: {
          first: secondsNumber < 10 ? 0 : Math.floor(secondsNumber / 10),
          second: secondsNumber < 10 ? secondsNumber : secondsNumber % 10,
        },
      });
    };

    mainFunction();
    const intervalId = setInterval(mainFunction, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <Digit num={numbersTimes.hours.first} />
      <Digit num={numbersTimes.hours.second} />
      <Dot />
      <Digit num={numbersTimes.minutes.first} />
      <Digit num={numbersTimes.minutes.second} />
      <Dot />
      <Digit num={numbersTimes.seconds.first} />
      <Digit num={numbersTimes.seconds.second} />
    </div>
  );
}

export default App;