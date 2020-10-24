import React from 'react';
import styled from "styled-components";
import logo from '../../src/logo.svg'

const Navbar = () => (
  <NavWrapper>
      <ul className="menu">
          <li className="nav-item logo"><img src={logo} alt="logo"/></li>
          <li className="nav-item mt-2">Portfolio</li>
          <li className="nav-item mt-2">About</li>
          <li className="nav-item mt-2">Contact</li>
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
.mt-2{
  margin-top:1rem;
}
ul {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 1rem 3rem 0 3rem;
}

.nav-item{
  color:#ffffff;
  margin-right: 1rem;
}

.logo{
  margin-right:auto;
}
`