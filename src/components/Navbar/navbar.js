import React from "react";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <Link to="#" className="navbar__menu">
          <FaBars />
        </Link>
      </div>
      <nav className={sidebar ? "navbar__menu active" : "navnar__menu"}>
        <ul className="navbar__menu-items">
          <li className="navbar__toggle">
            <Link className="menu__bars" to="#">
              <AiOutlineClose/>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
