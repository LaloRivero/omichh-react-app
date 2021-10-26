import React from "react";
import "./header.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="Header">
        <div className="Header__logo">
          <a href="/">
            <img src="" alt="Logo" />
          </a>
        </div>
        <div className="Header__menu"></div>
      </div>
    </React.Fragment>
  );
};

export default Header;
