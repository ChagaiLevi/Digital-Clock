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

const Digit: React.FC<{ num: number | null }> = ({ num }) => {
  const numberElements: NumberProps = {
    up: false,
    down: false,
    downRight: false,
    upRight: false,
    downLeft: false,
    upLeft: false,
    center: false,
  };

  const on = (numberElement: boolean): string => (numberElement ? "on" : "");

  const clear = () => {
    for (const key in numberElements) {
      numberElements[key as keyof NumberProps] = false;
    }
  };

  const theFunction = () => {
    if (num === null) return; // טיפול במקרה של null
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

  theFunction();

  return (
    <div className="digit">
      <div className={`segment a ${on(numberElements.up)}`}></div>
      <div className={`segment b ${on(numberElements.upRight)}`}></div>
      <div className={`segment c ${on(numberElements.downRight)}`}></div>
      <div className={`segment d ${on(numberElements.down)}`}></div>
      <div className={`segment e ${on(numberElements.downLeft)}`}></div>
      <div className={`segment f ${on(numberElements.upLeft)}`}></div>
      <div className={`segment g ${on(numberElements.center)}`}></div>
    </div>
  );
};

export default Digit;