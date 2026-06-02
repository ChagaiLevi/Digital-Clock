import type { ClockTime } from "../../types/clock";
import Digit from "./Digit";
import Dot from "./Dot";
import Signal from "./Signal";

type ClockProps = {
  numbersTimes: ClockTime;
  isMeridiem: boolean;
};

const Clock = ({ numbersTimes, isMeridiem }: ClockProps) => {
  const shouldShowFirstHourDigit = !isMeridiem || numbersTimes.hours.first !== 0;

  return (
    <div className="clock">
      {shouldShowFirstHourDigit && <Digit num={numbersTimes.hours.first} />}
      <Digit num={numbersTimes.hours.second} />
      <Dot />
      <Digit num={numbersTimes.minutes.first} />
      <Digit num={numbersTimes.minutes.second} />
      <Dot />
      <Digit num={numbersTimes.seconds.first} />
      <Digit num={numbersTimes.seconds.second} />
      <span></span>

      {isMeridiem && (
        <>
          <Signal signal={numbersTimes.hours.ampm === "AM" ? "A" : "P"} isMeridiem />
          <Signal signal="M" isMeridiem />
        </>
      )}
    </div>
  );
};

export default Clock;
