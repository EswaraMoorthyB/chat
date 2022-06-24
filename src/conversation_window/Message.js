import React from "react";

import "../chat.css"

export function Message({message, currentUser}) {
    const { From, Message, Time } = message;
    return (
        <div className={`message ${currentUser === From || From === 'Us001' ? 'myMessage' : null}`}>
            <div className="blackText">{From}</div>
            <div>{Message}</div>
            <div className="messageTime blackText">{Time || "10:00 AM"}</div>
        </div>
    )
}