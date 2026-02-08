// client/src/components/ProfileCard.js
import React from "react";

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <img
        src={`http://localhost:5000${user.profilePhoto}`}
        alt={user.name}
        className="profile-photo"
      />
      <h3>{user.name}</h3>
      <p>{user.missionDetails}</p>
    </div>
  );
}

export default ProfileCard;
