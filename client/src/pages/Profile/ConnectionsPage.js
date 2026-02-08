// client/src/pages/Profile/ConnectionsPage.js
import React from "react";

function ConnectionsPage() {
  // Later: fetch missionary connections from backend
  const connections = [
    { id: 1, name: "John Doe", mission: "Ghana Kumasi Mission" },
    { id: 2, name: "Mary Smith", mission: "Utah Salt Lake Mission" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">My Connections</h1>
      <div className="space-y-4">
        {connections.map(conn => (
          <div key={conn.id} className="bg-white shadow-md rounded-lg p-4">
            <p className="text-lg font-semibold text-gray-800">{conn.name}</p>
            <p className="text-sm text-gray-600">Mission: {conn.mission}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConnectionsPage;
