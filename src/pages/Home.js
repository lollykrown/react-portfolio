import React, { useEffect, useRef } from 'react'
import TypeWriter from '../components/Typewriter'
import styled from "styled-components";
import Navbar from '../components/Navbar'
import down from '../../src/down.svg';

function Home() {
    const next = useRef(null)
    const third = useRef(null)

    const words = [
        `I'm Olu\u0301waka\u0301yo\u0300d\u00E9 👋 `,
        "A Software Developer ✨ ",
        "A Designer ⚡ ",
        "Open source Contributor"
    ]

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })


        return () => {

        }
    }, [])



    return (
        <HomeWrapper className="top">
            <Navbar />
            {/* <section className="top">
                <div className="caption" >
                    <div className="box">
                        <h2 className=""><TypeWriter className="" texts={words} /> </h2>

                    </div>
                </div>
                <img className="arrow" src={down} alt="down-arrow" onClick={() => window.scrollTo(0, next.current.offsetTop)}/>

            </section> */}


            <main className="">
                <aside>
                    <ul>
                        <li className="icon"><a href="https://github.com/lollykrown"><i className="fa fa-github" style={{ fontSize: "1.25em", color: "#ffffff" }}></i></a></li>
                        <li className="icon"><a href="https://twitter.com/lollykrown"><i className="fa fa-twitter " style={{ fontSize: "1.25em", color: "#ffffff" }}></i></a></li>
                        <li className="icon"><a href="https://facebook.com/lollykrown"><i className="fa fa-facebook " style={{ fontSize: "1.25em", color: "#ffffff" }}></i></a></li>
                        <li className="icon"><a href="https://whatsapp.com/lollykrown"><i className="fa fa-whatsapp " style={{ fontSize: "1.25em", color: "#ffffff" }}></i></a></li>
                        <li className="icon"><a href="https://linkedin.com/lollykrown"><i className="fa fa-linkedin " style={{ fontSize: "1.25em", color: "#ffffff" }}></i></a></li>
                    </ul>
                </aside>
                <section className="name">
                    <div >
                        <h1>Ol&#250;wak&#225;y&#242;d&#233;</h1>
                    </div>
                </section>
                <section className="bottom-section">
                    <div className="bottom">
                        <div className="left">
                            <h3>Ol&#250;wak&#225;y&#242;d&#233; Agboola</h3>
                            <p className="title">Fullstack Developer/Mobile Developer</p>
                        </div>
                        <div className="right">
                            <p>Check me out &nbsp; <a href="#"><img className="arrow" src="right.svg" alt="" /></a></p>
                        </div>
                    </div>
                </section>
            </main>





        </HomeWrapper>
    )
}

export default Home

const HomeWrapper = styled.div`
// background-color:#000000;
.top{
    height: 92vh;
    width: 100%;
    background: url('/img/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 1000px 1000px rgba(0, 0, 0, 0.747);
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    z-index:1;
}
.next, .third{
    height:600px;
}
  @media (max-width: 600px) {
    .hero {
      height: 22rem;
    }
  }
  .white{
      color:#ffffff;
  }
  .box{
    margin:0 auto;
    z-index:-1;
    padding-left:.5rem;
    width:400px;
    height:200px;
    border: 3px solid #ffffff;
  }
  .caption {
    display: flex;
    flex-direction: column;
    margin: auto;
    flex-grow: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  h2{
      width:max-content;
      overflow-x:visible;
  }
  .caption h2 {
    text-align: center;
    font-size: 3rem;
    color: #fff;
  }
  @media (max-width: 800px) {
    .caption h2 {
      font-size: 1.5rem;
    }
    .box{
        width:220px;
        height:120px;

    }
  }
  .btn {

    font-size: 16px;
    border-radius: 3px;
  }
  .arrow{
      width:50px;
      height:50px;
      margin:0 auto;
      padding: 1rem;
  }
  .arrow:hover {
    background-color:rgba(255, 255, 255, 0.3);
    border-radius: 3rem;      
}
//   .about {
//     color: #bbb;
//     font-size: 1.2rem;
//     margin: 0;
//     position: relative;
//     top: -4rem;
//   }
  
//   @media (max-width: 800px) {
//     .about {
//       top: -1rem;
//       font-size: 0.9rem;
//     }
//   }
  
//   .about:hover {
//     text-decoration: underline;
//     color: #fff;
//   }
`;