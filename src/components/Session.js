import React from 'react'
import moment from 'moment';

const Session = ({
    sessionLength,
    decrementSessionLengthByOneMinute,
    incrementSessionLengthByOneMinute
}) => {
    const sessionLengthInMinutes = moment.duration(sessionLength, 's').asMinutes();
    return (
        <div className="container rounded-lg px-6 py-4 my-auto mx-auto bg-blue-200">
            <p className="font-bold text-center px-auto" id="session-label">Session</p>
            <p className="text-center" id="session-length">{sessionLengthInMinutes}</p>
            <div className="flex flex-row justify-center">
                <button className="container-sm px-6 py-2 border-4 border-gray-400 bg-gray-200 text-red-700 text-3xl align-middle" id="session-decrement" onClick={decrementSessionLengthByOneMinute}>-</button>
                <button className="box-content px-6 py-2 border-4 border-gray-400 bg-gray-200 text-green-700 text-3xl align-middle" id="session-increment" onClick={incrementSessionLengthByOneMinute}>+</button>
            </div>
        </div>
    )
}

export default Session;