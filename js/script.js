"use strict";
let hours = [objects('hours0'), objects('hours1')];
let minutes = [objects('minutes0'), objects('minutes1')];
let seconds = [objects('seconds0'), objects('seconds1')];
setInterval(() => mainFunction(), 1000);
function objects(name) {
    return {
        up: () => lightOn(`${name}-up`),
        down: () => lightOn(`${name}-down`),
        downRight: () => lightOn(`${name}-downRight`),
        upRight: () => lightOn(`${name}-upRight`),
        downLeft: () => lightOn(`${name}-downLeft`),
        upLeft: () => lightOn(`${name}-upLeft`),
        center: () => lightOn(`${name}-center`),
    };
}
function mainFunction() {
    let date = new Date();
    let hoursNumber = date.getHours();
    let minutesNumber = date.getMinutes();
    let secondsNumber = date.getSeconds();
    if (hoursNumber < 10) {
        convertToNumber(hours[0], 0, 'hours0');
        convertToNumber(hours[1], hoursNumber, 'hours1');
    }
    else {
        convertToNumber(hours[0], Math.floor(hoursNumber / 10), 'hours0');
        convertToNumber(hours[1], hoursNumber % 10, 'hours1');
    }
    if (minutesNumber < 10) {
        convertToNumber(minutes[0], 0, 'minutes0');
        convertToNumber(minutes[1], minutesNumber, 'minutes1');
    }
    else {
        convertToNumber(minutes[0], Math.floor(minutesNumber / 10), 'minutes0');
        convertToNumber(minutes[1], minutesNumber % 10, 'minutes1');
    }
    if (secondsNumber < 10) {
        convertToNumber(seconds[0], 0, 'seconds0');
        convertToNumber(seconds[1], secondsNumber, 'seconds1');
    }
    else {
        convertToNumber(seconds[0], Math.floor(secondsNumber / 10), 'seconds0');
        convertToNumber(seconds[1], secondsNumber % 10, 'seconds1');
    }
}
function lightOn(classValue) {
    const element = document.querySelector(`.${classValue}`);
    element.classList.add('on');
}
function convertToNumber(value, number, name) {
    clearLights(name);
    switch (number) {
        case 1:
            value.upRight();
            value.downRight();
            break;
        case 2:
            value.up();
            value.upRight();
            value.center();
            value.downLeft();
            value.down();
            break;
        case 3:
            value.up();
            value.upRight();
            value.center();
            value.downRight();
            value.down();
            break;
        case 4:
            value.upRight();
            value.center();
            value.upLeft();
            value.downRight();
            break;
        case 5:
            value.up();
            value.upLeft();
            value.center();
            value.downRight();
            value.down();
            break;
        case 6:
            value.up();
            value.upLeft();
            value.downLeft();
            value.down();
            value.downRight();
            value.center();
            break;
        case 7:
            value.up();
            value.upRight();
            value.downRight();
            break;
        case 8:
            value.up();
            value.upLeft();
            value.upRight();
            value.center();
            value.downLeft();
            value.downRight();
            value.down();
            break;
        case 9:
            value.center();
            value.upLeft();
            value.up();
            value.upRight();
            value.downRight();
            value.down();
            break;
        case 0:
            value.upLeft();
            value.up();
            value.upRight();
            value.downLeft();
            value.downRight();
            value.down();
            break;
    }
}
function clearLights(arrayName) {
    const up = document.querySelector(`.${arrayName}-up`);
    const down = document.querySelector(`.${arrayName}-down`);
    const downRight = document.querySelector(`.${arrayName}-downRight`);
    const upRight = document.querySelector(`.${arrayName}-upRight`);
    const downLeft = document.querySelector(`.${arrayName}-downLeft`);
    const upLeft = document.querySelector(`.${arrayName}-upLeft`);
    const center = document.querySelector(`.${arrayName}-center`);
    up.classList.contains('on') ? up.classList.remove('on') : null;
    down.classList.contains('on') ? down.classList.remove('on') : null;
    downRight.classList.contains('on') ? downRight.classList.remove('on') : null;
    upRight.classList.contains('on') ? upRight.classList.remove('on') : null;
    downLeft.classList.contains('on') ? downLeft.classList.remove('on') : null;
    upLeft.classList.contains('on') ? upLeft.classList.remove('on') : null;
    center.classList.contains('on') ? center.classList.remove('on') : null;
}
