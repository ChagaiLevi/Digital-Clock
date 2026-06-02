import { useEffect, useState } from "react";
import Clock from "./Components/clock/Clock";
import DateDisplay from "./Components/date/DateDisplay";
import SettingsButton from "./Components/settings/SettingsButton";
import SettingsPage from "./Components/settings/SettingsPage";
import { useClockTime } from "./hooks/useClockTime";
import type { DateFormat, DayFormat } from "./types/clock";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isMeridiem, setIsMeridiem] = useState<boolean>(localStorage.getItem('isMeridiem') === 'true');
  const [valOfDate, setValOfDate] = useState<DateFormat>((localStorage.getItem('valOfDate') as DateFormat) || 'shortcut_name');
  const [valOfDay, setValOfDay] = useState<DayFormat>((localStorage.getItem('valOfDay') as DayFormat) || 'shortcut');
  const { date, time } = useClockTime(isMeridiem);

  useEffect(() => {
    localStorage.setItem('isMeridiem', JSON.stringify(isMeridiem));
    localStorage.setItem('valOfDate', valOfDate);
    localStorage.setItem('valOfDay', valOfDay);
  }, [isMeridiem, valOfDate, valOfDay]);

  return (
    <div className="app">
      {isSettingsOpen && (<button className="sidebar-backdrop" type="button" aria-label="Close settings" onClick={() => setIsSettingsOpen(false)} />)}
      <SettingsPage isOpen={isSettingsOpen} isMeridiem={isMeridiem} setIsMeridiem={setIsMeridiem} valOfDate={valOfDate} setValOfDate={setValOfDate} valOfDay={valOfDay} setValOfDay={setValOfDay} />
      <div id="wrapper" className={isSettingsOpen ? "shifted" : ""}>
        <DateDisplay date={date} valOfDate={valOfDate} valOfDay={valOfDay} />
        <Clock numbersTimes={time} isMeridiem={isMeridiem} />
      </div>
      <SettingsButton onClick={() => setIsSettingsOpen((current) => !current)} />
    </div>
  );
}

export default App;
