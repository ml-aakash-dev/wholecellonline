import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

import '../../css/body/tabs.css'

class Tabs extends Component {
    render() {
        return (
            <div id="tabs" className="tabs">
                <Row className="bgimg">
                    <Col xs={12} md={4} className="col first">
                        <h1>RESPONSIVE</h1>
                        <h2>LAYOUT</h2>
                        <h3>
                            Responsive Styling<br/>
                            Retina Ready
                        </h3>
                    </Col>
                    <Col xs={12} md={4} className="col sec">
                        <h1>PARALLAX</h1>
                        <h2>EFFECTS</h2>
                        <h3>
                        Highly Optimized<br/>
                        Smooth Animations
                        </h3>
                    </Col>
                    <Col xs={12} md={4} className="col third">
                        <h1>LAYERSWP</h1>
                        <h2>FRAMEWORK</h2>
                        <h3>
                        Adapted for Multicolor Sections<br/>
                        Highly Customized
                        </h3>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Tabs
