import React from 'react';
import styled from "styled-components";
import logo from '../../src/logo.svg'

const Navbar = () => (
  <NavWrapper>
      <nav className="nav-container">
          <a className="brand" href="#">
            <img src={logo} alt="logo" loading="lazy" />
          </a>
          <ul className="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

    </NavWrapper>

);

export default Navbar;

const NavWrapper = styled.div`
background-color:#000000;
box-shadow: inset 0 0 1000px 1000px rgba(0, 0, 0, 0.747);
margin:0;

.menu {
  display: -webkit-box; 
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex; 
  display: flex;
}

ul {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 1rem 3rem;
}

.nav-item{
  color:#ffffff;
  margin-right: 1rem;
}

.logo{
  margin-right:auto;
}
`