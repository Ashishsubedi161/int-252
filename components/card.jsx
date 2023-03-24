import React from 'react';
import './Card.css'; 

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{props.title}</h2> 
      </div>
      <div className="card-body">
        {props.children} 
      </div>
      <div className="card-footer">
        <p>{props.footer}</p> 
      </div>
    </div>
  );
}

export default Card;