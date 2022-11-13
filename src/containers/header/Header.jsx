import React from 'react';
import "./header.css";
import people from "../../assets/people.png";
import vador from "../../assets/vador.png";

function Header() {
  return (
    <div className="vador__header section__padding" id="home">
      <div className="vador__header-content">
        <h1 className="gradient__text text__shadow">
          “Be careful not to choke on your aspirations.”
        </h1>
        <p>
         “Don’t be too proud of this technological terror you’ve constructed. The ability to destroy a planet is insignificant next to the power of the Force.”
        </p>
        <div className="vador__header-content__input">
          <input type="email" placeholder="Your Email Adress" />
          <button type="button">Get Started</button>
        </div>
        <div className="vador__header-content__people">
          <img src={people} alt="people" />
          <p>6,666 people requested access to the dark side</p>
        </div>
      </div>
      <div className="vador__header-image">
        <img src={vador} alt="vador" />
      </div>
    </div>
  )
}

export default Header
