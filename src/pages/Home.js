import React, { useEffect, useRef } from 'react'
import TypeWriter from '../components/Typewriter'
import styled from "styled-components";
import Navbar from '../components/Navbar'
import down from '../../src/down.svg';
import logo from '../../src/logo.svg'

function Home() {
    const portfolio = useRef(null)
    const contact = useRef(null)

    const words = [
        `I'm Olu\u0301waka\u0301yo\u0300d\u00E9`,
        "A Software Developer ",
        "A Designer ",
        "Open source Contributor"
    ]

    useEffect(() => {
        // window.scrollTo({ top: 0, behavior: 'smooth' })


        return () => {

        }
    }, [])

    const siteDetails = [
        {
            name: 'Ecommerce',
            website: 'https://kay-react-ecommerce.netlify.app',
            imgUrl: 'https://res.cloudinary.com/lollykrown/image/upload/v1599647132/Portfolios/ecommerce.png'
        },
        {
            name: 'Triangle',
            website: 'https://oluwakayode.netlify.app',
            imgUrl: 'https://res.cloudinary.com/lollykrown/image/upload/v1598612374/Portfolios/triangle2.png'
        },
        {
            name: 'Black Portfolio',
            website: 'https://github.com/lollykrown/Templates/tree/master/Portfolio%20Templates',
            imgUrl: 'https://res.cloudinary.com/lollykrown/image/upload/v1597944493/Portfolios/portfolio-black1.png'
        },
        {
            name: 'Blue Portfolio',
            website: 'https://lollykrown.xyz',
            imgUrl: 'https://res.cloudinary.com/lollykrown/image/upload/v1597944476/Portfolios/blue.png'
        },
        {
            name: 'Tourist App',
            website: 'https://naija-tourist.herokuapp.com',
            imgUrl: 'https://res.cloudinary.com/lollykrown/image/upload/v1600288517/Portfolios/tourism.png'
        },
        {
            name: 'Position',
            website: 'https://github.com/lollykrown/Templates/tree/master/Portfolio%20Templates',
            imgUrl: 'https://res.cloudinary.com/lollykrown/image/upload/v1597946060/Portfolios/position.png'
        },
        {
            name: 'Tourist App',
            website: 'https://github.com/lollykrown/Templates/tree/master/Portfolio%20Templates',
            imgUrl: 'https://res.cloudinary.com/lollykrown/image/upload/v1598375046/Portfolios/tri.png'
        },
    ]

    return (
        <HomeWrapper>
            <Navbar />
            <section className="top">
                <div className="caption" >
                    <div className="box">
                        <h2 className=""><TypeWriter className="" texts={words} /> </h2>
                        <h2 className="l"> 👋 </h2>
                    </div>
                </div>
                <img className="arrow" src={down} alt="down-arrow" onClick={() => window.scrollTo(0, portfolio.current.offsetTop)} />

            </section>

            <section ref={portfolio} className="">
                <h1 className="center">Portfolio</h1>
                {siteDetails.map((site, index) => {
                    return (
                    <a className="column" key={index} href={site.website}>
                        <div className="portfolio-container ">
                            <div className="bg"></div>
                            <img className="img" width="500" height="300"
                                src={site.imgUrl} alt={site.name} />
                            <h3 className="portfolio-title">{site.name}</h3>
                        </div>
                    </a>)
                })
                }

                {/*
       
        <a href="https://github.com/lollykrown/Templates/tree/master/Portfolio%20Templates">
          <div class="portfolio-container wow pulse">
            <div class="bg"></div>
            <img class="img" width="500" height="300"
              src="https://res.cloudinary.com/lollykrown/image/upload/v1597944500/Portfolios/portfolio-black2.png">
            <h3 class="portfolio-title">Black Portfolio 2</h3>
          </div>
        </a> */}
                
            </section>
            {/* <footer class="footer">
                <div class="form wow pulse" id="contact">
                    <form name="contact" method="POST" data-netlify="true">
                        <p class="col">Please feel free to contact me for freelance project and collaboration</p>
                        <input type="text" id="name" name="name" placeholder="Name" required />
                        <input type="email" id="email" name="email" placeholder="Email" required />
                        <textarea type="text" id="message" name="message" placeholder="Message" required></textarea>
                        <input type="submit" class="btn-send" />
                    </form>
                </div>
                <h1>Contact</h1>
                <ul class="links">
                    <li class="icon"><a href="https://github.com/lollykrown"><i class="fa fa-github"
                        style="font-size:1.25em;color:#a4a4a4;margin-left: -1.8em;"></i></a></li>
                    <li class="icon"><a href="https://twitter.com/lollykrown"><i class="fa fa-twitter "
                        style="font-size:1.25em;color:#a4a4a4;"></i></a></li>
                    <li class="icon"><a href="https://whatsapp.com/lollykrown"><i class="fa fa-whatsapp "
                        style="font-size:1.25em;color:#a4a4a4;"></i></a></li>
                </ul>
                <h3 class="email-label">Email</h3>
                <a class="email" href="mailto:lollykrown@gmail.com">lollykrown@gmail.com</a>
                <h3 class="skype-label">Skype</h3>
                <p class="skype">Oluwakayy</p>

                <p class="footnotes">&copy; 2020 <a href="https://lollykrown.netlify.app"
                    target="_blank">Ol&#250;wak&#225;y&#242;d&#233;.</a> All rights reserved.</p>
            </footer>
 */}





        </HomeWrapper >
    )
}

