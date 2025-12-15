import type { JSX } from "react";
import type React from "react";

type NumberProps = {
  up: boolean;
  down: boolean;
  downRight: boolean;
  upRight: boolean;
  downLeft: boolean;
  upLeft: boolean;
  center: boolean;
};

const Digit: React.FC<{ num: number | null, small?: boolean }> = ({ num, small = false }) => {
  const numberElements: NumberProps = {
    up: false,
    down: false,
    downRight: false,
    upRight: false,
    downLeft: false,
    upLeft: false,
    center: false,
  };

  const on = (numberElement: boolean): string => (numberElement ? `${small ? 'small-' : ''}on` : "");

  const clear: () => void = () => {
    for (const key in numberElements) {
      numberElements[key as keyof NumberProps] = false;
    }
  };

  const theFunction: () => void = () => {
    if (num === null) return;
    clear();

    switch (num) {
      case 1:
        numberElements.upRight = true;
        numberElements.downRight = true;
        break;
      case 2:
        numberElements.up = true;
        numberElements.upRight = true;
        numberElements.center = true;
        numberElements.downLeft = true;
        numberElements.down = true;
        break;
      case 3:
        numberElements.up = true;
        numberElements.upRight = true;
        numberElements.center = true;
        numberElements.downRight = true;
        numberElements.down = true;
        break;
      case 4:
        numberElements.upRight = true;
        numberElements.center = true;
        numberElements.upLeft = true;
        numberElements.downRight = true;
        break;
      case 5:
        numberElements.up = true;
        numberElements.upLeft = true;
        numberElements.center = true;
        numberElements.downRight = true;
        numberElements.down = true;
        break;
      case 6:
        numberElements.up = true;
        numberElements.upLeft = true;
        numberElements.downLeft = true;
        numberElements.down = true;
        numberElements.downRight = true;
        numberElements.center = true;
        break;
      case 7:
        numberElements.up = true;
        numberElements.upRight = true;
        numberElements.downRight = true;
        break;
      case 8:
        numberElements.up = true;
        numberElements.upLeft = true;
        numberElements.upRight = true;
        numberElements.center = true;
        numberElements.downLeft = true;
        numberElements.downRight = true;
        numberElements.down = true;
        break;
      case 9:
        numberElements.center = true;
        numberElements.upLeft = true;
        numberElements.up = true;
        numberElements.upRight = true;
        numberElements.downRight = true;
        numberElements.down = true;
        break;
      case 0:
        numberElements.upLeft = true;
        numberElements.up = true;
        numberElements.upRight = true;
        numberElements.downLeft = true;
        numberElements.downRight = true;
        numberElements.down = true;
        break;
    }
  };

  const element: (signalNumber: number, side: boolean) => JSX.Element = (signalNumber, side) => {
    const signal: string = `${signalNumber === 1 ? "a" : signalNumber === 2 ? "b" : signalNumber === 3 ? "c" : signalNumber === 4 ? "d" : signalNumber === 5 ? "e" : signalNumber === 6 ? "f" : "g"}`;
    const element: JSX.Element = <div className={`${small ? 'small-' : ''}segment ${signal} ${on(side)}`}></div>;
    return element;
  }

  //element(1, numberElements.up);
  theFunction();

  return (
    <div className={`${small ? 'small-' : ''}digit`}>
      {element(1, numberElements.up)}
      {element(2, numberElements.upRight)}
      {element(3, numberElements.downRight)}
      {element(4, numberElements.down)}
      {element(5, numberElements.downLeft)}
      {element(6, numberElements.upLeft)}
      {element(7, numberElements.center)}
    </div>
  );
};

export default Digit;