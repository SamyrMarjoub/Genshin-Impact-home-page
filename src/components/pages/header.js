import React, { Component } from "react";
import music from '../images/nomusic.png'
import firstlogo from '../images/logo.svg'
import accont from '../images/account.png'
import downloadpng from '../images/download.png'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Cond1: false,
            Cond2: false,
            cont: 0
        }
        this.permanecer = this.permanecer.bind(this)
        this.hoverExplore = this.hoverExplore.bind(this)
        this.hoverExploreL = this.hoverExploreL.bind(this)
        this.hoverExplore2 = this.hoverExplore2.bind(this)
        this.hoverExploreL2 = this.hoverExploreL2.bind(this)
        this.sair = this.sair.bind(this)
        this.sair2 = this.sair2.bind(this)
        this.permanecer2 = this.permanecer2.bind(this)
        this.MenuMobile = this.MenuMobile.bind(this)

    }
    componentDidMount() {
        if (window.innerWidth <= 1000) {
            this.scrollmenu()
        } else {
            return
        }
    }
    scrollmenu() {
        const header = document.querySelector('.flex3')
        const logo = document.querySelector('.mblogo')
        const mbd = document.querySelector('.mbd')
        window.addEventListener('scroll', () => {
            if (window.scrollY !== 0) {
                header.classList.add('mbdarker')
                logo.classList.add('showM')
                mbd.classList.add('showM')
            } else {
                header.classList.remove('mbdarker')
                logo.classList.remove('showM')
                mbd.classList.remove('showM')
            }

        });

    }
    hoverFooter() {
        const span = document.querySelector('.loginspan')
        const img = document.querySelector('.imgf2f')
        span.classList.add('hover')
        img.classList.add('imghover')
    }
    hoverFooterLeave() {
        const span = document.querySelector('.loginspan')
        const img = document.querySelector('.imgf2f')
        span.classList.remove('hover')
        img.classList.remove('imghover')
    }
    hoverExplore() {
        const explore = document.querySelector('.menu-hover-f')
        explore.classList.add('menu-hover-f-show')
        this.setState({ Cond1: true })
    }
    hoverExploreL() {
        const explore = document.querySelector('.menu-hover-f')
        setTimeout(() => {
            if (this.state.Cond1 && this.state.Cond2) {
                explore.classList.add('menu-hover-f-show')
            } else {
                explore.classList.remove('menu-hover-f-show')
                this.setState({ Cond1: false })
            }
        }, 200);

    }
    hoverExplore2() {
        const explore = document.querySelector('.menu-hover-f2')
        explore.classList.add('menu-hover-f-show')
        this.setState({ Cond1: true })
    }
    hoverExploreL2() {
        const explore = document.querySelector('.menu-hover-f2')
        setTimeout(() => {
            if (this.state.Cond1 && this.state.Cond2) {
                explore.classList.add('menu-hover-f-show')
            } else {
                explore.classList.remove('menu-hover-f-show')
                this.setState({ Cond1: false })
            }
        }, 200);
    }
    permanecer() {
        this.setState({ Cond2: true })

    }
    sair() {
        this.setState({ Cond2: false })
    }
    permanecer2() {
        this.setState({ Cond2: true })

    }
    sair2() {
        this.setState({ Cond2: false })
    }
    MenuMobile() {
        this.setState({ cont: this.state.cont + 1 })
        const menumobile = document.querySelector('.menumobile')
        if (this.state.cont % 2 == 0) {
            document.body.style.overflow = 'hidden'
            menumobile.classList.add('MBshow')
        } else {
            document.body.style.overflow = 'visible'
            menumobile.classList.remove('MBshow')
        }
    }
    render() {
        return (
            <header>
                <div className="header-container">
                    <div className="flex1">
                        <div className="mscdiv"> <img src={music} alt=''></img> </div>
                        <div className="logodiv"> <img src={firstlogo} alt=''></img> </div>
                        <div className="listdiv">
                            <ul>
                                <li id="homeli"><span>HOME</span></li>
                                <li><span>NEWS</span></li>
                                <li><span>CHARACTERS</span></li>
                                <li className="arrow-after" onMouseMove={this.hoverExplore} onMouseLeave={this.hoverExploreL}> <span >EXPLORE</span>
                                    <div className="menu-hover-f" onMouseMove={this.permanecer} onMouseLeave={this.sair}>
                                        <div className="mhf"> <span>ABOUT GAME</span> </div>
                                        <div className="mhf"> <span>TEYVAT</span></div>
                                        <div className="mhf"> <span>ITINERARY</span></div>
                                        <div className="mhf"> <span>MANGA</span></div>
                                    </div></li>
                                <li className="hoyolab"><span>HoYoLAB</span></li>
                                <li className="topup"><span>TOP-UP</span></li>
                                <li style={{ marginRight: '0px' }} className='redem'><span>REDEEM CODE</span></li>
                                <li style={{ marginRight: '0px' }} className='more arrow-afterc' onMouseMove={this.hoverExplore2} onMouseLeave={this.hoverExploreL2}><span>MORE</span>
                                    <div className="menu-hover-f2" onMouseMove={this.permanecer2} onMouseLeave={this.sair2}>
                                        <div className="mhf2"> <span>HoYoLAB</span> </div>
                                        <div className="mhf2"> <span>TOP-UP</span></div>
                                        <div className="mhf2"> <span>REDEEM CODE</span></div>
                                    </div>

                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="flex2">
                        <div className="f2f" onMouseMove={this.hoverFooter} onMouseLeave={this.hoverFooterLeave}>
                            <span className="loginspan">Log in</span>
                            <img src={accont} className='imgf2f' alt='' />
                        </div>
                        <div className="f2f2"></div>

                    </div>
                    <div className="flex3">
                        <div className="fl3"> <img src={firstlogo} className='mblogo' /> </div>
                        <div className="fl3 fl3e">
                            <img src={downloadpng} className='mbd' />
                            <svg viewBox="0 0 100 80" width="35" height="35" fill="#ffffff" className="svg" onClick={this.MenuMobile}>
                                <rect width="100" height="20"></rect>
                                <rect y="30" width="100" height="20"></rect>
                                <rect y="60" width="100" height="20"></rect>
                            </svg> </div>
                        <div className="menumobile">
                            <div className="container-mb">
                            </div>
                            <div className="espacamento">
                                <div className="ctncmb ctncmbf"> <div className="cnsei cnseif"><span>HOME</span></div> </div>
                                <div className="ctncmb"><div className="cnsei"><span>NEWS</span></div></div>
                                <div className="ctncmb"><div className="cnsei"><span>CHARACTERS</span></div></div>
                                <div className="ctncmb"><div className="cnsei explore-s"><span >EXPLORE</span></div></div>
                                <div className="ctncmb"><div className="cnsei"><span>HoYoLAB</span></div></div>
                                <div className="ctncmb"><div className="cnsei"><span>TOP-UP</span></div></div>
                                <div className="ctncmb"><div className="cnsei"><span>REDEEM CODE</span></div></div>
                                <div className="ctncmb bgl">
                                    <div className="cnsei ctncmbl"><span className="contasvg">Log In</span></div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header