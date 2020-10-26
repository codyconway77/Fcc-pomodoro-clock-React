import React from 'react'
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment)

const TimeLeft = ({ timeLeft,
    timerLabel,
    handleStartStopClick, 
    startStopButtonLabel,
    handleResetButtonClick }) => {
    
    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
    return (
        <div className="container overflow-hidden shadow-lg my-auto px-6 py-6 rounded-2xl bg-teal-500 place-items-center">
            <p className="font-bold text-center text-5xl py-4" id="timer-label">{timerLabel}</p>
            <p className="text-center text-white text-6xl mx-auto py-8" id="time-left">{formattedTimeLeft}</p>
            <div className="flex flex-column justify-around mx-auto py-4">  
                <button className="container-sm bg-white rounded-full px-4 py-4 font-bold" id="start_stop" onClick={handleStartStopClick}>{startStopButtonLabel}</button> 
                <button className="container-sm bg-white rounded-full px-4 py-4 font-bold" id="reset" onClick={handleResetButtonClick}>Reset</button>
            </div>    
        </div>
    )
}

export default TimeLeft
