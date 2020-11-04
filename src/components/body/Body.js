import React, { Component } from 'react'

import Header from './header/Header'
import Services from './Services'
import About from './About'
import HowWeWork from './HowWeWork'
import Team from './Team'

class Body extends Component {
    render() {
        return (
            <div>
                <Header />
                <Services />
                <About />
                <HowWeWork />
                <Team />
            </div>
        )
    }
}

export default Body
