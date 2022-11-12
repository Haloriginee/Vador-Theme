import React from 'react';
import "./lightsaber.css";
import lightsaberImage from "../../assets/lightsaberImage.png"

function Lightsaber() {
  return (
    <div className="vador__lightsaber section__padding" id="lightsaber">
      <div className="vador__lightsaber-image" >
        <img src={lightsaberImage} alt="lightasaber" />
      </div>
      <div className="vador__lightsaber-content">
        <h4>
          “I find your lack of faith disturbing.”
        </h4>
        <h1 className="gradient__text">
          “When I left you, I was but the learner. Now I am the master.”
        </h1>
        <p>
          The lightsaber is the weapon of a Jedi, an elegant weapon of a more civilized age. It can be used to cut through blast doors or enemies alike. Using the Force, a Jedi can predict and deflect incoming blaster bolts, and reflect them.
        </p>
        <h4>
          “Make “wrrr” sounds.”
        </h4>
      </div>
    </div>
  )
}

export default Lightsaber
