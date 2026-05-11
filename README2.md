84. countdown

import React, { useState, useEffect, useRef } from 'react';

function Countdown({ initialSeconds }) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds <= 0) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const remainingSeconds = timeInSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <h1>Countdown</h1>
      <p>{formatTime(seconds)}</p>
    </div>
  );
}

export default Countdown;

85. timer

import React, { useState, useRef } from 'react';

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handlePause = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    
      <h2>Timer: {formatTime(time)}</h2>
      <button onClick={handleStart} disabled={isRunning}>Start</button>
      <button onClick={handlePause} disabled={!isRunning}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    
  );
}

export default Timer;

1. Create a css modal pop up using css3 and html5
2. How to optimization in react 
3. Webpack
4. When js is disabled how browser will behave
5. ragex
6. Why to prefer session , local and cookies
7. Server site 
8. Js Securities 
9. malware attack
10. Ajax
