import React, { useContext, useEffect } from "react";
import { side_cont } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Chat_Sidebar = () => {
  const { userData } = useContext(AppContext);
  
  return (
    <div className="chat-sidebar-container">
      <div className="sidebar-title">
        <img
          src="https://images.seeklogo.com/logo-png/62/1/leonardo-ai-logo-png_seeklogo-621169.png"
          alt="icon"
        />
        <p>Tools</p>
      </div>
      <div className="sidebar-content">
        {side_cont.map((data, i) => (
          <div key={i} className="sidebar-content-list">
            <img src={data.url} />
            <p>{data.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-history">
        <h1>Chats</h1>
      </div>
      <div className="side-user">
        <img
          src={
            userData.imageURL
              ? userData.imageURL
              : "https://st4.depositphotos.com/11634452/21365/v/450/depositphotos_213659488-stock-illustration-picture-profile-icon-human-people.jpg"
          }
          alt="image"
        />
        <p>{userData.name ? userData.name : "User"}</p>
      </div>
    </div>
  );
};

export default Chat_Sidebar;
