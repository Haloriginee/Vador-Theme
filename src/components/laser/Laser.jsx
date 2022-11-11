import React from 'react';
import "./laser.css";

import { first_order, rebel, react, jedi, galactic,} from "./imports"


const Laser = () => {
  return (
    <div className="vador__laser section__padding">
      <div>
        <img src={first_order} alt="first_order" />
      </div>
      <div>
        <img src={rebel} alt="rebel" />
      </div>
      <div>
        <img src={react} alt="react" />
      </div>
      <div>
        <img src={jedi} alt="jedi" />
      </div>
      <div>
        <img src={galactic} alt="galactic" />
      </div>
    </div>
  )
}

export default Laser
