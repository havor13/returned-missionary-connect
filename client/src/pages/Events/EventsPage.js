import React, { useEffect, useState } from "react";
import api from "../services/api";
import EventCard from "../components/EventCard";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get("/events");
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.length > 0 ? (
        events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
}

export default EventsPage;
