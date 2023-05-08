import { useEffect, useState } from "react";
import Timer from "../components/Timer";

function TimerList({ timers, onTimerRemove }) {
  const [remainingTimes, setRemainingTimes] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedRemainingTimes = {};
      timers.forEach((timer) => {
        const now = new Date();
        const endTime = new Date(
          timer.createdAt.getTime() + timer.duration * 1000
        );
        const remainingTime =
          Math.max(0, endTime.getTime() - now.getTime()) / 1000;
        updatedRemainingTimes[timer.id] = remainingTime;
      });
      setRemainingTimes(updatedRemainingTimes);
    }, 10);

    return () => clearInterval(intervalId);
  }, [timers]);

  return (
    <div className="timer-list">
      {timers.map((timer) => (
        <div key={timer.id} className="timer">
          <Timer
            createdAt={timer.createdAt}
            remainingTime={remainingTimes[timer.id]}
            onTimerRemove={() => onTimerRemove(timer.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default TimerList;
