import React, { useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css";
import logo from "../../assets/logo.png"

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#sith">Sith</a></p>
  <p><a href="#jedi">Jedi</a></p>
  <p><a href="#saber">Laser Saber</a></p>
  <p><a href="#library">Library</a></p>
  </>
)

const Navbar = () => {
  const [ toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="vador__navbar">
      <div className="vador__navbar-links">
        <div className="vador__navbar-links_logo">
          <img className="vador__logo" src={logo} alt="logo" />
        </div>
        <div className="vador__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="vador__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="vador__navbar-menu">
        { toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className="vador__navbar-menu_container scale-up-center">
            <div className="vador__navbar-menu_container-links">
              <Menu />
              <div className="vador__navbar-menu_container-links_sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
