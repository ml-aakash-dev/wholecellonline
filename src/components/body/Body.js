import React, { Component } from 'react'

import Header from './header/Header'
import Tabs from './Tabs'
import About from './About'
import HowWeWork from './HowWeWork'
import Team from './Team'
import WhoWeAre from './WhoWeAre'
import Services from './Services'
import OurWork from './OurWork'

class Body extends Component {
    render() {
        return (
            <div>
                <Header />
                <Tabs />
                <About />
                <HowWeWork />
                <Team />
                <WhoWeAre />
                <Services />
                <OurWork />
            </div>
        )
    }
}

export default Body
