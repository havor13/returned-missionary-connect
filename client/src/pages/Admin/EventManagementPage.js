// client/src/pages/Admin/EventManagementPage.js
import React from "react";

function EventManagementPage() {
  const events = [
    { id: 1, title: "Mission Reunion", date: "2026-03-15" },
    { id: 2, title: "Community Service", date: "2026-04-10" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Event Management</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul className="space-y-2">
          {events.map(event => (
            <li key={event.id} className="flex justify-between border-b pb-2">
              <span>{event.title} ({event.date})</span>
              <button className="text-red-600 hover:text-red-800">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventManagementPage;
