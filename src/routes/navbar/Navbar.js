import React from 'react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi";
import './navbar.css';
function Navbar() {
  return (
    <div className='header'>
    <Link to="/">
    <h1>Portfolio</h1>
    </Link>
    <ul className="nav-menu">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/service">Service</Link></li>
   <li><Link><GiHamburgerMenu/></Link></li>
    
    </ul>
    </div>
  )
}

export default Navbar;