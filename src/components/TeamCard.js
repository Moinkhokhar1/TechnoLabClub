import React from "react";

function TeamCard({ name, role, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default TeamCard;