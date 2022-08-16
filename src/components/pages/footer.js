import React, { Component } from "react";
import '../styles/footer.css'
import genshinlogo from '../images/logo2.png'
import world from '../images/world.png'

class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cont: 0,
            aberto: false,
            ishover: false,
            reset: false
        }   
        this.hoverlanguagesL = this.hoverlanguagesL.bind(this)
        this.hoverlanguages = this.hoverlanguages.bind(this)

    }

    hoverlanguages() {
        const divworld = document.querySelector('.divworld')
        const img = document.querySelector('.worldimg')
        const hiddendiv = document.querySelector('.hiddendiv')

        if (this.state.aberto) {
            this.setState({ ishover: false })
            this.setState({ reset: true })
        } else {
            this.setState({ ishover: true })
        }
        if (this.state.reset) {
            setTimeout(() => {
                divworld.classList.remove('hoverdivworldL')
                hiddendiv.classList.add('hiddendivhover')
                divworld.classList.add('hoverdivworld')
                img.classList.add('marginL')
                this.setState({ reset: false })
            }, 100);
        } else {
            divworld.classList.remove('hoverdivworldL')
            hiddendiv.classList.add('hiddendivhover')
            divworld.classList.add('hoverdivworld')
            img.classList.add('marginL')
        }

    }
    hoverlanguagesL() {
        const divworld = document.querySelector('.divworld')
        const img = document.querySelector('.worldimg')
        const hiddendiv = document.querySelector('.hiddendiv')
        this.setState({ ishover: false })
        if (this.state.aberto) {
            return
        } else {
            divworld.classList.remove('hoverdivworld')
            hiddendiv.classList.remove('hiddendivhover')
            divworld.classList.add('hoverdivworldL')
            img.classList.remove('marginL')
        }

    }

    render() {
        return (
            <footer>
                <div className="normal-flex wf">
                    <div className="nf1">
                        <div className="p75">
                            <img src={genshinlogo} alt="" /> </div>
                        <div className="p25">
                            <div className="divworld" onMouseMove={this.hoverlanguages} onMouseLeave={this.hoverlanguagesL}> <img src={world} alt="" className="worldimg" />
                                <div className="hiddendiv"> <span className="hiddendivspan">English</span></div>
                            </div>

                        </div>
                    </div>
                    <div className="nf2">
                        <ul>
                            <li>Privacity Policy</li>
                            <li>Terms of Service</li>
                            <li>About Us</li>
                            <li>Contact Us</li>

                        </ul>
                    </div>
                </div>
                <div className="wf wf2">
                    <div className="classifi-div"> <img src={'https://webstatic.hoyoverse.com/upload/event/2020/09/14/e43f3f9f4e0ba4e5ddf02a1d8155caf9_4687563518401779475.png'} alt="" className='m1' /> <img alt="" src={'https://webstatic.hoyoverse.com/upload/event/2020/09/25/5e80165e2b66ed85c4b230e50a2aba33_3902890183311134652.png'} className='m2' /> </div>
                    <div className="text-div-f"> <p>"PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.

                        Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. All other trademarks are the property of their respective owners.</p> </div>
                </div>
                <div className="wf wf3">
                    <div className="hoyologo"> <img src="https://webstatic.hoyoverse.com/upload/event/2021/12/29/eaa64d81ae6a7318a6afb91cbffd83a4_118924438105936743.png" alt="" /> </div>
                    <div className="spandiv">
                        <span>Copyright © COGNOSPHERE. All Rights Reserved.</span>
                    </div>

                </div>
            </footer>
        )
    }
}
export default Footer