export default Home

const HomeWrapper = styled.div`

.top{
    height: 88vh;
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
  .l{
      margin:0 auto;
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
      width:80px;
      height:80px;
      margin:0 auto 1.5rem auto;
      padding: 1rem;
  }
  .arrow:hover {
    background-color:rgba(255, 255, 255, 0.3);
    border-radius: 3rem;      
}
  
//   @media (prefers-reduced-motion: no-preference) {
//     .arrow {
//       animation: App-logo-spin infinite 20s linear;
//     }
//   }
  
// keyframes App-logo-spin {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }

  .column {
    float: left;
    width: 50%;
    padding: 10px;
  }
  
  .portfolio:after {
    content: "";
    display: table;
    clear: both;
  }

.img {
    width: 90%;
    height: 70%;
    margin-left: 1rem;
    z-index: 11;
    box-shadow: 5px 15px 15px 15px rgba(0,0,0,0.35)
}
.portfolio-container {
    position: relative;
    margin: 0 0 3em 0;
}
.portfolio-title {
    margin-left: 1rem;
    margin-top: 0;
    color: #ffffff;
    max-width: 400px; */
}
.center {
    text-align:center;
    font-size: 3rem;
}
.bg {
    background-color: #000fff;
    box-shadow: inset 0 0 1000px 1000px rgba(0, 0, 0, 0.747);
    width: 90%;
    height: 92%;
    position: absolute;
    left:0;
    top:2rem;
    z-index: -1;
}
@media (max-width: 600px) {

  }



@media only screen and (max-width: 767px) { 
    .top {
        height: 84vh;
      }
      .column {
          width: 100%;
        }
    // .email, .email-label, .skype,.skype-label {
    //     display: none;
    // }
    // form {
    //     padding: 2em;
    //     width: 100%;
    //     padding: 10px;
    // }
    // footer{
    //     padding: 1em 3em;
    // }
    // .right {
    //     position: absolute;
    //     right: 0
    // }
    // img[src="sq-fill.svg"]{
    //     width: 3.125em;
    //     height:3.125em
    // }
    // .fa, .fa-twitter, .fa-github, .fa-whatsapp {
    //     font-size:1.25em !important;
    // }
}
@media only screen and (min-width: 768px) and (max-width: 991px) { 

}
@media only screen and (min-width: 992px) and (max-width: 1200px) { 

}

`;