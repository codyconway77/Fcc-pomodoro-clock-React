import React from 'react'
import moment from 'moment';

const Session = ({
    sessionLength,
    decrementSessionLengthByOneMinute,
    incrementSessionLengthByOneMinute
}) => {
    const sessionLengthInMinutes = moment.duration(sessionLength, 's').asMinutes();
    return (
        <div className="container max-w-md overflow-hidden shadow-lg rounded-2xl px-6 py-4 my-auto mx-auto bg-blue-400">
            <p className="font-bold text-center text-4xl px-auto py-2" id="session-label">Session</p>
            <p className="text-center text-3xl py-4" id="session-length">{sessionLengthInMinutes}</p>
            <div className="flex flex-row justify-between py-4">
                <button className="container-sm font-bold mx-auto px-6 py-2 rounded-lg bg-gray-200 text-red-700 text-3xl align-middle" id="session-decrement" onClick={decrementSessionLengthByOneMinute}>-</button>
                <button className="container-sm font-bold mx-auto px-6 py-2 rounded-lg bg-gray-200 text-green-700 text-3xl align-middle" id="session-increment" onClick={incrementSessionLengthByOneMinute}>+</button>
            </div>
        </div>
    )
}

export default Session;