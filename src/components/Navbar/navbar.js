import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "../SideBarData/sidebarData.js";
import { logo_white, logo_blue } from "../../img/images.js";
import "./navbar.css";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <React.Fragment>
      <div
        className={
          props.theme === "light" ? "navbar navbar-light" : "navbar navbar-dark"
        }
      >
        <Link to="/" className="navbar__logo">
          <img
            src={props.theme === "light" ? logo_blue : logo_white}
            alt="logo"
          />
        </Link>
        <Link
          to="#"
          className={
            props.theme === "light"
              ? "navbar__menu-bars color-light"
              : "navbar__menu-bars color-dark"
          }
        >
          <FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav
        className={sidebar ? "navbar__menu active navbar-dark" : "navbar__menu"}
      >
        <ul className="navbar__menu-items" onClick={showSidebar}>
          <li className="navbar__toggle">
            <Link className="menu__bars-close color-dark" to="#">
              <AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            if (item.status === "available") {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
