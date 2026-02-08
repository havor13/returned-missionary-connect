// client/src/pages/Admin/GroupManagementPage.js
import React from "react";

function GroupManagementPage() {
  const groups = [
    { id: 1, name: "Ghana Kumasi Alumni" },
    { id: 2, name: "Utah Salt Lake Alumni" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Group Management</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul className="space-y-2">
          {groups.map(group => (
            <li key={group.id} className="flex justify-between border-b pb-2">
              <span>{group.name}</span>
              <button className="text-red-600 hover:text-red-800">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GroupManagementPage;
