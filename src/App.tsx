import { useState, useEffect } from "react";
import Dot from "./Components/Dot";
import Digit from "./Components/Digit";

type NumberProps = {
  firstHours: number | null;
  secondHours: number | null;
  firstMinutes: number | null;
  secondMinutes: number | null;
  firstSeconds: number | null;
  secondSeconds: number | null;
};

function App() {
  const [numbersTimes, setNumbersTimes] = useState<NumberProps>({
    firstHours: null,
    secondHours: null,
    firstMinutes: null,
    secondMinutes: null,
    firstSeconds: null,
    secondSeconds: null,
  });

  useEffect(() => {
    const mainFunction = () => {
      const date = new Date();
      const hoursNumber = date.getHours();
      const minutesNumber = date.getMinutes();
      const secondsNumber = date.getSeconds();

      setNumbersTimes({
        firstHours: hoursNumber < 10 ? 0 : Math.floor(hoursNumber / 10),
        secondHours: hoursNumber < 10 ? hoursNumber : hoursNumber % 10,
        firstMinutes: minutesNumber < 10 ? 0 : Math.floor(minutesNumber / 10),
        secondMinutes: minutesNumber < 10 ? minutesNumber : minutesNumber % 10,
        firstSeconds: secondsNumber < 10 ? 0 : Math.floor(secondsNumber / 10),
        secondSeconds: secondsNumber < 10 ? secondsNumber : secondsNumber % 10,
      });
    };

    mainFunction(); // ריצה ראשונית
    const intervalId = setInterval(mainFunction, 1000);

    // ניקוי האינטרוול כשהקומפוננטה נהרסת
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <Digit num={numbersTimes.firstHours} />
      <Digit num={numbersTimes.secondHours} />
      <Dot />
      <Digit num={numbersTimes.firstMinutes} />
      <Digit num={numbersTimes.secondMinutes} />
      <Dot />
      <Digit num={numbersTimes.firstSeconds} />
      <Digit num={numbersTimes.secondSeconds} />
    </div>
  );
}

export default App;