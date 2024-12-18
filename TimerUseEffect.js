import React , {useState, useEffect} from 'react';

function TimerUseEffect() {
    const [seconds,setSeconds] = useState(0);
    const [isRunning,setIsRunning] = useState(true);

    useEffect (() => {
        if(isRunning) {
                  const interval = setInterval(() => setSeconds((s) => s+1),1000);
        return () => clearInterval(interval);
        }
    },[isRunning]);
    
    return (
        <>
            <div>
                <p>
                Time: {seconds} seconds</p>
                <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "pause" : "resume"}</button>
                <button onClick={() => setSeconds(0)}>Reset</button>
            </div>
        </>
    )
}
export default TimerUseEffect;
