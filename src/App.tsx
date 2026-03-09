import { useState, useEffect } from "react";
import SettingsPage from "./Components/SettingsPage";
import SettingsButton from "./Components/SettingsButton";
import Clock from "./Components/Clock";
import Signal from "./Components/Signal";
import Digit from "./Components/Digit";

type dateProps = {
  day: { first: string | null; second: string | null; third: string | null; };
  dayDate: { first: number | null; second: number | null; };
  month: { first: string | null; second: string | null; third: string | null; };
  year: { first: number | null; second: number | null; third: number | null; fourth: number | null; };
}

export type NumberProps = {
  hours: { first: number | null; second: number | null, ampm: string | undefined; };
  minutes: { first: number | null; second: number | null; };
  seconds: { first: number | null; second: number | null; };
}

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMeridiem, setIsMeridiem] = useState(false);
  const [date, setDate] = useState<dateProps>({
    day: { first: null, second: null, third: null },
    dayDate: { first: null, second: null },
    month: { first: null, second: null, third: null },
    year: { first: null, second: null, third: null, fourth: null },
  });

  const [numbersTimes, setNumbersTimes] = useState<NumberProps>({
    hours: { first: null, second: null, ampm: undefined, },
    minutes: { first: null, second: null },
    seconds: { first: null, second: null },
  });

  useEffect(() => {
    const mainFunction = () => {
      const days: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const months: string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      const date = new Date();

      const dayNumber: number = date.getDay();
      let hoursNumber: number = date.getHours();
      const minutesNumber: number = date.getMinutes();
      const secondsNumber: number = date.getSeconds();
      const daysDateNumber: number = date.getDate();
      const monthsNumber: number = date.getMonth();
      const yearsNumber: number = date.getFullYear();
      let ampm: string | undefined = undefined;

      if (isMeridiem) {
        ampm = hoursNumber > 12 ? 'PM' : 'AM';
        hoursNumber = hoursNumber % 12 || 12;
      }

      setDate({
        day: {
          first: days[dayNumber].charAt(0),
          second: days[dayNumber].charAt(1),
          third: days[dayNumber].charAt(2),
        },
        dayDate: {
          first: daysDateNumber < 10 ? 0 : Math.floor(daysDateNumber / 10),
          second: daysDateNumber < 10 ? daysDateNumber : daysDateNumber % 10,
        },
        month: {
          first: months[monthsNumber].charAt(0),
          second: months[monthsNumber].charAt(1),
          third: months[monthsNumber].charAt(2),
        },
        year: {
          first: Math.floor(yearsNumber / 1000),
          second: Math.floor((yearsNumber % 1000) / 100),
          third: Math.floor((yearsNumber % 100) / 10),
          fourth: yearsNumber % 10,
        }
      })

      setNumbersTimes({
        hours: {
          first: hoursNumber < 10 ? 0 : Math.floor(hoursNumber / 10),
          second: hoursNumber < 10 ? hoursNumber : hoursNumber % 10,
          ampm,
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
  }, [isMeridiem]);

  return (
    <>
      {isSettingsOpen && (
        <button
          className="sidebar-backdrop"
          type="button"
          aria-label="Close settings"
          onClick={() => setIsSettingsOpen(false)}
        />
      )}
      <SettingsPage isOpen={isSettingsOpen} setIsMeridiem={setIsMeridiem} />
      <div id="wrapper" className={isSettingsOpen ? "shifted" : ""}>
        <div className="date">
          <Signal signal={date.day.first} />
          <Signal signal={date.day.second} />
          <Signal signal={date.day.third} />
          <div className="spacer"></div>

          <Signal signal={date.month.first} />
          <Signal signal={date.month.second} />
          <Signal signal={date.month.third} />
          <div className="spacer"></div>

          <Digit num={date.dayDate.first} small />
          <Digit num={date.dayDate.second} small />
          <div className="spacer"></div>

          <Digit num={date.year.first} small />
          <Digit num={date.year.second} small />
          <Digit num={date.year.third} small />
          <Digit num={date.year.fourth} small />
          <div className="spacer"></div>
        </div>

        <Clock numbersTimes={numbersTimes} isMeridiem={isMeridiem} />
      </div>
      <SettingsButton onClick={() => setIsSettingsOpen((current) => !current)} />
    </>
  );
}

export default App;
