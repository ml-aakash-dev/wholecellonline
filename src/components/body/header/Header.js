import React, { Component } from 'react'

import '../../../css/body/header/header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="bgimg">  
                    <div className="wrapper">
                        <div className="content">
                            <div className="center-text">
                                <h2>We <span>are</span></h2>
                                <h1>SKROLL<span>EX</span></h1>
                                <p>INTEGER LIGULA ANTE, POSUERE ET ANTE QUIS, <br/>
                                 ELEIFEND ELEIFEND IPSUM. IN SED ODIO MI <br/>
                                  VIVAMUS DAPIBUS GRAVIDA.</p>
                                <div className="btn-group">
                                    <button className="btn-au">About us</button>
                                    <button className="btn-ow">Our Work</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
