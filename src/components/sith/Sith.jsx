import React from 'react';
import "./sith.css";

const Sith = ( { title, text } ) => {
  return (
    <div className="vador__features-container__feature">
      <div className="vador__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="vador__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Sith
