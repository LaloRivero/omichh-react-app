import React from 'react'
import './footer.css'

const Footer = () =>{
  return(
    <React.Fragment>
      <div className="Footer">
        <div className="Footer__docs-links">
          <li className="docs-links">
            <ol className="docs-links__element"></ol>
            <ol className="docs-links__element"></ol>
            <ol className="docs-links__element"></ol>
          </li>
        </div>
        <div className="Footer__contact">
          <li className="Footer__contact-list">
            <ol className="List__element"></ol>
            <ol className="List__element"></ol>
            <ol className="List__element"></ol>
            <ol className="List__element"></ol>
          </li>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer;