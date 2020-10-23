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

    // let scrollHeight = Math.max(
    //     document.body.scrollHeight, document.documentElement.scrollHeight,
    //     document.body.offsetHeight, document.documentElement.offsetHeight,
    //     document.body.clientHeight, document.documentElement.clientHeight
    //   );
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })


        return () => {

        }
    }, [])



    return (
        <HomeWrapper className="">
            <Navbar />
            <section className="top">
                <div className="caption" >
                    <div className="box">
                        <h2 className=""><TypeWriter className="" texts={words} /> </h2>

                    </div>
                </div>
                <img className="arrow" src={down} alt="down-arrow" onClick={() => window.scrollTo(0, next.current.offsetTop)}/>

            </section>


            <section ref={next} className="next">
                <div className="caption" >
                    <div className="box">
                        <h2 className=""><TypeWriter className="" texts={words} /> </h2>
                        <br />
                    </div>
                </div>

                <button >arrow down</button>
            </section>
            <section ref={third} className="third">
                <div className="next">
                    <div className="caption" >
                        <div className="box">
                            <h2 className=""><TypeWriter className="" texts={words} /> </h2>
                            <br />
                        </div>
                    </div>
                    <img src={down} alt="jhh"/>

                    <button >arrow down</button>
                </div>
            </section>





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