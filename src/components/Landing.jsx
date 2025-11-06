import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { showChat, setShowChat } = useContext(AppContext);
  const navigate = useNavigate();

  const handleShowChat = () => {
    navigate("/chat");
  };
  return (
    <div className="landing-container">
      {/* <h1>AI video editing that's less work, more flow</h1> */}
      <h1>ChatAI that’s smarter talk, smoother flow</h1>
      <p>
        If you can type, ask-and-think, copy-and-chat, you can create smart content in ChatAI. It’s an AI chat tool that’s as easy as a message.
      </p>
      <button onClick={handleShowChat}>Get started for free &rarr;</button>
    </div>
  );
};

export default Landing;
