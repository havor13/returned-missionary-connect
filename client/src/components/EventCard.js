// client/src/components/EventCard.js
import React from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <p>{event.location}</p>
      <Link to={`/events/${event._id}`}>View Event</Link>
    </div>
  );
}

export default EventCard;
