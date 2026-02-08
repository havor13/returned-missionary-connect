// client/src/pages/Profile/MissionDetailsPage.js
import React from "react";

function MissionDetailsPage() {
  // Example data — replace with backend fetch
  const missionDetails = {
    missionName: "Ghana Kumasi Mission",
    yearsServed: "2020 - 2022",
    highlights: "Taught English classes, organized community service projects."
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Mission Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4 max-w-lg">
        <p><strong className="text-gray-700">Mission:</strong> {missionDetails.missionName}</p>
        <p><strong className="text-gray-700">Years Served:</strong> {missionDetails.yearsServed}</p>
        <p><strong className="text-gray-700">Highlights:</strong> {missionDetails.highlights}</p>
      </div>
    </div>
  );
}

export default MissionDetailsPage;
