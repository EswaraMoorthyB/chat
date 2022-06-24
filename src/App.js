import React, { useState } from 'react';

import { ChatList } from './chat_list/ChatList';
import { ConversationWindow } from './conversation_window/ConversationWindow';
import MockData from "./Mock Data.json";

import './chat.css';

function App() {
  const [selectedRoom, setSelectedRoom] = useState("");

  function setRoom(chat) {
    setSelectedRoom(chat.RoomId);
    if (chat["HaveUnread"]) {
      chat["HaveUnread"] = false;
    }
  }
  function refreshConvo(chat) {
    if (selectedRoom === chat.RoomId) {
      setSelectedRoom("");
    }
  }

  return (
    <div className="chatApp">
      <div className='left'>
        <ChatList chatList={MockData.chatList} onClick={setRoom} onDelete={refreshConvo} />
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
