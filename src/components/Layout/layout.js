import React from "react";
import "./layout.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="Layout">
        <h1>Layout</h1>;
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
