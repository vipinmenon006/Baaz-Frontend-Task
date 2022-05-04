import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card-container" key={props.id}>
      <img src={props.url} alt={props.item} className="card-image" />
      <div className="card-details" key={props.id}>
        <h5 className="card-item">{props.item}</h5>
        <h6 className="card-price">${props.price}</h6>
      </div>
    </div>
  );
}

export default Card;
