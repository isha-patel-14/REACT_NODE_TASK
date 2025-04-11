import React, { useState, useEffect } from 'react';
import './timer.css';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timerId); // Cleanup on stop or unmount
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <div className="timer-container">
      <h2>Timer: {seconds} sec</h2>
      <div className="timer-buttons">
        <button onClick={handleStart} className="start-btn">Start</button>
        <button onClick={handleStop} className="stop-btn">Stop</button>
      </div>
    </div>
  );
}

export default Timer;
