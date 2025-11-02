import React from "react";
import { assets } from "../assets/assets";

const Testmonials_Content = ({ data }) => {
  return (
    <div className="test-content">
      <div className="test-header">
        <img src={data.image} loading="lazy" />
        <h1>{data.name}</h1>
        <p>{data.role}</p>
      </div>
      <div className="test-ratings">
        {Array(data.stars)
          .fill()
          .map((item, index) => (
            <img key={index} src={assets.rating_star} alt="rating" />
          ))}
      </div>
      <div className="test-text">
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default Testmonials_Content;
