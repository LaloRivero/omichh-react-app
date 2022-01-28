import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../../assets/facebook.svg'
import './footer.css'

const Footer = (props) =>{
  return(
    <React.Fragment>
      <div className="Footer">
        <div className="Footer__docs-links">
          <li className="docs-links">
            <ol className="links__element">
                <Link className="element__link" to="/">AVISO DE PRIVACIDAD</Link>
            </ol>
          </li>
        </div>
        <div className="Footer__contact">
          <li className="Footer__contact-list">
            <ol className="list__element">
              <Link className="element__link" to="/">contacto@omichh.org</Link>
            </ol>
            <ol className="list__element">
              <a href="https://www.facebook.com/OMI.Chihuahua" rel="noopener noreferrer" target="_blank"><img className="Facebook__icon" src={facebook} alt="facebook" /></a>
            </ol>
          </li>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer;