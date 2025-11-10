import React, { useContext, useEffect, useState } from "react";
import { side_cont } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Chat_Sidebar = () => {
  const { userData, chat, setChat } = useContext(AppContext);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showIcon, setShowIcon] = useState(true);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleNewChat = () => {
    setChat([]);
  };

  const handleMouseEnter = () => {
    setShowIcon(false);
  };
  const handleMouseLeave = () => {
    setShowIcon(true);
  };

  return (
    <>
      {!showSidebar ? (
        <div className="chat-sidebar-container">
          <div className="sidebar-title">
            <div className="sidebar-title-box">
              <img
                src="https://images.seeklogo.com/logo-png/62/1/leonardo-ai-logo-png_seeklogo-621169.png"
                alt="icon"
              />
              <p>Tools</p>
            </div>
            <div className="sidebar-navigate" onClick={handleSidebar}>
              <img
                src="https://cdn-icons-png.freepik.com/512/10758/10758675.png"
                alt="image"
              />
              <span>Close sidebar</span>
            </div>
          </div>
          <div className="sidebar-content">
            {side_cont.map((data, i) => (
              <div
                key={i}
                className="sidebar-content-list"
                onClick={data.text === "New Chat" && handleNewChat}
              >
                {/* <img src={data.url} /> */}
                {/* <i class={data.url}></i> */}
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
      ) : (
        <div className="sidebar-mini">
          <div className="sidebar-mini-images">
            <div
              className="sidebar-handle"
              onClick={handleSidebar}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {showIcon ? (
                <img
                  src="https://images.seeklogo.com/logo-png/62/1/leonardo-ai-logo-png_seeklogo-621169.png"
                  alt="image"
                />
              ) : (
                <i class="fa-solid fa-chevron-right"></i>
              )}
              <span>Open sidebar</span>
            </div>
            {/* <img
              src="https://toppng.com/uploads/preview/chat-now-icon-png-11553722060rg3urfboym.png"
              alt="image"
            />
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/icon-pack-vol-1/magnifying-glass-16.png"
              alt="image"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ig-WiXHzvw9R0XOH7ViVQ5exGgpivNsLTg&s"
              alt="image"
            /> */}
          </div>
          <div className="sidebar-mini-user">
            <img
              src={
                userData.imageURL
                  ? userData.imageURL
                  : "https://st4.depositphotos.com/11634452/21365/v/450/depositphotos_213659488-stock-illustration-picture-profile-icon-human-people.jpg"
              }
              alt="image"
            />
            <span>User</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat_Sidebar;
