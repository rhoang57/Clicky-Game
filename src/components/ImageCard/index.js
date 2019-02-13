import React from "react";
import "./style.css";

const ImageCard = props => (
    <div className="col-sm-4 col-md-3 card" onClick = {() => props.clickedImage(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );

export default ImageCard;