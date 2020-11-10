import React, { Component } from 'react'
import {Row,Col} from "react-bootstrap"

import '../../../css/body/header/mobileHamburgerMenu.css'

class MobileHamburgerMenu extends Component {
    constructor(props){
        super(props)
        const token=localStorage.getItem("token")

        let loggedin = true
        if(token==null){
            loggedin = false
        }
        this.state={
            loginToggle: false,
            loggedin
        }
        this.loginElement = React.createRef()
    }
    onLoginToggle = () => {
        this.setState({
            loginToggle: !this.state.loginToggle
        })

        this.loginElement.current.onCloseModal()
    }
    componentDidMount(){
    }
    
    scrollToSection = () => {
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('mobile-ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
    }
    render() {
        return (
            <div className="mobile-hamburger-menu">
                <Row>
                    <Col xs={12} className="col">
                        <span className="title" onClick={this.props.scrollToHeader}>
                            Home
                        </span>
                    </Col>
                    <Col xs={12} className="col">
                        <span className="title" onClick={this.props.scrollToAbout}>
                            About
                        </span>
                    </Col>
                    <Col xs={12} className="col">
                        <span className="title" onClick={this.props.scrollToTeam}>
                            Team
                        </span>
                    </Col>
                    <Col xs={12} className="col">
                        <span className="title" onClick={this.props.scrollToServices}>
                            Services
                        </span>
                    </Col>
                    <Col xs={12} className="col">
                        <span className="title" onClick={this.props.scrollToWork}>
                            Work
                        </span>
                    </Col>
                    <Col xs={12} className="col">
                        <span className="title" onClick={this.props.scrollToSkills}>
                            Skills
                        </span>
                    </Col>
                    {/* <Col xs={12} className="col">
                        <span>
                        <UncontrolledDropdown nav inNavbar className="top title stores-dropdown">
                                    <DropdownToggle caret className="top dropdown-title">
                                        <span
                                        onClick={this.props.scrollToStoreLocator}>
                                            Our Stores
                                        </span>
                                    </DropdownToggle>
                                    <DropdownMenu right className="top">
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
                                </UncontrolledDropdown>
                        </span>
                    </Col>
                    <Col xs={12} className="col">
                        <span>
                            <UncontrolledDropdown inNavbar className="title">
                                <DropdownToggle caret className="dropdown-title">
                                    <span onClick={this.props.scrollToServices}>Services</span>
                                </DropdownToggle>
                                <DropdownMenu>
                                            {
                                        !this.state.loggedin ?
                                        <Link
                                            onClick={this.scrollToSection}
                                            activeClass="active"
                                            to="accessories"
                                            spy={true}
                                            smooth={true}
                                            offset={-0}
                                            duration= {500}
                                            >
                                        <DropdownItem className="top">
                                        Whole Cell Accessories
                                        </DropdownItem> 
                                    </Link> : 
                                        <Link
                                            onClick={this.scrollToSection}
                                            activeClass="active"
                                            to="accessories-content"
                                            spy={true}
                                            smooth={true}
                                            offset={-0}
                                            duration= {500}
                                            >
                                        <DropdownItem className="top">
                                        Whole Cell Accessories
                                        </DropdownItem> 
                                    </Link>
                                }
                                    <Link onClick={this.scrollToSection}
                                        activeClass="active"
                                        to="repair"
                                        spy={true}
                                        smooth={true}
                                        offset={-0}
                                        duration= {500}
                                        >
                                    <DropdownItem>
                                            We Fix Phones
                                    </DropdownItem>
                                            </Link>
                                    <Link onClick={this.scrollToSection}
                                        activeClass="active"
                                        to="activation"
                                        spy={true}
                                        smooth={true}
                                        offset={-0}
                                        duration= {500}
                                        >
                                    <DropdownItem>
                                    We Are Wireless
                                    </DropdownItem>
                                            </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </span>
                    </Col>
                    <Col xs={12} className="col">
                        <span>
                            <UncontrolledDropdown inNavbar className="title">
                                <DropdownToggle caret className="dropdown-title">
                                    <span  onClick={this.props.scrollToClient}>Our Reviews</span>
                                </DropdownToggle>
                                <DropdownMenu>
                                        <Link 
                                        onClick={this.scrollToSection}
                                        activeClass="active"
                                        to="s-customer-reviews"
                                        spy={true}
                                        smooth={true}
                                        offset={-30}
                                        duration= {500}
                                        >
                                    <DropdownItem>
                                            Customer Reviews
                                    </DropdownItem>
                                            </Link>
                                    <Link onClick={this.scrollToSection}
                                        activeClass="active"
                                        to="s-testimonials"
                                        spy={true}
                                        smooth={true}
                                        offset={-30}
                                        duration= {500}
                                        >
                                    <DropdownItem>
                                            Staff Testimonilas
                                    </DropdownItem>
                                            </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </span>
                    </Col>
                    <Col xs={12} className="col">
                        <span className="title">
                    <Link onClick={this.scrollToSection}
                        activeClass="active"
                        to="s-testimonials-gallery"
                        spy={true}
                        smooth={true}
                        offset={-0}
                        duration= {500}
                        >
                            Our Gallery
                            </Link>
                        </span>
                    </Col>
                    <Col xs={12} className="col">
                        <span>
                            <UncontrolledDropdown inNavbar className="title">
                                <DropdownToggle caret className="dropdown-title">
                                    <span onClick={this.props.scrollToJoinUs}>Join Us</span>
                                </DropdownToggle>
                                <DropdownMenu>
                                        <Link onClick={this.scrollToSection}
                                        activeClass="active"
                                        to="s-join-team"
                                        spy={true}
                                        smooth={true}
                                        offset={-30}
                                        duration= {500}
                                        >
                                    <DropdownItem>
                                            Join Our Team
                                    </DropdownItem>
                                            </Link>
                                    <Link onClick={this.scrollToSection}
                                        activeClass="active"
                                        to="s-be-the-boss"
                                        spy={true}
                                        smooth={true}
                                        offset={-30}
                                        duration= {500}
                                        >
                                    <DropdownItem>
                                            Be the Boss
                                    </DropdownItem>
                                            </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </span>
                    </Col>
                    <Col xs={12} className="col">
                        <span className="title">
                    <Link onClick={this.scrollToSection}
                        activeClass="active"
                        to="our-numbers"
                        spy={true}
                        smooth={true}
                        offset={-0}
                        duration= {500}
                        >
                            Our Numbers
                            </Link>
                        </span>
                    </Col> */}
                    <Col xs={12} className="col">
                        <span className="title" onClick={this.props.scrollToContact}>
                            Contact
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MobileHamburgerMenu
