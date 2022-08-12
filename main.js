import React, { Component } from "react";
import '../styles/main.css'
import barra from '../images/barra3.png'
import right from '../images/rightsvg.svg'
import ps from '../images/ps.png'
import apple from '../images/apple.png'
import google from '../images/googlep.png'
import windows from '../images/windows.png'
import teenA from '../images/teena.png'
import arrowAnimated from '../images/arrowdown.png'
import barra1 from '../images/barra.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.png'
import slide4 from '../images/slide4.jpg'
import arrowRight from '../images/arrowright.png'
import facebook from '../images/face.svg'
import twitter from '../images/twit.svg'
import youtube from '../images/youtube.svg'
import disco from '../images/disco.svg'
import insta from '../images/insta.svg'
import reddit from '../images/reddit.svg'

class Main extends Component {
    imghover() {
        const img = document.querySelector('.play')
        img.classList.add('svghover')
    }
    imghoverLeave() {
        const img = document.querySelector('.play')
        img.classList.remove('svghover')
    }
    hoverN() {
        const d1 = document.querySelector('.More')
        const d2 = document.querySelector('.Mais')
        d1.classList.add('Lhover')
        d2.classList.add('l2hover')

    }
    hoverNL() {
        const d1 = document.querySelector('.More')
        const d2 = document.querySelector('.Mais')
        d1.classList.remove('Lhover')
        d2.classList.remove('l2hover')

    }
    componentDidMount() {
        this.AnimacaoArrow()
        this.scrollmenu()
    }
    AnimacaoArrow() {
        const arrows = document.querySelectorAll('.arrow')
        arrows[0].classList.add('arrowA')

        setTimeout(() => {
            arrows[1].classList.add('arrowA')
        }, 500);
        setTimeout(() => {
            arrows[2].classList.add('arrowA')
        }, 1000);
    }
    scrollmenu() {
        const menuPosition = document.querySelector('.news-div')
        window.addEventListener('scroll', () => {
            const position = menuPosition.getBoundingClientRect()
            if (position.top < 500) {
                // alert('Menor q 500')
            }
        });

    }
    render() {
        return (
            <main>
                <div className="main-m">
                    <div className="maincontainer">
                        <div className="playdiv">
                            <img src={barra} alt='' ></img>
                            <div className="divbtn" onMouseMove={this.imghover} onMouseLeave={this.imghoverLeave}> <img src={right} className='play' alt="" /> </div>
                        </div>
                        <div className="plataformsdiv">
                            <div><h1 className="h1-multi">Released on Multiple Platforms - Download Now!</h1></div>
                            <div className="griddiv">
                                <div className="grid">  <img src={ps} alt='' /> </div>
                                <div className="grid">  <img src={apple} alt='' /> </div>
                                <div className="grid">  <img src={google} alt='' /> </div>
                                <div className="grid">  <img src={windows} alt='' /> </div>
                            </div>

                        </div>
                        <div className="lastdiv">
                            <div className="lflex"> <div className="teendiv"> <img src={teenA} className='teena' alt='' /> </div></div>
                            <div className="lflex2">
                                <img src={arrowAnimated} className='arrow' alt='' />
                                <img src={arrowAnimated} className='arrow' alt='' />
                                <img src={arrowAnimated} className='arrow' alt='' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="news-div">
                    <div className="news-container">
                        <div className="first-news">
                            <div className="d1n">
                                <img src={barra1} />
                            </div>
                            <div className="d2n">
                                <p>NEWS</p>
                            </div>
                            <div className="d3n">
                                <img src={barra1} className='barra-direita' />
                            </div>
                        </div>
                        <div className="flex-news">
                            <div className="slidediv">
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={slide1}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={slide2}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={slide3}
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={slide4}
                                            alt="Last slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>

                            </div>
                            <div className="newslist">
                                <div className='containernewsl'>
                                    <div className="tmn tmn2"><p className="latestp">Latest</p>  </div>
                                    <div className="tmn"><p>Sumeru Promotional Video | Genshin Impact</p> <span>Aug 11, 2022</span> </div>
                                    <div className="tmn"><p>Version 3.0 Special Program Preview</p> <span>Aug 11, 2022</span> </div>
                                    <div className="tmn"><p>"Evermotion Mechanical Painting" Gameplay Details</p><span>Aug 11, 2022</span> </div>
                                    <div className="tmn"><p>"Reminiscent Regiment" Gameplay Details</p> <span>Aug 3, 2022</span> </div>
                                    <div className="tmn"><p>Genshin Impact EP - Brillance of Blooming Fireworks</p>  <span>Aug 3, 2022</span> </div>
                                    <div className="tmn tmn3">  <div class='Mais' onMouseMove={this.hoverN} onMouseLeave={this.hoverNL}> </div> <p className="More" onMouseMove={this.hoverN} onMouseLeave={this.hoverNL}>More</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-fixed">
                    <div className="social-relative">
                        <div className="socialf-container">
                            <div className="gg2">
                                <p className="textsocial">Siga-nos</p>
                            </div>
                            <div className="flexsocial"> <img src={facebook}/>  <span>Facebook</span> </div>
                            <div className="flexsocial"> <img src={twitter}/> <span>Twitter</span></div>
                            <div className="flexsocial"> <img src={youtube}/> <span>Youtube</span></div>
                            <div className="flexsocial"> <img src={insta}/> <span>Instagram</span></div>
                            <div className="flexsocial"> <img src={disco}/> <span>Discord</span></div>
                            <div className="flexsocial"> <img src={reddit}/> <span>Reddit</span></div>
                            {/* <div className="flexsocial"></div> */}
                        </div>
                        <div className="absolute-seta"> <img src={arrowRight}></img> </div>
                    </div>
                </div>
            </main>

        )

    }
}
export default Main