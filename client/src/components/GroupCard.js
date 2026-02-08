// client/src/components/GroupCard.js
import React from "react";
import { Link } from "react-router-dom";

function GroupCard({ group }) {
  return (
    <div className="group-card">
      <h3>{group.name}</h3>
      <p>{group.description}</p>
      <p>Members: {group.members.length}</p>
      <Link to={`/groups/${group._id}`}>View Group</Link>
    </div>
  );
}

export default GroupCard;
