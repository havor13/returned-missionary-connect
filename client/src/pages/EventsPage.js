// client/src/pages/EventsPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/events")
      .then(res => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading events...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Upcoming Missionary Events</h1>
      {events.length === 0 ? (
        <p className="text-gray-600">No events scheduled yet. Check back soon!</p>
      ) : (
        <div className="space-y-6">
          {events.map(event => (
            <div key={event._id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                📅 {new Date(event.date).toLocaleDateString()} | 📍 {event.location}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Created by: {event.createdBy?.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EventsPage;
