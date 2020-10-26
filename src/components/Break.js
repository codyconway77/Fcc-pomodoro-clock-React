import React from 'react'
import moment from 'moment';

const Break = ({
    breakLength,
    decrementBreakLengthByOneMinute,
    incrementBreakLengthByOneMinute
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, 's').asMinutes();
    return (
        <div className="container max-w-md overflow-hidden shadow-lg rounded-2xl px-6 py-4 my-auto mx-auto bg-blue-400">
            <p className="font-bold text-center text-4xl px-auto py-2" id="break-label">Break</p>
            <p className="text-center text-3xl py-4" id="break-length">{breakLengthInMinutes}</p>
            <div className="flex flex-row justify-between py-4">
                <button className="container-sm font-bold mx-auto px-6 py-2 rounded-lg bg-gray-200 text-red-700 text-3xl align-middle" id="break-decrement" onClick={decrementBreakLengthByOneMinute}>-</button>
                <button className="container-sm font-bold mx-auto px-6 py-2 rounded-lg bg-gray-200 text-green-700 text-3xl align-middle" id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</button>
            </div>    
        </div>
    )
}

export default Break;
