import React, { useRef, useState } from "react";

import { ChatPreview } from "./ChatPreview";

export function ChatList({ chatList=[], onClick=() => {}, onDelete=()=>{} }) {
    const [chatsList, setChatList] = useState(chatList);
    const [selectedChat, setSelectedchat] = useState("");
    const staticChatList = useRef(chatList);
    function onSearch(evt) {
        let { value } = evt.target;
        if (value === "") {
            setChatList(staticChatList.current);
            return;
        }
        let chatsList = staticChatList.current.filter((chat) => {
            return chat.Name.toLowerCase().includes(value);
        });
        setChatList(chatsList);
    }
    function clickedChat(chat) {
        setSelectedchat(chat.RoomId);
        onClick(chat);
    }
    function deleteChat(chatDetails) {
        let newChatsList = chatsList.filter(chat => chat.RoomId !== chatDetails.RoomId);
        staticChatList.current = newChatsList;
        setChatList(newChatsList);
        onDelete(chatDetails);
    }
    return (
        <div className="leftNav">
            <input onChange={onSearch} placeholder="Search Contact/Group" />
            <div className="chatLists">
                {chatsList.map(chat => {
                    return <ChatPreview key={chat.RoomId}
                        onChatSelect={clickedChat}
                        chat={chat}
                        selectedChat={selectedChat}
                        onDeleteChat={deleteChat}
                     />
                })}
            </div>
        </div>
    )
}