// client/src/pages/Profile/TestimonyPage.js
import React, { useState } from "react";

function TestimonyPage() {
  const [testimony, setTestimony] = useState("My faith grew stronger during my mission...");

  const handleSave = () => {
    // TODO: send testimony to backend
    console.log("Saved testimony:", testimony);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">My Testimony</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg">
        <textarea
          value={testimony}
          onChange={(e) => setTestimony(e.target.value)}
          rows="6"
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSave}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Save Testimony
        </button>
      </div>
    </div>
  );
}

export default TestimonyPage;
