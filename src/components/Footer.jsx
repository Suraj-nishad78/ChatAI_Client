import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <img
          src="https://images.seeklogo.com/logo-png/62/1/leonardo-ai-logo-png_seeklogo-621169.png"
          alt="footer"
        />
        <h1>ChatAI</h1>
        <span> | </span>
        <p>©ChatAI™ | All rights reserved by Suraj Nishad.</p>
      </div>
      <div className="footer-right">
        <img src={assets.facebook_icon} alt="facebook" />
        <img src={assets.twitter_icon} alt="twitter" />
        <img src={assets.instagram_icon} alt="instagram" />
      </div>
    </div>
  );
};

export default Footer;
