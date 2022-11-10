import React from 'react';
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="vador__navbar">
      <div className="vador__navbar-links">
        <div className="vador__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
