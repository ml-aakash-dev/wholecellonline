import React, { Component } from 'react'
import { Link } from "react-scroll";

import NavigationBar from './NavigationBar'
import HamburgerMenu from './HamburgerMenu'
import MobileHamburgerMenu from './MobileHamburgerMenu'
import PageBorder from '../PageBorder'

import '../../../css/body/header/header.css'

class Header extends Component {
    render() {
        return (
            <div className={this.props.state1, "header"} id="header">
                <div className="ham-menu" id="ham-menu">
                <HamburgerMenu 
                scrollToWork={this.props.scrollToWork}
                scrollToProcess={this.props.scrollToProcess}
                scrollToHww={this.props.scrollToHww}
                scrollToWwa={this.props.scrollToWwa}
                scrollToNumbers={this.props.scrollToNumbers}
                    />
                </div>
                <div className="mobile-ham-menu" id="mobile-ham-menu">
                    <MobileHamburgerMenu 
                scrollToHeader={this.props.scrollToHeader}
                scrollToAbout={this.props.scrollToAbout}
                scrollToTeam={this.props.scrollToTeam}
                scrollToServices={this.props.scrollToServices}
                scrollToWork={this.props.scrollToWork}
                scrollToSkills={this.props.scrollToSkills}
                scrollToContact={this.props.scrollToContact}
                    />
                </div>
                <div className="bgimg">  
                    <div className="wrapper">
                        <div className="content">
                            <div className="center-text">
                                <h2>We <span>are</span></h2>
                                <h1>WHOLE CELL <span>ACCESSORIES</span></h1>
                                <p>INTEGER LIGULA ANTE, POSUERE ET ANTE QUIS, <br/>
                                 ELEIFEND ELEIFEND IPSUM. IN SED ODIO MI <br/>
                                  VIVAMUS DAPIBUS GRAVIDA.</p>
                                <div className="btn-group">
                                    <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration= {1000}
                                    >
                                        <button className="btn-au">About us</button>
                                    </Link>
                                    <Link
                                    activeClass="active"
                                    to="our-work"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration= {1000}
                                    >
                                        <button className="btn-ow">Our Work</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <PageBorder 
                        state1Handler={this.props.state1Handler}
                        state2Handler={this.props.state2Handler}
                        scrollToHeader={this.props.scrollToHeader}
                        scrollToAbout={this.props.scrollToAbout}
                        scrollToHww={this.props.scrollToHww}
                        scrollToTeam={this.props.scrollToTeam}
                        scrollToWwa={this.props.scrollToWwa}
                        scrollToServices={this.props.scrollToServices}
                        scrollToWork={this.props.scrollToWork}
                        scrollToProcess={this.props.scrollToProcess}
                        scrollToNumbers={this.props.scrollToNumbers}
                        scrollToSkills={this.props.scrollToSkills}
                        scrollToContact={this.props.scrollToContact}
                        state={this.props.state}
                        headerDot={this.props.headerDot}
                        aboutDot={this.props.aboutDot}
                        hwwDot={this.props.hwwDot}
                        teamDot={this.props.teamDot}
                        wwaDot={this.props.wwaDot}
                        servicesDot={this.props.servicesDot}
                        workDot={this.props.workDot}
                        processDot={this.props.processDot}
                        numbersDot={this.props.numbersDot}
                        skillsDot={this.props.skillsDot}
                        contactDot={this.props.contactDot}
                />
                
                <NavigationBar 
                        state1Handler={this.props.state1Handler}
                        state2Handler={this.props.state2Handler}
                        scrollToHeader={this.props.scrollToHeader}
                        scrollToAbout={this.props.scrollToAbout}
                        scrollToHww={this.props.scrollToHww}
                        scrollToTeam={this.props.scrollToTeam}
                        scrollToWwa={this.props.scrollToWwa}
                        scrollToServices={this.props.scrollToServices}
                        scrollToWork={this.props.scrollToWork}
                        scrollToProcess={this.props.scrollToProcess}
                        scrollToNumbers={this.props.scrollToNumbers}
                        scrollToSkills={this.props.scrollToSkills}
                        scrollToContact={this.props.scrollToContact}
                        state={this.props.state}
                        headerDot={this.props.headerDot}
                        aboutDot={this.props.aboutDot}
                        hwwDot={this.props.hwwDot}
                        teamDot={this.props.teamDot}
                        wwaDot={this.props.wwaDot}
                        servicesDot={this.props.servicesDot}
                        workDot={this.props.workDot}
                        processDot={this.props.processDot}
                        numbersDot={this.props.numbersDot}
                        skillsDot={this.props.skillsDot}
                        contactDot={this.props.contactDot}
                />
            </div>
        )
    }
}

export default Header