import { useEffect, useState } from "react";
import { getClockSnapshot } from "../lib/dateTime";

export const useClockTime = (isMeridiem: boolean) => {
  const [clockSnapshot, setClockSnapshot] = useState(() => getClockSnapshot(isMeridiem));

  useEffect(() => {
    const updateClock = () => {
      setClockSnapshot(getClockSnapshot(isMeridiem));
    };

    updateClock();
    const intervalId = window.setInterval(updateClock, 1000);

    return () => window.clearInterval(intervalId);
  }, [isMeridiem]);

  return clockSnapshot;
};
