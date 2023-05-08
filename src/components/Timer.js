import { useState, useEffect } from "react";

function Timer({ createdAt, remainingTime, onTimerRemove }) {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (remainingTime <= 0) {
      setIsExpired(true);
    }
  }, [remainingTime]);

  useEffect(() => {
    if (isExpired) {
      setTimeout(() => {
        onTimerRemove();
      }, 1000);
    }
  }, [isExpired, onTimerRemove]);

  function formatTime(time) {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    const milliseconds = Math.floor((time % 1) * 100)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds},${milliseconds}`;
  }

  const formattedCreatedAt = createdAt.toLocaleString();
  const formattedRemainingTime = formatTime(remainingTime);

  return (
    <div className="timers">
      <div className="timer-header">
        <div>{formattedCreatedAt}</div>
        <div>{formattedRemainingTime}</div>
      </div>
      {isExpired && <div className="timer-expired">Timer expired</div>}
      {!isExpired && (
        <button className="timer-remove" onClick={onTimerRemove}>
          Remove
        </button>
      )}
    </div>
  );
}

export default Timer;
