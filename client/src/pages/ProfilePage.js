// client/src/pages/ProfilePage.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Example: replace with actual logged-in user ID or token-based auth
  const userId = "USER_ID_HERE";

  useEffect(() => {
    axios.get(`http://localhost:5000/api/auth/${userId}`)
      .then(res => {
        setProfile(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching profile:", err);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <p className="text-center text-gray-600">Loading profile...</p>;
  if (!profile) return <p className="text-center text-gray-600">No profile found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">My Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4 max-w-lg mx-auto">
        <div>
          <strong className="text-gray-700">Name:</strong>
          <p className="text-gray-900">{profile.name}</p>
        </div>
        <div>
          <strong className="text-gray-700">Email:</strong>
          <p className="text-gray-900">{profile.email}</p>
        </div>
        <div>
          <strong className="text-gray-700">Mission:</strong>
          <p className="text-gray-900">{profile.mission}</p>
        </div>
        <div>
          <strong className="text-gray-700">Years Served:</strong>
          <p className="text-gray-900">{profile.yearsServed}</p>
        </div>
        <div>
          <strong className="text-gray-700">Testimony:</strong>
          <p className="text-gray-900">{profile.testimony || "Not shared yet"}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
