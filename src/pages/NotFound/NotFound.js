import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { error404 } from "../../img/images.js";
import "./NotFound.css";

const Notfound = () => {
  return (
    <React.Fragment>
      <div className="participants">
        <Navbar theme={"light"} />
        <div className="error_404__container">
          <img src={error404} alt="not found" />
        </div>
        <Footer theme={"light"} />
      </div>
    </React.Fragment>
  );
};

export default Notfound;
