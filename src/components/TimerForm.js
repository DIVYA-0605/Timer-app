import { useState } from "react";

function TimerForm({ onTimerCreate }) {
  const [duration, setDuration] = useState("");

  function handleDurationChange(event) {
    setDuration(event.target.value);
  }

  function handleCreateClick() {
    if (duration) {
      onTimerCreate(duration);
      setDuration("");
    }
  }

  return (
    <div className="timer-form">
      <label>Duration (in seconds)</label>
      <input type="number" value={duration} onChange={handleDurationChange} />

      <button className="create-timer" onClick={handleCreateClick}>
        Create Timer
      </button>
    </div>
  );
}

export default TimerForm;
