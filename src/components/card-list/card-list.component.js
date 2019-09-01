import React from 'react';
import Card from '../card/card.component';

import './card-list.styles.css';

export default function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters ? (
        monsters.map(monster => (
          <Card
            name={monster.name}
            id={monster.id}
            key={monster.id}
            email={monster.email}
            website={monster.website}
          />
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
