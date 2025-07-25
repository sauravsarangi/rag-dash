import React, { useEffect, useState } from "react";
import "./App.css";

function Dashboard() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("https://your-api.azurewebsites.net/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to fetch API response"));
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="title">Welcome to the Dashboard</h2>
      <p className="message">{message}</p>
    </div>
  );
}

export default Dashboard;
