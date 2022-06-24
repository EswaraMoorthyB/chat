import React, { useState, useRef } from 'react';

import { ChatList } from './chat_list/ChatList';
import { ConversationWindow } from './conversation_window/ConversationWindow';
import MockData from "./Mock Data.json";

import './chat.css';

function App() {
  const [selectedRoom, setSelectedRoom] = useState("");
  // alphabetically sorted reverse
  const sortedChatList = useRef(MockData.chatList.sort((a,b) =>  {
    if (a["Name"] < b["Name"]) return 1;
    if (a["Name"] > b["Name"]) return -1;
    return 0;
  }));

  function setRoom(chat) {
    setSelectedRoom(chat.RoomId);
    // once selected any chat mark as "Read"
    if (chat["HaveUnread"]) {
      chat["HaveUnread"] = false;
    }
  }
  function refreshConvo(chat) {
    // update only if selected chat is deleted
    if (selectedRoom === chat.RoomId) {
      setSelectedRoom("");
    }
  }

  return (
    <div className="chatApp">
      <div className='left'>
        <ChatList chatList={sortedChatList.current} onClick={setRoom} onDelete={refreshConvo} />
      </div>
      {
        selectedRoom &&
        <div className='right'>
          <ConversationWindow conversation={MockData["conversationId"][selectedRoom]} />
        </div>
      }
    </div>
  );
}

export default App;
