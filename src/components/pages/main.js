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
class Main extends Component {
    imghover() {
        const img = document.querySelector('.play')
        img.classList.add('svghover')
    }
    imghoverLeave() {
        const img = document.querySelector('.play')
        img.classList.remove('svghover')
    }
    render() {
        return (
            <main>
                <div className="maincontainer">
                    <div className="playdiv">
                        <img src={barra}></img>
                        <div className="divbtn" onMouseMove={this.imghover} onMouseLeave={this.imghoverLeave}> <img src={right} className='play' /> </div>
                    </div>
                    <div className="plataformsdiv">
                        <div><h1 className="h1-multi">Released on Multiple Platforms - Download Now!</h1></div>
                        <div className="griddiv">
                            <div className="grid">  <img src={ps} /> </div>
                            <div className="grid">  <img src={apple} /> </div>
                            <div className="grid">  <img src={google} /> </div>
                            <div className="grid">  <img src={windows} /> </div>
                        </div>

                    </div>
                    <div className="lastdiv">
                        <div className="lflex"> <div className="teendiv"> <img src={teenA} className='teena' /> </div></div>
                        <div className="lflex2"> 
                                <img src={arrowAnimated}/>
                                <img src={arrowAnimated}/>
                                <img src={arrowAnimated}/>
                        </div>

                    </div>
                </div>
            </main>
        )
    }
}
export default Main