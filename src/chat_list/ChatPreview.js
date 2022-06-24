import React from "react";

import "../chat.css";

import NoDp from "./noDp.png";
import TrashIcon from "./trash.png";

export function ChatPreview({ chat, onChatSelect=() => {}, selectedChat, onDeleteChat=()=>{}, showDelete = true }) {
    return(
        chat && <div className={`chats ${chat?.RoomId === selectedChat ? 'selectedChat' : ""}`}>
            <div className="chatDp"><img src={chat.DP || NoDp} alt={"*"} width="45px" height="45px" /></div>
            <div onClick={() => {onChatSelect(chat)}} className='chatName'>
                <b>{chat.Name}</b>
                <div className="grayText">{chat.LastMessage}</div>
            </div>
            {chat?.HaveUnread && <div className="highLight" />}
            {showDelete &&
                <div className="chatOptions" onClick={() => {onDeleteChat(chat)}}>
                    <img src={TrashIcon} alt={"*"} width="20px" height={"20px"} />
                </div>
            }
        </div>
    )
}