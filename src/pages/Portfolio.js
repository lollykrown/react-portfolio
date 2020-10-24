import React from 'react'
import styled from "styled-components";
import right from '../../src/right.svg';
import Navbar from '../components/Navbar'

function Portfolio() {

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
                            <h1 className="ml-3">portfolio</h1>
                        </div>
                    </section>
                    <section className="bottom-section">
                        <div className="bottom">
                            <div className="left">
                                <h3>Ol&#250;wak&#225;y&#242;d&#233; Agboola</h3>
                                <p className="title">Fullstack Developer/Mobile Developer</p>
                            </div>
                            <div className="right">
                                <p>Check me out &nbsp; <a href="https://oluwakayode.netlify.app"><img className="arrow" src={right} alt="" /></a></p>
                            </div>
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

export default Portfolio

const HomeWrapper = styled.div`



`;