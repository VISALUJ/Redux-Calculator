import React, { useState, useEffect } from "react";
import "./stopwatch.css";
import useWindowSize from "./usewindowsize";
const Stopwatch = () => {
    const { width } = useWindowSize();

  const [time, setTime] = useState(0);

  
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
 
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliseconds = time % 100;

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
  };
  return (
    <div className="stopwatch-container"> 
    {width > 300 && (
      <>
        
      <p className="stopwatch-time">  
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <span className="stopwatch-buttons">
  
        <button className="stopwatch-button" onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </span>     
      </>
      )}
    </div>
  );
};

export default Stopwatch;