// client/src/pages/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Returned Missionary Connect</h1>
      <p>
        Welcome! This is your hub for connecting with fellow missionaries,
        joining alumni groups, and staying updated on events.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <h2>Quick Links</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "1rem" }}>
            <Link to="/groups">📌 Missionary Groups</Link>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <Link to="/events">📅 Upcoming Events</Link>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <Link to="/profile">👤 My Profile</Link>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <Link to="/messaging">💬 Messaging</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
