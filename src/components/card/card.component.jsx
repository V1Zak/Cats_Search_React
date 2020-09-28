import React from 'react';
import './card.style.css';

export const Card = (props) => (
<div className= 'card-container'>
  <img
    alt="monter"
    src={`https://robohash.org/${props.monster.name}?set=set4&size=180x180`}
    />
  <h2>{props.monster.name}</h2>
<p>{props.monster.email}</p>

</div>
);
