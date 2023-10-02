import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/navbar.css'
import LOGO from '../assets/images/Android-removebg-preview.png'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      
        <nav>
          <div className="navbar">
            <div className="container-fluid nav-container">
              <input className="checkbox" type="checkbox" name="" id="" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <div className="logo">
                <img src={LOGO} height='60' width=''/>
              </div>
              <div className="menu-items">
                <li>
                <Link  to='/'>HOME</Link>
                </li>
                <li>
                <Link  to='/about'>ABOUT</Link>
                </li>
                <li>
                <Link  to='/offering'>OUR Offerings</Link>
                </li>
                <li>
                <Link  to='/work'>WORK</Link>
                </li>
                <li>
                <Link  to='/video'>VIDEO</Link>
                </li>
                <li>
                <Link  to='/contact'>CONTACT</Link>
                </li>
              </div>
            </div>
          </div>
        </nav>
      
    </>
  );
}

export default NavBar;
