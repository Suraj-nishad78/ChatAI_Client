import React from "react";

const Intro_Content = ({data}) => {
  return (
    <div className="intro-msg">
      <div className="intro-msg-img">
        <img src={data.icon} />
      </div>
      <div className="intro-msg-content">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Intro_Content;
