"use strict";
let hours = [objects('hours0'), objects('hours1')];
let minutes = [objects('minutes0'), objects('minutes1')];
let seconds = [objects('seconds0'), objects('seconds1')];
function lightOn(classValue) {
    const element = document.querySelector(`.${classValue}`);
    element.classList.add('on');
}
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
