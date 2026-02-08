// client/src/pages/Admin/UserManagementPage.js
import React from "react";

function UserManagementPage() {
  // Later: fetch users from backend
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Mary Smith", email: "mary@example.com" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">User Management</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul className="space-y-2">
          {users.map(user => (
            <li key={user.id} className="flex justify-between border-b pb-2">
              <span>{user.name} ({user.email})</span>
              <button className="text-red-600 hover:text-red-800">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserManagementPage;
