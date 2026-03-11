import { useState, useEffect } from "react";
import SettingsPage from "./Components/SettingsPage";
import SettingsButton from "./Components/SettingsButton";
import Clock from "./Components/Clock";
import DateC from "./Components/Date";

export type dateProps = {
  day: { text: any; number: number | null; };
  dayDate: { first: number | null; second: number | null; };
  month: { text: any; firstNumber: number | null; secondNumber: number | null; };
  year: { first: number | null; second: number | null; third: number | null; fourth: number | null; };
}

export type NumberProps = {
  hours: { first: number | null; second: number | null, ampm: string | undefined; };
  minutes: { first: number | null; second: number | null; };
  seconds: { first: number | null; second: number | null; };
}

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isMeridiem, setIsMeridiem] = useState<boolean>(localStorage.getItem('isMeridiem') === 'true');
  const [valOfDate, setValOfDate] = useState<string>(localStorage.getItem('valOfDate') || 'shortcut_name');
  const [valOfDay, setValOfDay] = useState<string>(localStorage.getItem('valOfDay') || 'shortcut');
  const [date, setDate] = useState<dateProps>({
    day: { text: () => [Array(8).fill('')], number: null },
    dayDate: { first: null, second: null },
    month: { text: () => [Array(9).fill('')], firstNumber: null, secondNumber: null },
    year: { first: null, second: null, third: null, fourth: null },
  });

  const [numbersTimes, setNumbersTimes] = useState<NumberProps>({
    hours: { first: null, second: null, ampm: undefined, },
    minutes: { first: null, second: null },
    seconds: { first: null, second: null },
  });

  useEffect(() => {
    const mainFunction = () => {
      const days: string[] = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
      const months: string[] = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
      const dateData: Date = new Date();

      const dayNumber: number = dateData.getDay();
      let hoursNumber: number = dateData.getHours();
      const minutesNumber: number = dateData.getMinutes();
      const secondsNumber: number = dateData.getSeconds();
      const daysDateNumber: number = dateData.getDate();
      const monthsNumber: number = dateData.getMonth();
      const yearsNumber: number = dateData.getFullYear();
      let ampm: string | undefined = undefined;
      let firstFunction: any = (value: any) => {
        return value < 10 ? 0 : Math.floor(value / 10);
      };
      let secondFunction: any = (value: any) => {
        return value < 10 ? value : value % 10;
      };

      if (isMeridiem) {
        ampm = hoursNumber > 12 ? 'PM' : 'AM';
        hoursNumber = hoursNumber % 12 || 12;
      }

      setDate({
        day: {
          text: () => {
            let value: string[] = [];

            for (let i = 0; i < days[dayNumber].length; i++) {
              value.push(days[dayNumber].charAt(i));
            }
            return value;
          },
          number: dayNumber + 1,
        },
        dayDate: {
          first: firstFunction(daysDateNumber),
          second: secondFunction(daysDateNumber),
        },
        month: {
          text: () => {
            let value: string[] = [];

            for (let i = 0; i < months[monthsNumber].length; i++) {
              value.push(months[monthsNumber].charAt(i));
            }

            return value;
          },
          firstNumber: firstFunction(monthsNumber),
          secondNumber: secondFunction(monthsNumber),
        },
        year: {
          first: Math.floor(yearsNumber / 1000),
          second: Math.floor((yearsNumber % 1000) / 100),
          third: Math.floor((yearsNumber % 100) / 10),
          fourth: yearsNumber % 10,
        }
      });

      setNumbersTimes({
        hours: {
          first: firstFunction(hoursNumber),
          second: secondFunction(hoursNumber),
          ampm,
        },
        minutes: {
          first: firstFunction(minutesNumber),
          second: secondFunction(minutesNumber),
        },
        seconds: {
          first: firstFunction(secondsNumber),
          second: secondFunction(secondsNumber),
        },
      });
    };

    mainFunction();
    const intervalId = setInterval(mainFunction, 1000);

    return () => clearInterval(intervalId);
  }, [isMeridiem]);

  useEffect(() => {
    localStorage.setItem('isMeridiem', JSON.stringify(isMeridiem));
    localStorage.setItem('valOfDate', valOfDate);
    localStorage.setItem('valOfDay', valOfDay);
  }, [isMeridiem, valOfDate, valOfDay]);

  return (
    <div className="app">
      {isSettingsOpen && (<button className="sidebar-backdrop" type="button" aria-label="Close settings" onClick={() => setIsSettingsOpen(false)} />)}
      <SettingsPage isOpen={isSettingsOpen} setIsMeridiem={setIsMeridiem} setValOfDate={setValOfDate} setValOfDay={setValOfDay} />
      <div id="wrapper" className={isSettingsOpen ? "shifted" : ""}>
        <DateC date={date} valOfDate={valOfDate} valOfDay={valOfDay} />
        <Clock numbersTimes={numbersTimes} isMeridiem={isMeridiem} />
      </div>
      <SettingsButton onClick={() => setIsSettingsOpen((current) => !current)} />
    </div>
  );
}

export default App;