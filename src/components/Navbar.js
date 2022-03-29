import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

export default function () {
  return (
    <div className="custom-navbar" id="res-nav">
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <i className="fas fa-bars" id="btn"></i>
            <i className="fas fa-times" id="cancel"></i>
          </label>
          <NavLink className="logo" to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/buzz">Buzz</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/tech">Tech</NavLink></li>
            <li><NavLink to="/nontech">Non-Tech</NavLink></li>
            <li><NavLink to="/morecontent">More Content</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/aboutus">About Us</NavLink></li>
          </ul>
        </nav>
    </div>
  )
}
