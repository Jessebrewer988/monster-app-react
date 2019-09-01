import React from 'react';
import './card.styles.css';

export default function Card({ name, id, email, website }) {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2 key={id}>{name}</h2>
      <p>{email}</p>
      <p>{website}</p>
    </div>
  );
}
