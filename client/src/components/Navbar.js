import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // optional styling

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Returned Missionary Connect</h2>
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/groups">Groups</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/messaging">Messaging</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
