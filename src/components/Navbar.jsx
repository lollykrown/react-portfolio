import React from 'react';
import styled from "styled-components";
import logo from '../../src/logo.svg'

const Navbar = () => (
    <NavWrapper className="navbar navbar-expand-lg navbar-default bg-dark">
      <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" loading="lazy" />
          </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">Portfolio</a>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
        </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/lollykrown">Contact</a>
          </li>
        </ul>
      </div>
    </NavWrapper>
);

export default Navbar;

const NavWrapper = styled.nav`
background-color:#000000 !important;
// box-shadow: inset 0 0 1000px 1000px rgba(0, 0, 0, 0.747);

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

.nav-item{
  color:#ffffff;
  margin-right: 1rem;
}
a:hover {
  background-color: rgba(255,255,255,0.3);
  font-weight:400;
  text-decoration: none;
  color: #fff;
}
`