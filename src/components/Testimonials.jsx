import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import Testmonials_Content from "./Testmonials_Content";

const Testimonials = () => {
  return (
    <div className="Testimonials-container">
      <div className="test-title">
        <h1>Customer Testimonials</h1>
        <p>What our users are saying...</p>
      </div>
      <div className="test-content-container">
        {/* <div className="test-content">
          <div className="test-header">
            <img src={assets.profile_icon} loading="lazy" />
            <h1>Donald Jackman</h1>
            <p>Graphic Designer</p>
          </div>
          <div className="test-ratings">
            <img src={assets.star_icon} loading="lazy" />
          </div>
          <div className="test-text">
            <p>
              I've been using bg.removal for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
          </div>
        </div> */}
        {testimonialsData.map((data,i)=>(
            <Testmonials_Content key={i} data={data}></Testmonials_Content>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
