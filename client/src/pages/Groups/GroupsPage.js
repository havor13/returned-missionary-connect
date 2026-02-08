// client/src/pages/Groups/GroupsPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function GroupsPage() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/groups")
      .then(res => setGroups(res.data))
      .catch(err => console.error("Error fetching groups:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Mission Alumni Groups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map(group => (
          <Link
            key={group._id}
            to={`/groups/${group._id}`}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{group.name}</h2>
            <p className="text-gray-600 mt-2">{group.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GroupsPage;
