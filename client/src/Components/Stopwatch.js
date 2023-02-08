import React, {useState, useEffect} from 'react'
import BreaksComponent from './BreaksComponent';

const StopWatch = () => {

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    
    useEffect(() => {
        let interval = null;
    
        if (isActive && isPaused === false) {
        interval = setInterval(() => {
            setTime((time) => time + 10);
        }, 10);
        } else {
        clearInterval(interval);
        }
        return () => {
        clearInterval(interval);
        };
    }, [isActive, isPaused]);
    
    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };
    
    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };
    
    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };
    return (  
        <BreaksComponent handleStart={handleStart} handlePauseResume={handlePauseResume} handleReset={handleReset}/>
    );
}

export default StopWatch;