import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = (props) => {
  return (
  <React.Fragment>
    <Link className="button" to={props.to}>{props.layout}</Link>
  </React.Fragment>
  );
};

export default Button;
