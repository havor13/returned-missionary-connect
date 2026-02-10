// client/src/pages/Dashboard.js
import "../styles/Dashboard.css";
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome to Returned Missionary Connect</h1>
        <p>Connect, share, and grow with fellow missionaries.</p>
      </div>

      <div className="dashboard-sections">
        <div className="dashboard-card">
          <h3>Groups</h3>
          <p>Join missionary fellowship groups and stay connected.</p>
          <Link to="/groups">Explore Groups</Link>
        </div>

        <div className="dashboard-card">
          <h3>Events</h3>
          <p>See upcoming reunions, service projects, and workshops.</p>
          <Link to="/events">View Events</Link>
        </div>

        <div className="dashboard-card">
          <h3>Messaging</h3>
          <p>Chat with friends and missionary companions.</p>
          <Link to="/messaging">Go to Messaging</Link>
        </div>

        <div className="dashboard-card">
          <h3>Profile</h3>
          <p>Update your mission details and share your testimony.</p>
          <Link to="/profile">My Profile</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
