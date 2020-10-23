import React from 'react';
import styled from "styled-components";
import logo from '../../src/logo.svg'

const Navbar = () => (
  <NavWrapper>
      <nav className="nav-container">
          <a className="brand" href="https://oluwakayode.netlify.app">
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
.menu li {
  display: inline;
  margin-right: 3em;
  color: #ffffff;
}
.brand img {
  width: 50px;
  height: 40px;
}
.nav-container {
  width: 100%;
  padding: 0.5em 1em 0 1em;
}
background-color:#000000;
box-shadow: inset 0 0 1000px 1000px rgba(0, 0, 0, 0.747);

.nav-item{
  color:#ffffff;
  margin-right: 1rem;
}

// .logo{
//   margin-right:auto;
// }
`