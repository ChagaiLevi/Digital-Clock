import Signal from "./Signal";
import Digit from "./Digit";
// import Slash from "./Slash";
import { type dateProps } from "../App";

type dateElementProps = {
  date: dateProps;
}

const Date: React.FC<dateElementProps> = ({ date }) => {
  return (
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

      {/* <Slash /> */}
    </div>
  )
}

export default Date