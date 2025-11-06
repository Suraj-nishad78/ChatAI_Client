import React from "react";
import { useNavigate } from "react-router-dom";

const Bottom_Title = () => {
  const navigate = useNavigate();
  const handleShowChat = () => {
    navigate("/chat");
  };
  return (
    <div className="bottom-container">
      <h1>See The Magic. Try Now!</h1>
      <button onClick={handleShowChat}>Get started for free &rarr;</button>
    </div>
  );
};

export default Bottom_Title;
