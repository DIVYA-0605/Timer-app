import { useState } from "react";
import TimerForm from "./components/TimerForm";
import TimerList from "./components/TimerList";
import "./App.css";

function App() {
  const [timers, setTimers] = useState([]);

  function handleTimerCreate(duration) {
    const timer = {
      id: Date.now(),
      createdAt: new Date(),
      duration,
    };

    setTimers([...timers, timer]);
  }

  function handleTimerRemove(id) {
    setTimers(timers.filter((timer) => timer.id !== id));
  }

  return (
    <div className="container">
      <TimerList timers={timers} onTimerRemove={handleTimerRemove} />
      <TimerForm onTimerCreate={handleTimerCreate} />
    </div>
  );
}

export default App;
