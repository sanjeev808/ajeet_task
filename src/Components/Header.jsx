import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'
function Header() {
    return ( <div className="d-flex header">
      <h1> <NavLink to="/" >1</NavLink> </h1>
      <h1>  <NavLink to="/user">2</NavLink></h1>
    </div> );
}

export default Header;