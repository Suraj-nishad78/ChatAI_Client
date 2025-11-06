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
        {testimonialsData.map((data,i)=>(
            <Testmonials_Content key={i} data={data}></Testmonials_Content>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
