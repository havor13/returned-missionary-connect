// client/src/pages/Events/EventDetailPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EventDetailPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/events/${id}`)
      .then(res => setEvent(res.data))
      .catch(err => console.error("Error fetching event:", err));
  }, [id]);

  if (!event) return <p className="text-center text-gray-600">Loading event...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">{event.title}</h1>
      <p className="text-gray-700 mb-4">{event.description}</p>
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <p><strong className="text-gray-700">Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
        <p><strong className="text-gray-700">Location:</strong> {event.location}</p>
        <p><strong className="text-gray-700">Created by:</strong> {event.createdBy?.name}</p>
      </div>
    </div>
  );
}

export default EventDetailPage;
