import React, { Component } from 'react'
import {Row,Col} from "react-bootstrap"
import { Link} from "react-scroll";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import '../../../css/body/header/hamburgerMenu.css'

class HamburgerMenu extends Component {
    constructor(props){
        super(props)
        this.state={
            dropdownOpen: false,
            state: "state1 text"
        }
    }
    componentDidMount(){
    }
    dropdownToggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }
    scrollToSection = () => {
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
    }
    scrollToStoreLocator = () => {
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
        this.props.scrollToStoreLocator()
    }
    render() {
        return (
            <div className="hamburger-menu">
                <Row className="top">
                    <Col xs={12} xl={6} className="first col" onClick={this.props.scrollToWork}>
                        <div className={this.state.state}>
                            <span>
                                <span className="label">Our</span>
                                <br/>
                                <span className="title">Work</span>
                                {/* <UncontrolledDropdown className="title top">
                                <DropdownToggle className="stores-dropdown top" >
                                <Link onClick={this.scrollToSection}
                                    activeClass="active"
                                    to="storeLocator"
                                    spy={true}
                                    smooth={true}
                                    offset={-0}
                                    duration= {500}
                                    >
                                Stores <i className="fas fa-caret-down"></i>
                                </Link>
                                </DropdownToggle>
                                <DropdownMenu className="top">
                                    <DropdownItem className="top">
                                        <UncontrolledDropdown nav inNavbar className="bottom">
                                            <DropdownToggle nav caret className="bottom">
                                                Lansing
                                            </DropdownToggle>
                                            <DropdownMenu right className="bottom">
                                            <DropdownItem href="https://goo.gl/maps/PGXPnHurJMYUPdNs8" target="_blank" rel="noopener noreferrer">
                                            Whole Cell MAHZ
                                            </DropdownItem>
                                            <DropdownItem href="https://goo.gl/maps/BUoJ7xgWmhBZeNQU6" target="_blank" rel="noopener noreferrer">
                                            We Fix Phones
                                            </DropdownItem>
                                            <DropdownItem href="https://goo.gl/maps/BUoJ7xgWmhBZeNQU6" target="_blank" rel="noopener noreferrer">
                                            Accessories for Tablets
                                            </DropdownItem>
                                            <DropdownItem href="https://goo.gl/maps/mP9VyHYkvw2j8hY98" target="_blank" rel="noopener noreferrer">
                                            Boost Mobile
                                            </DropdownItem>
                                            <DropdownItem href="https://goo.gl/maps/eN1JF9eLa173pzjJ8" target="_blank" rel="noopener noreferrer">
                                            Boost Mobile Lansing
                                            </DropdownItem>
                                            <DropdownItem href="https://goo.gl/maps/eN1JF9eLa173pzjJ8" target="_blank" rel="noopener noreferrer">
                                            Cellphone Repair and Accessories
                                            </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </DropdownItem>
                                    <DropdownItem className="top">
                                        <UncontrolledDropdown nav inNavbar className="bottom">
                                        <DropdownToggle nav caret className="bottom">
                                        Chicago Heights
                                        </DropdownToggle>
                                        <DropdownMenu right className="bottom">
                                        <DropdownItem href="https://goo.gl/maps/MbwUrCAtpKoYFGF46" target="_blank" rel="noopener noreferrer">
                                        Whole Cell Chicago
                                        </DropdownItem>
                                        </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </DropdownItem>
                                    <DropdownItem className="top">
                                        <UncontrolledDropdown nav inNavbar className="bottom">
                                            <DropdownToggle nav caret className="bottom">
                                            Bolingbrook
                                            </DropdownToggle>
                                            <DropdownMenu right className="bottom">
                                            <DropdownItem href="https://goo.gl/maps/h1wyG9FwhSCgJYsF7" target="_blank" rel="noopener noreferrer">
                                            Bolingbrook Boost 33
                                            </DropdownItem>
                                            <DropdownItem href="https://goo.gl/maps/h1wyG9FwhSCgJYsF7" target="_blank" rel="noopener noreferrer">
                                            Whole Cell Bolingbrook
                                            </DropdownItem>
                                            <DropdownItem href="https://goo.gl/maps/ApxLE4HFLY9odMUN9" target="_blank" rel="noopener noreferrer">
                                            Boost Schmidt
                                            </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </DropdownItem>
                                    <DropdownItem className="top">
                                        <UncontrolledDropdown nav inNavbar className="bottom">
                                            <DropdownToggle nav caret className="bottom">
                                            Joliet
                                            </DropdownToggle>
                                            <DropdownMenu right className="bottom">
                                            <DropdownItem href="https://goo.gl/maps/r9itMeiHG2VSMVmq6" target="_blank" rel="noopener noreferrer">
                                            Whole Cell Joliet
                                            </DropdownItem>
                                            <DropdownItem href="https://goo.gl/maps/YXkwXARrMFcA2vVNA" target="_blank" rel="noopener noreferrer">
                                            Boost Jefferson
                                            </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown> */}
                                </span>
                        </div>
                    </Col>
                    <Col xs={12} xl={6} className="sec col" onClick={this.props.scrollToProcess}>
                    {/* <Link onClick={this.scrollToSection}
                        activeClass="active"
                        to="s-testimonials-gallery"
                        spy={true}
                        smooth={true}
                        offset={-0}
                        duration= {500}
                        > */}
                        <div className="text">
                            <span>
                                <span className="label">Our</span>
                                <br/>
                                <span className="title">Process</span>
                            </span>
                        </div>
                    {/* </Link> */}
                    </Col>
                </Row>
                <Row className="bottom">
                    <Col xs={12} xl={4} className="first col" onClick={this.props.scrollToHww}>
                    {/* <Link onClick={this.scrollToSection}
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-0}
                        duration= {500}
                        > */}
                            <div className="text">
                                <span>
                                    <span className="label">Awesome</span>
                                    <br/>
                                    <span className="title">How We Work</span>
                                </span>
                            </div>
                        {/* </Link> */}
                    </Col>
                    <Col xs={12} xl={4} className="sec col" onClick={this.props.scrollToWwa}>
                    {/* <Link onClick={this.scrollToSection}
                        activeClass="active"
                        to="client"
                        spy={true}
                        smooth={true}
                        offset={-0}
                        duration= {500}
                        > */}
                        <div className="text">
                            <span>
                                <span className="label">We Are Designers</span>
                                <br/>
                                <span className="title">Who We Are</span>
                            </span>
                        </div>
                        {/* </Link> */}
                    </Col>
                    <Col xs={12} xl={4} className="third col" onClick={this.props.scrollToNumbers}>
                    {/* <Link onClick={this.scrollToSection}
                        activeClass="active"
                        to="our-numbers"
                        spy={true}
                        smooth={true}
                        offset={-0}
                        duration= {500}
                        > */}
                        <div className="text">
                            <span>
                                <span className="label">Some Facts</span>
                                <br/>
                                <span className="title">Numbers</span>
                            </span>
                        </div>
                        {/* </Link> */}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HamburgerMenu
