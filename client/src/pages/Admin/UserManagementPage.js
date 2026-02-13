import React, { useEffect, useState } from "react";
import api from "../../services/api"; // axios instance

function UserManagementPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Fetch users from backend
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await api.get("/api/users");
        setUsers(res.data);
      } catch (err) {
        setError(err.response?.data?.error || err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  // Delete user handler with confirmation + success message
  const handleDelete = async (id, name) => {
    const confirmed = window.confirm(`Are you sure you want to delete ${name}?`);
    if (!confirmed) return;

    try {
      await api.delete(`/api/users/${id}`);
      setUsers(users.filter(user => user._id !== id));
      setSuccess(`User "${name}" deleted successfully.`);
      setTimeout(() => setSuccess(null), 3000); // auto-hide after 3s
    } catch (err) {
      console.error("Delete failed:", err);
      setError("Failed to delete user");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">User Management</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {loading && <p>Loading users...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
        {success && <p className="text-green-600">{success}</p>}
        {!loading && !error && (
          <ul className="space-y-2">
            {users.length > 0 ? (
              users.map(user => (
                <li key={user._id} className="flex justify-between border-b pb-2">
                  <span>{user.name} ({user.email})</span>
                  <button
                    onClick={() => handleDelete(user._id, user.name)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <p>No users found.</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserManagementPage;
