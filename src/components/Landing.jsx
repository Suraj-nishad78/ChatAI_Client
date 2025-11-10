import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "ChatAI That’s Smarter Talk, Smoother Flow";

  const handleShowChat = () => {
    navigate("/chat");
  };


  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100); // typing speed (ms per letter)

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="landing-container">
      {/* <h1>AI video editing that's less work, more flow</h1> */}
      {/* <h1>ChatAI that’s smarter talk, smoother flow</h1> */}
      <h1>{displayedText}</h1>
      <p>
        If you can type, ask-and-think, copy-and-chat, you can create smart
        content in ChatAI. It’s an AI chat tool that’s as easy as a message.
      </p>
      <button onClick={handleShowChat}>Get started for free &rarr;</button>
    </div>
  );
};

export default Landing;
