import React, { Component } from 'react'

import Header from './header/Header'
import Services from './Services'
import About from './About'

class Body extends Component {
    render() {
        return (
            <div>
                <Header />
                <Services />
                <About />
            </div>
        )
    }
}

export default Body
