import React from 'react'
import './App.css'
import { Button, Icon } from 'react-materialize'

const Nav = () => {
  return (
    <div id="navbar">
      <div className="signature" left>
        <h5>Nate Semmler</h5>
      </div>
      <div className="nav-logos" right>
        <a className="email" href="#"><i className="far fa-envelope fa-2x"></i></a>
        <a className="linkedin" href="#"><i className="fab fa-linkedin-in fa-2x"></i></a>
      </div>
    </div>

  )
}

export default Nav
