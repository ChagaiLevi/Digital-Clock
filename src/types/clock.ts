export type DateFormat =
  | "shortcut_name"
  | "full_name"
  | "dd/mm/yyyy"
  | "mm/dd/yyyy"
  | "yyyy/mm/dd"
  | "yyyy/dd/mm";

export type DayFormat = "shortcut" | "full" | "number";

export type TwoDigitParts = {
  first: number;
  second: number;
};

export type ClockDate = {
  day: {
    name: string;
    number: number;
  };
  dayDate: TwoDigitParts;
  month: {
    name: string;
    number: TwoDigitParts;
  };
  year: {
    first: number;
    second: number;
    third: number;
    fourth: number;
  };
};

export type ClockTime = {
  hours: TwoDigitParts & {
    ampm?: "AM" | "PM";
  };
  minutes: TwoDigitParts;
  seconds: TwoDigitParts;
};
