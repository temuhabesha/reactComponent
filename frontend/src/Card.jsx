import React from 'react'
import './Card.css'

function Card({title,desc}) {
  return (
    <div className='allcard'>

      <div className="cardone">
        <h1>{title}</h1>
        <p>{desc} </p>
      </div>

    </div>
  );
}

export default Card


































