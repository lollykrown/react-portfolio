import React from 'react';
import styled from "styled-components";
import logo from '../../src/logo.svg'

const Navbar = () => (
  <NavWrapper>
      <ul className="menu">
          <li className="nav-item logo"><img src={logo} alt="logo"/></li>
          <li className="nav-item">Logo</li>
          <li className="nav-item">Logo</li>
          <li className="nav-item">Logo</li>
      </ul>

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