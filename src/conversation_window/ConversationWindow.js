import React, { useEffect, useState, useRef } from "react";
import { ChatPreview } from "../chat_list/ChatPreview";

import { Message } from "./Message";
import { InfoWindow } from "../info_window/InfoWindow";
import MockData from "../Mock Data.json"

export function ConversationWindow({ conversation = {} }) {
    const { Messages = [] } = conversation;
    const contactOrGroupId = conversation.Id;
    const [info, setInfo] = useState(false);
    const [updateState, setState] = useState(false);
    const details = useRef(MockData["contactOrGroupInfo"][contactOrGroupId]);

    useEffect(() => {
        // update whenever the selected chat id changes
        details.current = MockData["contactOrGroupInfo"][contactOrGroupId];
        // unmount the previous selected chat info window
        setInfo(false);
        setState(!updateState);
        requestAnimationFrame(() => {
            // always scroll to the last message
            document.querySelector(".messageList").scrollTo(0,document.querySelector(".messageList").scrollHeight);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contactOrGroupId])

    function toggleInfo() {
        setInfo(info ? false : details.current);
    }
    return (
        <div className="conversationWindow">
            <div>
                <ChatPreview onChatSelect={toggleInfo} chat={details.current} selectedChat={null} showDelete={false} />
                <div className="messageList">
                {
                    Messages.map((message, index) => {
                        return(
                            <Message key={index} message={message} currentUser={contactOrGroupId} />
                        )
                    })
                }
                </div>
            </div>
            {
                info &&
                <InfoWindow info={info} onHide={toggleInfo} />
            }
        </div>
    )
}