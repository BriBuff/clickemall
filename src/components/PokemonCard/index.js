import React from "react";
import "./style.css";

function PokemonImg (props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} className="actualImg" id={props.id} onClick={ () => props.handleImgClick(props.id)}/>
        </div>
    </div>
  );
}

export default PokemonImg;
