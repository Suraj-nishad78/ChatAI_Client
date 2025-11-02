import React from "react";
import { assets, stepsData } from "../assets/assets";
import Intro_Content from "./Intro_Content";

const ChatIntro = () => {
  return (
    <div className="intro-container">
      <div className="intro-title">
        <h1>How It Works!</h1>
        <p>Your thoughts, our intelligence.</p>
      </div>
      <div className="intro-content-container">
        {stepsData.map((data,i)=>(
          <Intro_Content key={i} data={data}></Intro_Content>
        ))}
      </div>
    </div>
  );
};

export default ChatIntro;
