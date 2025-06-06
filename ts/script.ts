type objectsType = {
  up: () => void;
  down: () => void;
  downRight: () => void;
  upRight: () => void;
  downLeft: () => void;
  upLeft: () => void;
  center: () => void;
}

let hours: objectsType[] = [objects('hours0'), objects('hours1')];
let minutes: objectsType[] = [objects('minutes0'), objects('minutes1')];
let seconds: objectsType[] = [objects('seconds0'), objects('seconds1')];

function lightOn(classValue: string): void {
  const element: HTMLDivElement = document.querySelector(`.${classValue}`) as HTMLDivElement;
  element.classList.add('on');
}

function objects(name: string): any {
  return {
    up: () => lightOn(`${name}-up`),
    down: () => lightOn(`${name}-down`),
    downRight: () => lightOn(`${name}-downRight`),
    upRight: () => lightOn(`${name}-upRight`),
    downLeft: () => lightOn(`${name}-downLeft`),
    upLeft: () => lightOn(`${name}-upLeft`),
    center: () => lightOn(`${name}-center`),
  }
}