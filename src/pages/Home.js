import React, { useRef } from 'react'
import TypeWriter from '../components/Typewriter'
import styled from "styled-components";
import Navbar from '../components/Navbar'
import right from '../../src/right.svg';
import { Link } from 'react-router-dom'

function Home() {

    const slide = useRef(null)

    const options={
        behaviour:'smooth',

    }
    return (
        <HomeWrapper className="container-fluid">
            <div className="custom-container">
                <Navbar />

                <main className="">
                    <aside>
                        <ul>
                            <li className="icon"><a href="https://github.com/lollykrown"><i className="fa fa-github" style={{ fontSize: "1.25em", color: "#ffffff" }}></i></a></li>
                            <li className="icon"><a href="https://twitter.com/lollykrown"><i className="fa fa-twitter " style={{ fontSize: "1.25em", color: "#ffffff" }}></i></a></li>
                            <li className="icon"><a href="https://facebook.com/lollykrown"><i className="fa fa-facebook " style={{ fontSize: "1.25em", color: "#ffffff" }}></i></a></li>
                            <li className="icon"><a href="https://wa.me/+2347034750495"><i className="fa fa-whatsapp " style={{ fontSize: "1.25em", color: "#ffffff" }}></i></a></li>
                            <li className="icon"><a href="https://linkedin.com/lollykrown"><i className="fa fa-linkedin " style={{ fontSize: "1.25em", color: "#ffffff" }}></i></a></li>
                        </ul>
                    </aside>
                    <section className="name">
                        <div >
                            <h1 className="ml-3"><TypeWriter className="" texts="Ol&#250;wak&#225;y&#242;d&#233;" /></h1>
                        </div>
                    </section>
                    <section className="bottom-section">
                        <div className="bottom">
                            <div className="left">
                                <h3>Ol&#250;wak&#225;y&#242;d&#233; Agboola</h3>
                                <p className="title">Fullstack Developer/Mobile Developer</p>
                            </div>
                            <Link to="/portfolio" className="right" ref={slide} onClick={() => slide.current.scrollIntoView(options)}>
                                <p>Check me out &nbsp; <a href="https://oluwakayode.netlify.app"><img className="arrow" src={right} alt="" /></a></p>
                            </Link>
                        </div>
                    </section>
                </main>

                <footer className="footer">
                    <p>&copy; 2020 <a href="https://lollykrown.xyz" target="_blank" rel="noreferrer noopener" >Ol&#250;wak&#225;y&#242;d&#233;.</a> All rights reserved.</p>
                </footer>

            </div>
        </HomeWrapper>
    )
}

export default Home

const HomeWrapper = styled.div`

    height: 92vh;
    width: 100%;
    background: url('/img/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 1000px 1000px rgba(0, 0, 0, 0.747);

    .custom-container {
        position: relative;
        border: 0.25em solid #ffffff;
        margin: 1em;
        border-radius: 1em;
        padding: 1em;
        min-height: 100%;
        height: 90vh;
      }
aside {
    width: 5%;
    position: fixed;
    top: 40%;
    left: 3%;
    color: #ffffff;
    z-index: 11;
  }
  aside li {
    list-style: none;
    margin-bottom: 0.5em;
  }
  .bottom {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 0 2em 0 1.75em;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
    position: relative;
    top: 1.5em;
  }
  footer {
    position: fixed;
    bottom: 0;
  }
  .arrow {
    width: 40px;
    height: 40px;
    transition: transform 3s ease;
    // animation: PanelSlide 15s;
  }
  a{
      transition: background 1s linear;
  }
  a:hover {
    text-decoration: none;
    color:#fff;
  }
  .name {
    text-align: center;
    position: absolute;
    top: 45%;
  }
  h1 {
    text-transform: uppercase;
    text-shadow: 2px 2px #fff8dc;
    color: #202020;
    font-size: 1.15rem;
    font-weight: 500;
    letter-spacing: 0.5em;
    text-align: center;

  }
    //sm
  @media (min-width: 576px) {
    h1 {
      font-size: 2.125rem;
    }
  }
  //md
  @media (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }
  }
  //lg
  @media (min-width: 992px) {
    h1 {
        font-size: 4rem;
      }
  }
  //xl
  @media (min-width: 1200px) {
    h1 {
      font-size: 4.9rem;
    }
  }

`;