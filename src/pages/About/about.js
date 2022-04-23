import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { binary } from "../../img/images";
import "./about.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="about">
        <Navbar theme="dark" />
        <div className="about__container">
          <div className="about__content-text">
            <h1>Olimpiada Mexicana de Informática</h1>
            <p>
              La Olimpiada Mexicana de Informática en Chihuahua (OMICHH) es un
              concurso a nivel estatal para jóvenes y niños con facilidad para
              resolver problemas prácticos mediante la lógica y el uso de
              computadoras, que busca promover el desarrollo tecnológico en
              México y encontrar a los mejores programadores, quienes formarán
              la selección del estado para participar en las próximas Olimpiadas
              Nacionales de Informática (OMI) y posteriormente en Olimpiadas
              Internacionales de Informática (IOI).
            </p>
            <p>
              <i>
                La OMICHH es un concurso en el que sobre todo se requiere tener
                facilidad, habilidad y voluntad de resolver problemas utilizando
                la lógica, el ingenio y las computadoras.
              </i>
            </p>
          </div>
          <div className="about__content-img">
            <img src={binary} alt="coding" />
          </div>
        </div>
        <Footer theme="dark" />
      </div>
    </React.Fragment>
  );
};

export default About;
