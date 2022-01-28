import React from "react";
import { Link } from "react-router-dom";
import w_facebook from "../../assets/wfacebook.svg";
import b_facebook from "../../assets/bfacebook.svg";
import "./footer.css";

const Footer = (props) => {
  return (
    <React.Fragment>
      <div
        className={
          props.theme === "light"
            ? "Footer b-color-light"
            : "Footer b-color-dark"
        }
      >
        <div className="Footer__docs-links">
          <li className="docs-links">
            <ol className="links__element">
              <Link
                className={
                  props.theme === "light"
                    ? "element__link color-light"
                    : "element__link color-dark"
                }
                to="/"
              >
                AVISO DE PRIVACIDAD
              </Link>
            </ol>
          </li>
        </div>
        <div className="Footer__contact">
          <li className="Footer__contact-list">
            <ol className="list__element">
              <Link
                className={
                  props.theme === "light"
                    ? "element__link color-light"
                    : "element__link color-dark"
                }
                to="/"
              >
                contacto@omichh.org
              </Link>
            </ol>
            <ol className="list__element">
              <a
                href="https://www.facebook.com/OMI.Chihuahua"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="Facebook__icon"
                  src={props.theme === "light" ? b_facebook : w_facebook}
                  alt="facebook"
                />
              </a>
            </ol>
          </li>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
