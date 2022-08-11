import React, { Component } from "react";
import music from '../images/nomusic.png'
import firstlogo from '../images/logo.svg'
import accont from '../images/account.png'
class Header extends Component {

    componentDidMount() {
        this.ScrollI()
    }
    ScrollI() {
        window.addEventListener('scroll', () => {
            console.log('ok')
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
    render() {
        return (
            <header>
                <div className="header-container">
                    <div className="flex1">
                        <div className="mscdiv"> <img src={music}></img> </div>
                        <div className="logodiv"> <img src={firstlogo}></img> </div>
                        <div className="listdiv">
                            <ul>
                                <li id="homeli">HOME</li>
                                <li>NEWS</li>
                                <li>CHARACTERS</li>
                                <li className="arrow-after">EXPLORE</li>
                                <li>HoYoLAB</li>
                                <li>TOP-UP</li>
                                <li style={{ marginRight: '0px' }}>REDEEM CODE</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex2">
                        <div className="f2f" onMouseMove={this.hoverFooter} onMouseLeave={this.hoverFooterLeave}>
                            <span className="loginspan">Log in</span>
                            <img src={accont} className='imgf2f' />
                        </div>
                        <div className="f2f2"></div>

                    </div>
                </div>
            </header>
        )
    }
}
export default Header