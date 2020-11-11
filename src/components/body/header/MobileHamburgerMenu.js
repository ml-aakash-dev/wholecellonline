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
                        <span className="title" onClick={this.props.scrollToNumbers}>
                            Numbers
                        </span>
                    </Col>
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
