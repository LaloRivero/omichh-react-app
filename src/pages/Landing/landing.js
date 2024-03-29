import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Button from "../../components/Button/button";
import Footer from "../../components/Footer/footer";
import { medals } from "../../img/images";
// import URL from "../../libs/url";
import "./landing.css";
// const url = `${URL.omichh_api}/participants/`;

const Landing = () =>{
  return (
      <React.Fragment>
        <div className="landing">
          <Navbar theme="dark" />
          <div className="landing__container">
            <div className="landing__content">
              <h2 className="content__title">
                Buscamos a los mejores programadores de Chihuahua.
              </h2>
              <p className="content__text">
                La OMICHH es un concurso en el que sobre todo se requiere tener{" "}
                <strong>
                  facilidad, habilidad y voluntad de resolver problemas
                </strong>{" "}
                utilizando la lógica, el ingenio y las computadoras.
              </p>
              <Button to="/registro" layout="Registrate" />
            </div>
            <div className="landing__medals">
              <img src={medals} alt="Medals" className="medals__img" />
            </div>
          </div>
          <Footer theme="dark"/>
        </div>
      </React.Fragment>
    );
}

export default Landing;