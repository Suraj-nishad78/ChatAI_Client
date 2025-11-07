import React from 'react'
import Chat from '../components/chat/Chat'
import Chat_Sidebar from '../components/Chat_Sidebar'

const Chat_Page = () => {
  return (
    <div className='chat_page-container'>
        <Chat_Sidebar></Chat_Sidebar>
        <Chat></Chat>
    </div>
  )
}

export default Chat_Page
