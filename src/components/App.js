import React, { useState, useEffect,useRef } from 'react';
import Break from './Break';
import Session from './Session';
import TimeLeft from './TimeLeft';

function App() {
  const audioElement = useRef(null)
  const [currentSessionType, setCurrentSessionType] = useState('Session');
  const [intervalId, setIntervalId] = useState(null);
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(60 * 5);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  useEffect(() => {
    setTimeLeft(sessionLength);    
  }, [sessionLength]);
  const isStarted = intervalId !== null;
  const handleStartStopClick = () => {
    if (isStarted) {
        clearInterval(intervalId);
        setIntervalId(null);
    } else {
    const newIntervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
            const newTimeLeft = prevTimeLeft - 1;
            if (newTimeLeft >= 0) {
                return newTimeLeft;
            }
            audioElement.current.play();
            if (currentSessionType === 'Session') {
                setCurrentSessionType('Break');
                return breakLength;
            }
            else if (currentSessionType === 'Break') {
                setCurrentSessionType('Session');
                return sessionLength;
            }
        });
    }, 1000);
    setIntervalId(newIntervalId);
    }

  }
  const decrementSessionLengthByOneMinute = () => {
      const newSessionLength = sessionLength - 60;
      if (newSessionLength > 0) {
        setSessionLength(newSessionLength);
      }
  }
  const incrementSessionLengthByOneMinute = () => {
      const newSessionLength = sessionLength + 60;
      if (newSessionLength <= 60 * 60) {
        setSessionLength(newSessionLength);
      }
  }
  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60;
    if (newBreakLength > 0) {
      setBreakLength(newBreakLength);
    }
}
const incrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength + 60;
    if (newBreakLength <= 60 * 60) {
    setBreakLength(newBreakLength);
    }
}
const handleResetButtonClick= () => {
  audioElement.current.load();
  clearInterval(intervalId);
  setIntervalId(null);
  setCurrentSessionType("Session");
  setSessionLength(60 * 25);
  setBreakLength(60 * 5);
  setTimeLeft(60 * 25);
}
  return (
    <div className="App h-screen grid grid-cols-3 bg-purple-300">
      <Session 
      sessionLength={sessionLength} 
      decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
      incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute} />
      <TimeLeft 
      handleStartStopClick={handleStartStopClick}
      timerLabel={currentSessionType}
      timeLeft={timeLeft}
      startStopButtonLabel={intervalId ? 'Stop' : 'Start'} />
      <Break
      breakLength={breakLength}
      decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
      incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute} />
      <button className="container bg-red-200" id="reset" onClick={handleResetButtonClick}>Reset</button>
      <audio id="beep" ref={audioElement}>
        <source src="https://onlineclcok.net/audio/options/default.mp3" type="audio/mpeg" />
      </audio>  
    </div>
  );
}

export default App;
