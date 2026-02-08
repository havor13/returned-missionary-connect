// client/src/pages/Events/EventsPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/events")
      .then(res => setEvents(res.data))
      .catch(err => console.error("Error fetching events:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Upcoming Missionary Events</h1>
      <div className="space-y-6">
        {events.map(event => (
          <Link
            key={event._id}
            to={`/events/${event._id}`}
            className="block bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
            <p className="text-gray-600 mt-2">{event.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              📅 {new Date(event.date).toLocaleDateString()} | 📍 {event.location}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
