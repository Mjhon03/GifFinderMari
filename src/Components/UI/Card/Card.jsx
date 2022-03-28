import React from 'react';
import './Card.css';

export const Card = ({urlImageCard,titleCard}) => {
  return (
    <div className='card'>
      <img src={urlImageCard} alt={titleCard} className="image_card" />
      <p className='title_card'>{titleCard}</p>
    </div>
  )
}
