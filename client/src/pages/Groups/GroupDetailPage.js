// client/src/pages/Groups/GroupDetailPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function GroupDetailPage() {
  const { id } = useParams();
  const [group, setGroup] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/groups/${id}`)
      .then(res => setGroup(res.data))
      .catch(err => console.error("Error fetching group:", err));
  }, [id]);

  if (!group) return <p className="text-center text-gray-600">Loading group...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">{group.name}</h1>
      <p className="text-gray-700 mb-4">{group.description}</p>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Members</h2>
        <ul className="space-y-2">
          {group.members?.map(member => (
            <li key={member._id} className="text-gray-700">
              {member.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GroupDetailPage;
