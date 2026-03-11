import Signal from "./Signal";
import Digit from "./Digit";
import Slash from "./Slash";
import { type dateProps } from "../App";

type dateElementProps = {
  date: dateProps;
  valOfDate: string;
  valOfDay: string;
}

const Date: React.FC<dateElementProps> = ({ date, valOfDate, valOfDay }) => {
  const dateFuntion = () => {
    const dayNumberElements = (
      <>
        <Digit num={date.dayDate.first} small />
        <Digit num={date.dayDate.second} small />
      </>
    );
    const monthNumberElements = (
      <>
        <Digit num={date.month.firstNumber} small />
        <Digit num={date.month.secondNumber} small />
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

    switch (valOfDate) {
      case 'shortcut_name':
        return (
          <>
            <Signal signal={date.month.text()[0]} />
            <Signal signal={date.month.text()[1]} />
            <Signal signal={date.month.text()[2]} />
            <div className="spacer"></div>
            {dayNumberElements}
            <div className="spacer"></div>
            {yearNumberElements}
            <div className="spacer"></div>
          </>
        );
      case 'full_name':
        return (
          <>
            {date.month.text().map((char: any, index: any) => (
              <Signal key={index} signal={char} />
            ))}
            <div className="spacer"></div>
            {dayNumberElements}
            <div className="spacer"></div>
            {yearNumberElements}
            <div className="spacer"></div>
          </>
        );
      case 'dd/mm/yyyy':
        return (
          <>
            {dayNumberElements}
            <Slash />
            {monthNumberElements}
            <Slash />
            {yearNumberElements}
          </>
        );
      case 'mm/dd/yyyy':
        return (
          <>
            {monthNumberElements}
            <Slash />
            {dayNumberElements}
            <Slash />
            {yearNumberElements}
          </>
        );
      case 'yyyy/mm/dd':
        return (
          <>
            {yearNumberElements}
            <Slash />
            {monthNumberElements}
            <Slash />
            {dayNumberElements}
          </>
        );
      case 'yyyy/dd/mm':
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

  const dayFuntion = () => {
    switch (valOfDay) {
      case 'shortcut':
        return (
          <>
            <Signal signal={date.day.text()[0]} />
            <Signal signal={date.day.text()[1]} />
            <Signal signal={date.day.text()[2]} />
          </>
        );
      case 'full':
        return (
          <>
            {date.day.text().map((char: any, index: any) => (
              <Signal key={index} signal={char} />
            ))}
          </>
        );
      case 'number':
        return (
          <>
            <Signal signal={'D'} />
            <Signal signal={'A'} />
            <Signal signal={'Y'} />
            <div className="spacer"></div>
            <Digit num={date.day.number} small />
          </>
        );
    }
  };

  return (
    <div className="date">
      {dayFuntion()}
      <div className="spacer"></div>
      {dateFuntion()}
      <div className="spacer"></div>
    </div>
  )
}

export default Date