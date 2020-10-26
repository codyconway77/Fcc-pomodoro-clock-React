import React from 'react'
import moment from 'moment';

const Break = ({
    breakLength,
    decrementBreakLengthByOneMinute,
    incrementBreakLengthByOneMinute
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, 's').asMinutes();
    return (
        <div className="container rounded-md px-6 py-4 my-auto mx-auto bg-blue-200">
            <p className="font-bold" id="break-label">Break</p>
            <p id="break-length">{breakLengthInMinutes}</p>
            <button id="break-decrement" onClick={decrementBreakLengthByOneMinute}>-</button>
            <button id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</button>
        </div>
    )
}

export default Break;
