import React from 'react'
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment)

const TimeLeft = ({ timeLeft,
    timerLabel,
    handleStartStopClick, 
    startStopButtonLabel }) => {
    
    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
    return (
        <div className="container my-auto px-6 py-6 rounded-lg bg-green-200 place-items-center">
            <p className="border-4 text-center" id="timer-label">{timerLabel}</p>
            <p className="text-center" id="time-left">{formattedTimeLeft}</p>  
            <button className="m-0" id="start_stop" onClick={handleStartStopClick}>{startStopButtonLabel}</button> 
        </div>
    )
}

export default TimeLeft
