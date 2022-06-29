import React, { useState } from "react";
//import {Button} from './button';
import { Link } from "react-router-dom";
import "./navbar.css";
import {Dropdown,Dropdown1} from "./dropdown";
// import Dropdown1 from "./dropdown";
// import Accountdrop from './Acountdrop'

import image from ".//BTlogo.jpg";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  const handleClick = () => setClick(!open);
  const closeMobileMenu = () => setClick(false);
// -----------------------------------------Support tab dropdown function------------------------------------------------------------>
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 360) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  // -----------------------------------------Create tab dropdown function------------------------------------------------------------>

  const onMouseEnte = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeav = () => {
    if (window.innerWidth < 360) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };
// -----------------------------------------navbar function with all dropdowns and navlinks function------------------------------------------------------------>
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={image} alt="cant load" height={65} width={65} />
        </div>
        <Link to="/" className="navbar-logo"></Link>

        <div className="menu-icon" onClick={handleClick}>
        <i
            className="bi-chevron-compact-down toggle-btn"
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnte}
            onMouseLeave={onMouseLeav}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Create <i className="fas fa-caret-down" />
              {dropdown1 && <Dropdown1 />}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Create" className="nav-links" onClick={closeMobileMenu}>
              Connections <i className="fas fa-caret-down" />
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Modify" className="nav-links" onClick={closeMobileMenu}>
              Virtual Devices
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Deploy" className="nav-links" onClick={closeMobileMenu}>
              Inventory
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/Support" className="nav-links" onClick={closeMobileMenu}>
              Support <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            ></Link>
          </li>
        </ul>
        {/* <Button /> */}
        <li className="account">
          <Link to="/Account" className="nav-links" onClick={closeMobileMenu}>
            My Account <i className="fas fa-caret-down" />
          </Link>
        </li>
      </nav>
    </>
  );
}
