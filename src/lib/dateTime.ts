import type { ClockDate, ClockTime, TwoDigitParts } from "../types/clock";

const DAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const MONTHS = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const getTwoDigitParts = (value: number): TwoDigitParts => ({
  first: value < 10 ? 0 : Math.floor(value / 10),
  second: value < 10 ? value : value % 10,
});

const getYearParts = (year: number): ClockDate["year"] => ({
  first: Math.floor(year / 1000),
  second: Math.floor((year % 1000) / 100),
  third: Math.floor((year % 100) / 10),
  fourth: year % 10,
});

export const getClockSnapshot = (isMeridiem: boolean): { date: ClockDate; time: ClockTime } => {
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  const monthIndex = currentDate.getMonth();
  let hours = currentDate.getHours();
  let ampm: "AM" | "PM" | undefined;

  if (isMeridiem) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  return {
    date: {
      day: {
        name: DAYS[dayIndex],
        number: dayIndex + 1,
      },
      dayDate: getTwoDigitParts(currentDate.getDate()),
      month: {
        name: MONTHS[monthIndex],
        number: getTwoDigitParts(monthIndex + 1),
      },
      year: getYearParts(currentDate.getFullYear()),
    },
    time: {
      hours: {
        ...getTwoDigitParts(hours),
        ampm,
      },
      minutes: getTwoDigitParts(currentDate.getMinutes()),
      seconds: getTwoDigitParts(currentDate.getSeconds()),
    },
  };
};
