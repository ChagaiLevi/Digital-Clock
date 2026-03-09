import { useEffect, useState } from "react";

type SettingsPageProps = {
  isOpen: boolean;
  setIsMeridiem?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingsPage = ({ isOpen, setIsMeridiem }: SettingsPageProps) => {
  const [timeFormat, setTimeFormat] = useState("24h");
  const [dateFormat, setDateFormat] = useState("shortcut_name");
  const [dayFormat, setDayFormat] = useState("shortcut");
  const [changedSelect, setChangedSelect] = useState<string | null>(null);

  useEffect(() => {
    if (!changedSelect) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setChangedSelect(null);
    }, 500);

    return () => window.clearTimeout(timeoutId);
  }, [changedSelect]);

  return (
    <div id="sidebar" className={isOpen ? "open" : ""}>
      <h2 style={{ textAlign: "center", margin: "30px 0" }}>Settings</h2>
      <div className="setting">
        <label htmlFor="time-format">Time format</label>
        <select
          id="time-format"
          value={timeFormat}
          className={changedSelect === "time-format" ? "changed" : ""}
          onChange={(event) => {
            setTimeFormat(event.target.value);
            setChangedSelect("time-format");

            if (setIsMeridiem) {
              setIsMeridiem(event.target.value === "12h");
            }
          }}
        >
          <option value="24h">24-H Format</option>
          <option value="12h">12-H Format</option>
        </select>
      </div>
      <div className="setting">
        <label htmlFor="date-format">Date settings</label>
        <select
          id="date-format"
          value={dateFormat}
          className={changedSelect === "date-format" ? "changed" : ""}
          onChange={(event) => {
            setDateFormat(event.target.value);
            setChangedSelect("date-format");
          }}
        >
          <option value="shortcut_name">Shortcut name</option>
          <option value="full_name">Full name</option>
          <option value="dd/mm/yyyy">DD/MM/YYYY</option>
          <option value="mm/dd/yyyy">MM/DD/YYYY</option>
          <option value="dd mm yyyy">DD MM YYYY</option>
          <option value="mm dd yyyy">MM DD YYYY</option>
        </select>
      </div>
      <div className="setting">
        <label htmlFor="day">Day</label>
        <select
          id="day"
          value={dayFormat}
          className={changedSelect === "day" ? "changed" : ""}
          onChange={(event) => {
            setDayFormat(event.target.value);
            setChangedSelect("day");
          }}
        >
          <option value="shortcut">Shortcut</option>
          <option value="full">Full</option>
        </select>
      </div>
    </div>
  )
}

export default SettingsPage
