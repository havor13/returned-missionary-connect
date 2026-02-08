// client/src/pages/Admin/AdminPage.js
import React from "react";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Admin Dashboard</h1>
      <div className="space-y-4">
        <Link to="/admin/users" className="block bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
          Manage Users
        </Link>
        <Link to="/admin/groups" className="block bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
          Manage Groups
        </Link>
        <Link to="/admin/events" className="block bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
          Manage Events
        </Link>
      </div>
    </div>
  );
}

export default AdminPage;
