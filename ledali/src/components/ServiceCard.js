// src/components/ServiceCard.js
import React from 'react';
import '../styles/ServiceCard.css';

function ServiceCard({ title, description, image }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
