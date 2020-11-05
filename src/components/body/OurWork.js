import React, { Component } from 'react'

import Img1 from '../../assets/work/1.jpg'
import Img2 from '../../assets/work/2.jpg'
import Img3 from '../../assets/work/3.jpg'
import Img4 from '../../assets/work/4.jpg'
import Img5 from '../../assets/work/5.jpg'
import Img6 from '../../assets/work/6.jpg'
import Img7 from '../../assets/work/7.jpg'
import Img8 from '../../assets/work/8.jpg'

import '../../css/body/ourWork.css'

class OurWork extends Component {
    render() {
        return (
            <div className="our-work">
                <div className="bgimg">
                    <div className="wrapper">
                        <div className="content">
                            <h1>OUR WORK</h1>
                            <h2><span>SOME RECENT</span> PROJECTS</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                             laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                             voluptate velit esse cillum dolore.
                            </p>
                            <div className="box">
                                <div className="img-box">
                                    <img src={Img1} alt="female"/>
                                </div>
                                <div className="sub-content">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img-box">
                                    <img src={Img2} alt="female"/>
                                </div>
                                <div className="sub-content">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img-box">
                                    <img src={Img3} alt="female"/>
                                </div>
                                <div className="sub-content">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img-box">
                                    <img src={Img4} alt="female"/>
                                </div>
                                <div className="sub-content">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img-box">
                                    <img src={Img5} alt="female"/>
                                </div>
                                <div className="sub-content">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img-box">
                                    <img src={Img6} alt="female"/>
                                </div>
                                <div className="sub-content">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img-box">
                                    <img src={Img7} alt="female"/>
                                </div>
                                <div className="sub-content">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img-box">
                                    <img src={Img8} alt="female"/>
                                </div>
                                <div className="sub-content">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurWork
