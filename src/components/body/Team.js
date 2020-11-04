import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap'

import FImg1 from '../../assets/cfemale1.jpg'
import FImg2 from '../../assets/cfemale2.jpg'
import MImg1 from '../../assets/cmale1.jpg'
import MImg2 from '../../assets/cmale2.jpg'

import '../../css/body/team.css'

class Team extends Component {
    render() {
        return (
            <div className="team">
                <div className="bgimg">
                    <div className="wrapper">
                        <div className="content">
                            <h1>Team</h1>
                            <h2><span>WHO </span>WE ARE</h2>
                            <p>
                            Our success depends on the strength of our team. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation.
                            </p>
                            <Row>
                                <Col xs={12} sm={6} lg={3} className="col">
                                    <img src={FImg1} alt="female"/>
                                </Col>
                                <Col xs={12} sm={6} lg={3} className="col">
                                    <img src={FImg2} alt="female"/>
                                </Col>
                                <Col xs={12} sm={6} lg={3} className="col">
                                    <img src={MImg1} alt="male"/>
                                </Col>
                                <Col xs={12} sm={6} lg={3} className="col">
                                    <img src={MImg2} alt="male"/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team
