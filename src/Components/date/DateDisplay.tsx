import type { ClockDate, DateFormat, DayFormat } from "../../types/clock";
import Digit from "../clock/Digit";
import Signal from "../clock/Signal";
import Slash from "../clock/Slash";

type DateDisplayProps = {
  date: ClockDate;
  valOfDate: DateFormat;
  valOfDay: DayFormat;
};

const renderLetters = (value: string) =>
  value.split("").map((char, index) => <Signal key={`${char}-${index}`} signal={char} />);

const DateDisplay = ({ date, valOfDate, valOfDay }: DateDisplayProps) => {
  const dayNumberElements = (
    <>
      <Digit num={date.dayDate.first} small />
      <Digit num={date.dayDate.second} small />
    </>
  );

  const monthNumberElements = (
    <>
      <Digit num={date.month.number.first} small />
      <Digit num={date.month.number.second} small />
    </>
  );

  const yearNumberElements = (
    <>
      <Digit num={date.year.first} small />
      <Digit num={date.year.second} small />
      <Digit num={date.year.third} small />
      <Digit num={date.year.fourth} small />
    </>
  );

  const renderDate = () => {
    switch (valOfDate) {
      case "shortcut_name":
        return (
          <>
            {renderLetters(date.month.name.slice(0, 3))}
            <div className="spacer"></div>
            {dayNumberElements}
            <div className="spacer"></div>
            {yearNumberElements}
            <div className="spacer"></div>
          </>
        );
      case "full_name":
        return (
          <>
            {renderLetters(date.month.name)}
            <div className="spacer"></div>
            {dayNumberElements}
            <div className="spacer"></div>
            {yearNumberElements}
            <div className="spacer"></div>
          </>
        );
      case "dd/mm/yyyy":
        return (
          <>
            {dayNumberElements}
            <Slash />
            {monthNumberElements}
            <Slash />
            {yearNumberElements}
          </>
        );
      case "mm/dd/yyyy":
        return (
          <>
            {monthNumberElements}
            <Slash />
            {dayNumberElements}
            <Slash />
            {yearNumberElements}
          </>
        );
      case "yyyy/mm/dd":
        return (
          <>
            {yearNumberElements}
            <Slash />
            {monthNumberElements}
            <Slash />
            {dayNumberElements}
          </>
        );
      case "yyyy/dd/mm":
        return (
          <>
            {yearNumberElements}
            <Slash />
            {dayNumberElements}
            <Slash />
            {monthNumberElements}
          </>
        );
    }
  };

  const renderDay = () => {
    switch (valOfDay) {
      case "shortcut":
        return renderLetters(date.day.name.slice(0, 3));
      case "full":
        return renderLetters(date.day.name);
      case "number":
        return (
          <>
            {renderLetters("DAY")}
            <div className="spacer"></div>
            <Digit num={date.day.number} small />
          </>
        );
    }
  };

  return (
    <div className="date">
      {renderDay()}
      <div className="spacer"></div>
      {renderDate()}
      <div className="spacer"></div>
    </div>
  );
};

export default DateDisplay;
