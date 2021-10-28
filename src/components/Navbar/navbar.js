import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"

const Navbar = () =>{
  return(
    <React.Fragment>
      <div className="navbar">
        <Link to='#' className='navbar__menu'>
          <FaIcons.FaBars/>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Navbar