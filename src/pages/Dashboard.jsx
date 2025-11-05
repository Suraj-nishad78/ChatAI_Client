import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "../components/Card";
import { plans } from "../assets/assets";

export default function Dashboard() {
  const { userId, setUserId } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("userId");

    const newUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, newUrl);

    if (id) {
      setUserId(id);
      localStorage.setItem("userId", id);
      setTimeout(() => {
        localStorage.clear();
        setUserId(null);
      }, 10 * 60 * 1000); // 10 minutes
    }
  }, []);

  return (
    <div className="upgrade-container">
      <div className="upgrade-title">
        <h1>Best Package For You</h1>
        <p>
          The upgrade package includes faster performance, extra storage,
          advanced security, premium support, and exclusive features designed to
          enhance productivity, reliability, and overall digital experience
          seamlessly.
        </p>
      </div>
      <div className="upgrade-cart-box">
        {plans.map((item, i) => (
          <Card key={i} data={item}></Card>
        ))}
      </div>
    </div>
  );
}
