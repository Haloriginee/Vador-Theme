import React from 'react';
import "./footer.css";
import logo1 from "../../assets/logo1.png"

function Footer() {
  return (
    <div className="vador__footer section__padding">
      <div className="vador__footer-heading">
        <h1 className="gradient__text">
        “It is necessary to lie to achieve anything of value. And a skilled liar is nearly impossible to detect.”        </h1>
      </div>
      <div className="vador__footer-btn">
        <p>“Come Join The Dark Side…”</p>
      </div>
      <div className="vador__footer-links">
        <div className="vador__footer-links_logo">
          <img src={logo1} alt="logo footer" />
        </div>
        <div className="vador__footer-links_div">
          <h4>List A</h4>
          <p>A1</p>
          <p>A2</p>
          <p>A3</p>
          <p>A4</p>
        </div>
        <div className="vador__footer-links_div">
          <h4>List B</h4>
          <p>B1</p>
          <p>B2</p>
          <p>B3</p>
          <p>B4</p>
        </div>
        <div className="vador__footer-links_div">
          <h4>Contact</h4>
          <p>C1</p>
          <p>C2</p>
          <p>C3</p>
          <p>C4</p>
        </div>
      </div>
      <div className="vador__footer-cr">
        <p> Phoking Awesome UX / UI & ReactJS xp</p>
      </div>
    </div>
  )
}

export default Footer
