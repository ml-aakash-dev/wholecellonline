import React, { Component } from 'react'

import Header from './header/Header'
import Tabs from './Tabs'
import About from './About'
import HowWeWork from './HowWeWork'
import Team from './Team'
import WhoWeAre from './WhoWeAre'
import Services from './Services'
import OurWork from './OurWork'
import Process from './Process'
import Numbers from './Numbers'
import OurSkills from './OurSkills'
import Contact from './Contact'

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
                <Process />
                <Numbers />
                <OurSkills />
                <Contact />
            </div>
        )
    }
}

export default Body
