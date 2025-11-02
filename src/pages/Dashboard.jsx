import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

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
      }, 10 * 60* 1000); // 10 minutes
    }
  }, []);

  if (!userId)
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>
    );

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome, {userId}</h2>
    </div>
  );
}
