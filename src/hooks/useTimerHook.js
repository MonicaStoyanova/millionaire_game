import { useState, useEffect } from "react";

const useTimerHook = (num) => {
  const [seconds, setSeconds] = useState(num);
  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  return [seconds, setSeconds];
};

export default useTimerHook;
