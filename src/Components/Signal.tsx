import React from "react";
import type { JSX } from "react";

type SignalProps = {
  up: boolean;
  down: boolean;
  downRight: boolean;
  upRight: boolean;
  downLeft: boolean;
  upLeft: boolean;
  center: boolean;
  centerUp: boolean;
  centerDown: boolean;
  centerLeft: boolean;
  centerRight: boolean;
}

const Signal: React.FC<{ signal: string | null }> = ({ signal }) => {
  const signalElements: SignalProps = {
    up: false,
    down: false,
    downRight: false,
    upRight: false,
    downLeft: false,
    upLeft: false,
    center: false,
    centerUp: false,
    centerDown: false,
    centerLeft: false,
    centerRight: false,
  }
  let character: boolean = false;
  signal === 'M' || signal === 'N' ? character = true : character = false;

  const on = (signalElement: boolean): string => (signalElement ? 'small-on' : '');

  const clear: () => void = () => {
    for (const key in signalElements) {
      signalElements[key as keyof SignalProps] = false;
    }
  };

  const theFunction: () => void = () => {
    if (signal === null) return;
    clear();

    switch (signal) {
      case 'A':
        signalElements.up = true;
        signalElements.center = true;
        signalElements.upLeft = true;
        signalElements.upRight = true;
        signalElements.downLeft = true;
        signalElements.downRight = true;
        break;
      case 'B':
        signalElements.center = true;
        signalElements.upLeft = true;
        signalElements.downLeft = true;
        signalElements.down = true;
        signalElements.downRight = true;
        break;
      case 'C':
        signalElements.up = true;
        signalElements.down = true;
        signalElements.downLeft = true;
        signalElements.upLeft = true;
        break;
      case 'D':
        signalElements.upRight = true;
        signalElements.downRight = true;
        signalElements.down = true;
        signalElements.downLeft = true;
        signalElements.center = true;
        break;
      case 'E':
        signalElements.up = true;
        signalElements.center = true;
        signalElements.down = true;
        signalElements.upLeft = true;
        signalElements.downLeft = true;
        break;
      case 'F':
        signalElements.up = true;
        signalElements.center = true;
        signalElements.upLeft = true;
        break;
      case 'G':
        signalElements.up = true;
        signalElements.down = true;
        signalElements.center = true;
        signalElements.upLeft = true;
        signalElements.downRight = true;
        break;
      case 'H':
        signalElements.center = true;
        signalElements.upLeft = true;
        signalElements.upRight = true;
        signalElements.downLeft = true;
        signalElements.downRight = true;
        break;
      case 'I':
        signalElements.up = true;
        signalElements.down = true;
        signalElements.upRight = true;
        signalElements.downRight = true;
        break;
      case 'J':
        signalElements.up = true;
        signalElements.down = true;
        signalElements.downRight = true;
        signalElements.upRight = true;
        break;
      case 'L':
        signalElements.down = true;
        signalElements.downLeft = true;
        signalElements.upLeft = true;
        break;
      case 'M':
        // ! Not implemented
        break;
      case 'N':
        // ! Not implemented
        break;
      case 'O':
        signalElements.up = true;
        signalElements.down = true;
        signalElements.upLeft = true;
        signalElements.upRight = true;
        signalElements.downLeft = true;
        signalElements.downRight = true;
        break;
      case 'P':
        signalElements.up = true;
        signalElements.center = true;
        signalElements.upLeft = true;
        signalElements.upRight = true;
        break;
      case 'R':
        signalElements.up = true;
        signalElements.center = true;
        signalElements.upLeft = true;
        signalElements.upRight = true;
        signalElements.downRight = true;
        break;
      case 'S':
        signalElements.up = true;
        signalElements.center = true;
        signalElements.down = true;
        signalElements.upRight = true;
        signalElements.downLeft = true;
        break;
      case 'T':
        signalElements.up = true;
        signalElements.center = true;
        signalElements.down = true;
        signalElements.upLeft = true;
        break;
      case 'U':
        signalElements.down = true;
        signalElements.upLeft = true;
        signalElements.upRight = true;
        signalElements.downLeft = true;
        signalElements.downRight = true;
        break;
      case 'V':
        signalElements.down = true;
        signalElements.downLeft = true;
        signalElements.downRight = true;
        break;
      case 'Y':
        signalElements.up = true;
        signalElements.center = true;
        signalElements.down = true;
        signalElements.upRight = true;
        signalElements.downRight = true;
        break;
    }
  }

  const element: (signalNumber: number, side: boolean) => JSX.Element = (signalNumber, side) => {
    const signal: string = `${signalNumber === 1 ? "a" : signalNumber === 2 ? "b" : signalNumber === 3 ? "c" : signalNumber === 4 ? "d" : signalNumber === 5 ? "e" : signalNumber === 6 ? "f" : "g"}`;
    const element: JSX.Element = <div className={`small-segment ${signal} ${on(side)}`}></div>;
    return element;
  }

  theFunction();
  return (
    <div className="small-digit">
      {element(1, signalElements.up)}
      {element(2, signalElements.upRight)}
      {element(3, signalElements.downRight)}
      {element(4, signalElements.down)}
      {element(5, signalElements.downLeft)}
      {element(6, signalElements.upLeft)}
      {element(7, signalElements.center)}

      {character &&
        <div className="small-digit expansion2">
          <div className="small-segment a small-on expansion"></div>
          <div className="small-segment e small-on"></div>
          <div className="small-segment f small-on"></div>
        </div>
      }

      {/*<>
      <div className="small-digit">
        <div className="small-segment a"></div>
        <div className="small-segment b small-on"></div>
        <div className="small-segment c small-on"></div>
        <div className="small-segment d small-on"></div>
        <div className="small-segment e small-on"></div>
        <div className="small-segment f"></div>
        <div className="small-segment g small-on"></div>
      </div>
      <div className="small-digit expansion2">
        <div className="small-segment a small-on expansion"></div>
        <div className="small-segment e small-on"></div>
        <div className="small-segment f small-on"></div>
      </div>
      <div className="small-digit">
        <div className="small-segment a small-on"></div>
        <div className="small-segment b"></div>
        <div className="small-segment c"></div>
        <div className="small-segment d small-on"></div>
        <div className="small-segment e small-on"></div>
        <div className="small-segment f small-on"></div>
        <div className="small-segment g small-on"></div>
      </div>
      <div className="small-digit">
        <div className="small-segment a small-on"></div>
        <div className="small-segment b"></div>
        <div className="small-segment c"></div>
        <div className="small-segment d small-on"></div>
        <div className="small-segment e small-on"></div>
        <div className="small-segment f small-on"></div>
        <div className="small-segment g"></div>
      </div>
    </>*/}
    </div>
  )
}

export default Signal