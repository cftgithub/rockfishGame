import React from "react";
import "./style.css";

function FishCard(props) {
  return (
    <div className="card">
      <div onClick={() => props.removeFish(props.id)} className="img-container">
        <img alt={props.species} src={props.image} />
      </div>
    </div>
  );
}

export default FishCard;