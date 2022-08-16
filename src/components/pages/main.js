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
import slide1 from '../images/slide4.jpg'
import slide2 from '../images/slide3.jpg'
import slide3 from '../images/slide2.jpg'
import slide4 from '../images/slide1.jpg'
import arrowRight from '../images/arrowright.png'
import facebook from '../images/face.svg'
import twitter from '../images/twit.svg'
import youtube from '../images/youtube.svg'
import disco from '../images/disco.svg'
import insta from '../images/insta.svg'
import reddit from '../images/reddit.svg'
import jean from '../images/jean2.png'
import xiao from '../images/xiao.png'
import ayaka from '../images/ayaka.png'
import world from '../images/world.png'
import genshinlogo from '../images/logo2.png'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            MenuCont: 0
        }
        this.newsA = this.newsA.bind(this)
    }
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
        const socialfixed = document.querySelector('.social-fixed')
        const header = document.querySelector('header')
        const width = window.innerWidth;
        if (width <= 1000) {
            return
        } else {
            window.addEventListener('scroll', () => {
                const position = menuPosition.getBoundingClientRect()
                if (position.top < 500) {
                    socialfixed.classList.remove('socialdisplay2')
                    socialfixed.classList.add('socialdisplay')
                } else {
                    socialfixed.classList.remove('socialdisplay')
                    socialfixed.classList.add('socialdisplay2')
                }
                if (position.top < 900) {
                    header.classList.add('Darker')
                } else {
                    header.classList.remove('Darker')
                }
            });
        }


    }
    newsA() {
        this.setState({ MenuCont: this.state.MenuCont + 1 })
        const newsdiv = document.querySelector('.social-fixed')
        const imgseta = document.querySelector('.seta-n')

        if (this.state.MenuCont % 2 === 0) {
            newsdiv.classList.remove('showN2')
            newsdiv.classList.add('showN')
            imgseta.classList.remove('setaB')
            imgseta.classList.add('setaA')

        } else {
            newsdiv.classList.remove('showN')
            newsdiv.classList.add('showN2')
            imgseta.classList.remove('setaA')
            imgseta.classList.add('setaB')
        }
    }
    mondhover() {
        const jean = document.querySelector('.jean')
        jean.classList.add('showCharacter')
    }
    mondhoverL() {
        const jean = document.querySelector('.jean')
        jean.classList.remove('showCharacter')
    }
    liyuehover() {
        const xiao = document.querySelector('.xiao')
        xiao.classList.add('showCharacter')
    }
    liyuehoverL() {
        const xiao = document.querySelector('.xiao')
        xiao.classList.remove('showCharacter')
    }
    inazumahover() {
        const ayaka = document.querySelector('.ayaka')
        ayaka.classList.add('showCharacter')
    }
    inazumahoverL() {
        const ayaka = document.querySelector('.ayaka')
        ayaka.classList.remove('showCharacter')
    }
    imgnews() {
        const e1 = document.querySelector('.e1')
        e1.classList.add('imgsocial')
    }
    imgnews2() {
        const e2 = document.querySelector('.e2')
        e2.classList.add('imgsocial')

    }
    imgnews3() {
        const e3 = document.querySelector('.e3')
        e3.classList.add('imgsocial')

    }
    imgnews4() {
        const e4 = document.querySelector('.e4')
        e4.classList.add('imgsocial')

    }
    imgnews5() {
        const e5 = document.querySelector('.e5')
        e5.classList.add('imgsocial')

    }
    imgnews6() {
        const e6 = document.querySelector('.e6')
        e6.classList.add('imgsocial')
    }
    imgnewsL() {
        const e1 = document.querySelector('.e1')
        e1.classList.remove('imgsocial')
    }
    imgnewsL2() {
        const e2 = document.querySelector('.e2')
        e2.classList.remove('imgsocial')

    }
    imgnewsL3() {
        const e3 = document.querySelector('.e3')
        e3.classList.remove('imgsocial')

    }
    imgnewsL4() {
        const e4 = document.querySelector('.e4')
        e4.classList.remove('imgsocial')

    }
    imgnewsL5() {
        const e5 = document.querySelector('.e5')
        e5.classList.remove('imgsocial')

    }
    imgnewsL6() {
        const e6 = document.querySelector('.e6')
        e6.classList.remove('imgsocial')

    }
    render() {
        return (
            <main>
                <div className="main-m">
                    <img src={genshinlogo} className='logoMain' />
                    <div className="maincontainer">
                        <div className="playdiv">
                            <img src={barra} alt='' ></img>
                            <div className="divbtn" onMouseMove={this.imghover} onMouseLeave={this.imghoverLeave}> <img src={right} className='play' alt="" /> </div>
                        </div>
                        <div className="plataformsdiv">
                            <div className="cntrf">
                                <div><h1 className="h1-multi">Released on Multiple Platforms - Download Now!</h1></div>
                                <div className="griddiv">
                                    <div className="grid">  <img src={ps} alt='' className="imgbtn" /> </div>
                                    <div className="grid">  <img src={apple} alt=''  className="imgbtn" /> </div>
                                    <div className="grid">  <img src={google} alt=''  className="imgbtn" /> </div>
                                    <div className="grid">  <img src={windows} alt=''  className="imgbtn" /> </div>
                                </div>
                            </div>
                            <div className="divmb-d">
                                <div className="f2f22"> <span>DOWNLOAD NOW</span> </div>

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
                                <img src={barra1} alt='' />
                            </div>
                            <div className="d2n">
                                <p>NEWS</p>
                            </div>
                            <div className="d3n">
                                <img src={barra1} className='barra-direita' alt='' />
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
                                    <div className="tmn tmn2 a"><p className="latestp">Latest</p>  </div>
                                    <div className="tmn a"><p>The Shimmering Voyage Vol. 2｜Genshin Impact</p> <span>Aug 15, 2022</span> </div>
                                    <div className="tmn a"><p>The Version 3.0 "The Morn a Thousand Roses Brings" Prev.. </p> <span>Aug 14, 2022</span> </div>
                                    <div className="tmn a"><p>Sumeru Live Symphony Performance | Genshin Impact</p><span>Aug 14, 2022</span> </div>
                                    <div className="tmn a"><p>Versions 3.0 – 3.2 Duration Details</p> <span>Aug 13, 2022</span> </div>
                                    <div className="tmn a"><p>Version 3.0 "The Morn a Thousand Roses Brings" Trailer |</p>  <span>Aug 13, 2022</span> </div>
                                    <div className="tmn tmn3">  <div className='Mais' onMouseMove={this.hoverN} onMouseLeave={this.hoverNL}> </div> <p className="More" onMouseMove={this.hoverN} onMouseLeave={this.hoverNL}>More</p></div>

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
                            <div className="flexsocial" onMouseMove={this.imgnews} onMouseLeave={this.imgnewsL}> <img src={facebook} alt='' className="e1" />  <span>Facebook</span> </div>
                            <div className="flexsocial" onMouseMove={this.imgnews2} onMouseLeave={this.imgnewsL2}> <img src={twitter} alt='' className="e2" /> <span>Twitter</span></div>
                            <div className="flexsocial" onMouseMove={this.imgnews3} onMouseLeave={this.imgnewsL3}> <img src={youtube} alt='' className="e3" /> <span>Youtube</span></div>
                            <div className="flexsocial" onMouseMove={this.imgnews4} onMouseLeave={this.imgnewsL4}> <img src={insta} alt='' className="e4" /> <span>Instagram</span></div>
                            <div className="flexsocial" onMouseMove={this.imgnews5} onMouseLeave={this.imgnewsL5}> <img src={disco} alt='' className="e5" /> <span>Discord</span></div>
                            <div className="flexsocial" onMouseMove={this.imgnews6} onMouseLeave={this.imgnewsL6}> <img src={reddit} alt='' className="e6" /> <span>Reddit</span></div>
                            {/* <div className="flexsocial"></div> */}
                        </div>
                        <div className="absolute-seta" onClick={this.newsA}> <img src={arrowRight} alt='' className='seta-n'></img> </div>
                    </div>
                </div>
                <section>
                    <div className="mond sctm" onMouseMove={this.mondhover} onMouseLeave={this.mondhoverL}>
                        <div className="starimgdiv"> <div className="primo"><span className="text-star">Mondstadt</span></div> <div className="characterdiv"><img src={jean} className='imgcharacter jean' alt="" /></div> </div>
                    </div>
                    <div className="liyue sctm" onMouseMove={this.liyuehover} onMouseLeave={this.liyuehoverL}>
                        <div className="starimgdiv"> <div className="primo"><span className="text-star">Liyue</span></div> <div className="characterdiv"><img src={xiao} className='imgcharacter xiao' alt="" /> </div> </div>
                    </div>
                    <div className="inazuma sctm" onMouseMove={this.inazumahover} onMouseLeave={this.inazumahoverL}>
                        <div className="starimgdiv"> <div className="primo"><span className="text-star">inazuma</span></div> <div className="characterdiv"><img src={ayaka} className='imgcharacter ayaka' alt="" /></div>  </div>
                    </div>
                    <div className="coming">
                        <div className="starimgdivu"> <div className="primo2"><span className="text-star ts2">Coming Soon</span></div></div>
                    </div>
                    {/* <div className=""></div> */}
                    <div className="social-icons-div">
                        <div className="social-icons-div-c">
                            <div className="social-icons-div-a"> <img src={facebook} className='socialimgend' alt="" /> </div>
                            <div className="social-icons-div-a"> <img src={twitter} className='socialimgend' alt="" /> </div>
                            <div className="social-icons-div-a"> <img src={youtube} className='socialimgend' alt="" /> </div>
                            <div className="social-icons-div-a"> <img src={insta} className='socialimgend' style={{ width: '25px' }} alt="" /> </div>
                            <div className="social-icons-div-a"> <img src={disco} className='socialimgend' alt="" /> </div>
                            <div className="social-icons-div-a"> <img src={reddit} className='socialimgend' alt="" /> </div>

                        </div>
                        <div className="languagemobile">
                            <img src={world} alt=''/>
                            <span>English</span>
                        </div>
                    </div>
                </section>
            </main>

        )

    }
}
export default Main