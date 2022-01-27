import React from "react";
import Navbar from "../../components/Navbar/navbar";
import medals from "../../assets/medallas.png";
import Button from "../../components/Button/button";
import "./landing.css";

class Landing extends React.Component {
  render() {
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
              <Button layout="Participa" theme="dark" />
            </div>
            <div className="landing__medals">
              <img src={medals} alt="Medals" className="medals__img" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
