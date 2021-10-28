import React from 'react'
import './footer.css'

const Footer = () =>{
  return(
    <React.Fragment>
      <div className="Footer">
        <div className="Footer__docs-links">
          <li className="docs-links">
            <ol className="docs-links__element">
              <a href="/">
                <p className="elemt__text">CONVOCATORIA</p>
              </a>
            </ol>
            <ol classNam="docs-links__element">
              <a href="/">
                <p className="elemt__text">REGLAMENTO</p>
              </a>
            </ol>
            <ol className="docs-links__element">
              <a href="/">
                <p className="elemt__text">CODIGO DE CONDUCTA</p>
              </a>
            </ol>
            <ol className="docs-links__element">
                <a href="/">
                  <p className="elemt__text">AVISO DE PRIVACIDAD</p>
                </a>
            </ol>
          </li>
        </div>
        <div className="Footer__contact">
          <li className="Footer__contact-list">
            <ol className="List__element">
              <a href="/">
                <p className="elemt__text">contacto@omichh.org</p>
              </a>
            </ol>
            <ol className="List__element">
              <a href="/">
                <img src="" alt="twitter" />
              </a>
            </ol>
            <ol className="List__element">
              <a href="/">
                <img src="" alt="github" />
              </a>
            </ol>
            <ol className="List__element">
              <a href="/">
                <img src="" alt="facebook" />
              </a>
            </ol>
          </li>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer;