import Digit from "./Digit"
import Dot from "./Dot"
import Signal from "./Signal";
import { type NumberProps } from "../App"

type ClockProps = {
  numbersTimes: NumberProps;
  isMeridiem: boolean;
};

const Clock: React.FC<ClockProps> = ({ numbersTimes, isMeridiem }) => {
  return (
    <div className="clock">
      {(!isMeridiem || isMeridiem && numbersTimes.hours.first !== 0) && <Digit num={numbersTimes.hours.first} />}
      <Digit num={numbersTimes.hours.second} />
      <Dot />
      <Digit num={numbersTimes.minutes.first} />
      <Digit num={numbersTimes.minutes.second} />
      <Dot />
      <Digit num={numbersTimes.seconds.first} />
      <Digit num={numbersTimes.seconds.second} />
      <span></span>

      {isMeridiem &&
        <>
          {numbersTimes.hours.ampm === 'AM' ? (
            <Signal signal={'A'} isMeridiem={true} />
          ) : (
            <Signal signal={'P'} isMeridiem={true} />
          )}

          <Signal signal={'M'} isMeridiem={true} />
        </>
      }
    </div>
  )
}

export default Clock