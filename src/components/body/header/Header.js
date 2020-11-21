import React, { Component } from 'react'
import $ from 'jquery'

import BgVideo from '../../../assets/header1.mp4'

import NavigationBar from './NavigationBar'
import HamburgerMenu from './HamburgerMenu'
import MobileHamburgerMenu from './MobileHamburgerMenu'
// import PageBorder from '../PageBorder'

import '../../../css/body/header/header.css'

class Header extends Component {
    componentDidMount(){var videoList = ["http://www.w3schools.com/html/mov_bbb.mp4", "http://media.sublimevideo.net/v/next15-sublime_360p.mp4"];
    videoList.sort(function(a, b) {return 0.5 - Math.random()});
    
    $("#videoplayer").html("<video id='rawvideo' autoplay poster='' id='bgvid' loop><source src='" + videoList[0] + "' type='video/mp4'></video>");
    }
    
    handleMapModal = () => {
        document.getElementById('map-modal').style.display="block"
        document.body.style.overflow="hidden"
    }
    render() {
        return (
            <div className={this.props.state1, "header"} id="header">
                <div className="ham-menu" id="ham-menu">
                <HamburgerMenu 
                scrollToWork={this.props.scrollToWork}
                scrollToHeader={this.props.scrollToHeader}
                scrollToServices={this.props.scrollToServices}
                scrollToContact={this.props.scrollToContact}
                scrollToNumbers={this.props.scrollToNumbers}
                    />
                </div>
                <div className="mobile-ham-menu" id="mobile-ham-menu">
                    <MobileHamburgerMenu 
                scrollToWork={this.props.scrollToWork}
                scrollToHeader={this.props.scrollToHeader}
                scrollToServices={this.props.scrollToServices}
                scrollToTestimonial={this.props.scrollToTestimonial}
                scrollToJoin={this.props.scrollToJoin}
                scrollToContact={this.props.scrollToContact}
                scrollToNumbers={this.props.scrollToNumbers}
                    />
                </div>
                    <video preload="auto" autoPlay muted loop="loop" id="header-video" className="video">
                    <source src={BgVideo} type="video/webm" />
                    Your browser does not support HTML5 video.
                    </video>
                {/* <div className="bgimg">   */}
                    <div className="wrapper">
                        <div className="content">
                            {/* <div className="center-text">
                                <h2>We <span>are</span></h2>
                                <h1>WHOLE CELL <span>ACCESSORIES</span></h1>
                                <p>Open To Public<br/>
                                Never Pay Retail!!!<br/></p>
                                <div className="btn-group">
                                        <button className="btn-au" onClick={this.props.scrollToServices}>Services</button>
                                        <button className="btn-ow" onClick={this.props.scrollToWork}>Our Work</button>
                                </div>
                            </div> */}
                        </div>
                        <div id="icon-wrap" className="icon-wrap" onClick={this.handleMapModal}>
                        <i className="fas fa-store store-icon"></i><h2>come visit our <span>retail locations</span></h2> 
                        </div>
                        {/* <div id="store-popup" className="store-popup">come visit our retail locations</div> */}
                    </div>
                {/* </div> */}
                

                {/* <PageBorder 
                        state1Handler={this.props.state1Handler}
                        state2Handler={this.props.state2Handler}
                        scrollToHeader={this.props.scrollToHeader}
                        scrollToServices={this.props.scrollToServices}
                        scrollToTestimonial={this.props.scrollToTestimonial}
                        scrollToWork={this.props.scrollToWork}
                        scrollToJoin={this.props.scrollToJoin}
                        scrollToNumbers={this.props.scrollToNumbers}
                        scrollToContact={this.props.scrollToContact}
                        state={this.props.state}
                        headerDot={this.props.headerDot}
                        servicesDot={this.props.servicesDot}
                        testimonialDot={this.props.testimonialDot}
                        workDot={this.props.workDot}
                        joinDot={this.props.joinDot}
                        numbersDot={this.props.numbersDot}
                        contactDot={this.props.contactDot}
                /> */}
                
                <NavigationBar 
                        state1Handler={this.props.state1Handler}
                        state2Handler={this.props.state2Handler}
                        scrollToHeader={this.props.scrollToHeader}
                        scrollToServices={this.props.scrollToServices}
                        scrollToTestimonial={this.props.scrollToTestimonial}
                        scrollToWork={this.props.scrollToWork}
                        scrollToJoin={this.props.scrollToJoin}
                        scrollToNumbers={this.props.scrollToNumbers}
                        scrollToContact={this.props.scrollToContact}
                        state={this.props.state}
                        headerDot={this.props.headerDot}
                        servicesDot={this.props.servicesDot}
                        testimonialDot={this.props.testimonialDot}
                        workDot={this.props.workDot}
                        joinDot={this.props.joinDot}
                        numbersDot={this.props.numbersDot}
                        contactDot={this.props.contactDot}
                />
            </div>
        )
    }
}

export default Header
