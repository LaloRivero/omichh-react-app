import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "../SideBarData/sidebarData.js";
import logowhite from "../../assets/logowhite.svg"
import "./navbar.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <React.Fragment>
      <div className="navbar">
        <Link to ="#" className="navbar__logo">
          <img src={logowhite} alt="logo" />
        </Link>
        <Link to="#" className="navbar__menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "navbar__menu active" : "navbar__menu"}>
        <ul className="navbar__menu-items" onClick={showSidebar}>
          <li className="navbar__toggle">
            <Link className="menu__bars-close" to="#">
              <AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
