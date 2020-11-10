import React, { Component } from 'react'

import Header from './header/Header'
import Tabs from './services/Tabs'
import Accessories from './services/Accessories'
import Repair from './services/Repair'
import Activation from './services/Activation'
// import About from './About'
import HowWeWork from './HowWeWork'
import Team from './Team'
import WhoWeAre from './WhoWeAre'
import Services from './Services'
import OurWork from './OurWork'
import Process from './Process'
import Numbers from './Numbers'
import OurSkills from './OurSkills'
import Contact from './Contact'
import Footer from './Footer'

class Body extends Component {
    constructor(props){
        super(props)
        this.state={
            state1: "state1",
            headerDot: true,
            servicesDot: false,
            aboutDot:false,
            hwwDot: false,
            teamDot: false,
            wwaDot: false,
            workDot: false,
            processDot: false,
            numbersDot: false,
            skillsDot: false,
            contactDot: false
        }
        this.header = React.createRef()
        this.services = React.createRef()
        // this.about = React.createRef()
        // this.hww = React.createRef()
        // this.team = React.createRef()
        // this.wwa = React.createRef()
        this.work = React.createRef()
        // this.process = React.createRef()
        this.numbers = React.createRef()
        // this.skills = React.createRef()
        this.contact = React.createRef()
    } 
    
    
    componentDidMount() {

        const state2 = window.pageYOffset > 10 ? "state2" : "state1";

        this.setState({ 
            state1: state2
            });
        
        document.addEventListener("scroll", () => {
            const state2 = window.pageYOffset > 10 ? "state2" : "state1";
    
            this.setState({ 
                state1: state2
                });

                
            if(window.scrollY-60 < document.getElementById("tabs").offsetTop)
            {
        
                this.setState({
                    headerDot: true,
                    servicesDot: false,
                    aboutDot:false,
                    hwwDot: false,
                    teamDot: false,
                    wwaDot: false,
                    servicesDot: false,
                    workDot: false,
                    processDot: false,
                    numbersDot: false,
                    skillsDot: false,
                    contactDot: false
        
                })
            } 
            if(window.scrollY >= document.getElementById("tabs").offsetTop-50)
            {
                this.setState({
                    headerDot: false,
                    servicesDot: true,
                    aboutDot:false,
                    hwwDot: false,
                    teamDot: false,
                    wwaDot: false,
                    workDot: false,
                    processDot: false,
                    numbersDot: false,
                    skillsDot: false,
                    contactDot: false
        
                })
            }
            // if(window.scrollY >= document.getElementById("about").offsetTop-70)
            // {
            //     this.setState({
            //         headerDot: false,
            //         servicesDot: false,
            //         aboutDot:true,
            //         hwwDot: false,
            //         teamDot: false,
            //         wwaDot: false,
            //         servicesDot: false,
            //         workDot: false,
            //         processDot: false,
            //         numbersDot: false,
            //         skillsDot: false,
            //         contactDot: false
        
            //     })
            // }
            // if(window.scrollY >= document.getElementById("hww").offsetTop - 80)
            // {
            //     this.setState({
            //         headerDot: false,
            //         servicesDot: false,
            //         aboutDot:false,
            //         hwwDot: true,
            //         teamDot: false,
            //         wwaDot: false,
            //         workDot: false,
            //         processDot: false,
            //         numbersDot: false,
            //         skillsDot: false,
            //         contactDot: false
        
            //     })
            // }
            // if(window.scrollY >= document.getElementById("team").offsetTop-50)
            // {
            //     this.setState({
            //         headerDot: false,
            //         servicesDot: false,
            //         aboutDot:false,
            //         hwwDot: false,
            //         teamDot: true,
            //         wwaDot: false,
            //         workDot: false,
            //         processDot: false,
            //         numbersDot: false,
            //         skillsDot: false,
            //         contactDot: false
        
            //     })
            // }
            // if(window.scrollY >= document.getElementById("wwa").offsetTop-160)
            // {
            //     this.setState({
            //         headerDot: false,
            //         servicesDot: false,
            //         aboutDot:false,
            //         hwwDot: false,
            //         teamDot: false,
            //         wwaDot: true,
            //         workDot: false,
            //         processDot: false,
            //         numbersDot: false,
            //         skillsDot: false,
            //         contactDot: false
        
            //     })
            // }
            if(window.scrollY >= document.getElementById("work").offsetTop-50)
            {
                this.setState({
                    headerDot: false,
                    servicesDot: false,
                    aboutDot:false,
                    hwwDot: false,
                    teamDot: false,
                    wwaDot: false,
                    workDot: true,
                    processDot: false,
                    numbersDot: false,
                    skillsDot: false,
                    contactDot: false
        
                })
            }
            // if(window.scrollY >= document.getElementById("process").offsetTop-50)
            // {
            //     this.setState({
            //         headerDot: false,
            //         servicesDot: false,
            //         aboutDot:false,
            //         hwwDot: false,
            //         teamDot: false,
            //         wwaDot: false,
            //         workDot: false,
            //         processDot: true,
            //         numbersDot: false,
            //         skillsDot: false,
            //         contactDot: false
        
            //     })
            // }
            if(window.scrollY >= document.getElementById("numbers").offsetTop-140)
            {
                this.setState({
                    headerDot: false,
                    servicesDot: false,
                    aboutDot:false,
                    hwwDot: false,
                    teamDot: false,
                    wwaDot: false,
                    workDot: false,
                    processDot: false,
                    numbersDot: true,
                    skillsDot: false,
                    contactDot: false
        
                })
            }
            // if(window.scrollY >= document.getElementById("skills").offsetTop-50)
            // {
            //     this.setState({
            //         headerDot: false,
            //         servicesDot: false,
            //         aboutDot:false,
            //         hwwDot: false,
            //         teamDot: false,
            //         wwaDot: false,
            //         workDot: false,
            //         processDot: false,
            //         numbersDot: false,
            //         skillsDot: true,
            //         contactDot: false
        
            //     })
            // }
            if(window.scrollY >= document.getElementById("contact").offsetTop-50)
            {
                this.setState({
                    headerDot: false,
                    servicesDot: false,
                    aboutDot:false,
                    hwwDot: false,
                    teamDot: false,
                    wwaDot: false,
                    workDot: false,
                    processDot: false,
                    numbersDot: false,
                    skillsDot: false,
                    contactDot: true
        
                })
            }
        })
        
    } 
    

    scrollToHeader = () => {
        //.current is verification that your element has rendered
        if(this.header.current){
            this.header.current.scrollIntoView({ 
               behavior: "smooth"
            })
        }
        if(window.pageYOffset<10){
            this.setState({
                state1: "state1"
            })
        }
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('mobile-ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
    }
    scrollToServices = () => {
        const store = document.getElementById('tabs').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({
            top: store -40, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
          });
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('mobile-ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
    }
    scrollToAccessories = () => {
        const store = document.getElementById('accessories').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({
            top: store -0, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
          });
    }
    scrollToRepair = () => {
        const store = document.getElementById('repair').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({
            top: store -0, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
          });
    }
    scrollToActivation = () => {
        const store = document.getElementById('activation').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({
            top: store -0, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
          });
    }
    // scrollToAbout = () => {
    //     const store = document.getElementById('about').offsetTop
    //     // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //     window.scrollTo({
    //         top: store -60, //add your necessary value
    //         behavior: "smooth"  //Smooth transition to roll
    //       });
    //     document.getElementById('nav-ham-icon').style.display="block"
    //     document.getElementById('nav-cross-icon').style.display="none"
    //     document.getElementById('ham-menu').style.display="none"
    //     document.getElementById('mobile-ham-menu').style.display="none"
    //     document.getElementById('nav-logo-bottom').style.display="block" 
    //     document.body.style.overflow="auto"
    // }
    // scrollToHww = () => {
    //     const store = document.getElementById('hww').offsetTop
    //     // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //     window.scrollTo({
    //         top: store - 70, //add your necessary value
    //         behavior: "smooth"  //Smooth transition to roll
    //       });
    //     document.getElementById('nav-ham-icon').style.display="block"
    //     document.getElementById('nav-cross-icon').style.display="none"
    //     document.getElementById('ham-menu').style.display="none"
    //     document.getElementById('mobile-ham-menu').style.display="none"
    //     document.getElementById('nav-logo-bottom').style.display="block" 
    //     document.body.style.overflow="auto"
    // }
    // scrollToTeam = () => {
    //     //.current is verification that your element has rendered
    //     if(this.team.current){
    //         this.team.current.scrollIntoView({ 
    //            behavior: "smooth"
    //         })
    //     }
    //     document.getElementById('nav-ham-icon').style.display="block"
    //     document.getElementById('nav-cross-icon').style.display="none"
    //     document.getElementById('ham-menu').style.display="none"
    //     document.getElementById('mobile-ham-menu').style.display="none"
    //     document.getElementById('nav-logo-bottom').style.display="block" 
    //     document.body.style.overflow="auto"
    // }
    // scrollToWwa = () => {
    //     const store = document.getElementById('wwa').offsetTop
    //     // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //     window.scrollTo({
    //         top: store - 150, //add your necessary value
    //         behavior: "smooth"  //Smooth transition to roll
    //       });
    //     document.getElementById('nav-ham-icon').style.display="block"
    //     document.getElementById('nav-cross-icon').style.display="none"
    //     document.getElementById('ham-menu').style.display="none"
    //     document.getElementById('mobile-ham-menu').style.display="none"
    //     document.getElementById('nav-logo-bottom').style.display="block" 
    //     document.body.style.overflow="auto"
    // }
    scrollToWork = () => {
        //.current is verification that your element has rendered
        if(this.work.current){
            this.work.current.scrollIntoView({ 
               behavior: "smooth"
            })
        }
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('mobile-ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
    }
    // scrollToProcess = () => {
    //     //.current is verification that your element has rendered
    //     if(this.process.current){
    //         this.process.current.scrollIntoView({ 
    //            behavior: "smooth"
    //         })
    //     }
    //     document.getElementById('nav-ham-icon').style.display="block"
    //     document.getElementById('nav-cross-icon').style.display="none"
    //     document.getElementById('ham-menu').style.display="none"
    //     document.getElementById('mobile-ham-menu').style.display="none"
    //     document.getElementById('nav-logo-bottom').style.display="block" 
    //     document.body.style.overflow="auto"
    // }
    scrollToNumbers = () => {
        const store = document.getElementById('numbers').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({
            top: store - 130, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
          });
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('mobile-ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
    }
    // scrollToSkills = () => {
    //     //.current is verification that your element has rendered
    //     if(this.skills.current){
    //         this.skills.current.scrollIntoView({ 
    //            behavior: "smooth"
    //         })
    //     }
    //     document.getElementById('nav-ham-icon').style.display="block"
    //     document.getElementById('nav-cross-icon').style.display="none"
    //     document.getElementById('ham-menu').style.display="none"
    //     document.getElementById('mobile-ham-menu').style.display="none"
    //     document.getElementById('nav-logo-bottom').style.display="block" 
    //     document.body.style.overflow="auto"
    // }
    scrollToContact = () => {
        //.current is verification that your element has rendered
        if(this.contact.current){
            this.contact.current.scrollIntoView({ 
               behavior: "smooth"
            })
        }
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('mobile-ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
    }

    

    state1Handler = () => {
        this.setState({
            state1: "state1"
        })
    }

    state2Handler = () => {
        this.setState({
            state1: "state2"
        })
    }
    render() {
        return (
            <div>
                <section ref={this.header}>
                    <Header 
                        state1Handler={this.state1Handler}
                        state2Handler={this.state2Handler}
                        scrollToHeader={this.scrollToHeader}
                        // scrollToAbout={this.scrollToAbout}
                        // scrollToHww={this.scrollToHww}
                        // scrollToTeam={this.scrollToTeam}
                        // scrollToWwa={this.scrollToWwa}
                        scrollToServices={this.scrollToServices}
                        scrollToWork={this.scrollToWork}
                        // scrollToProcess={this.scrollToProcess}
                        scrollToNumbers={this.scrollToNumbers}
                        // scrollToSkills={this.scrollToSkills}
                        scrollToContact={this.scrollToContact}
                        state={this.state.state1}
                        headerDot={this.state.headerDot}
                        aboutDot={this.state.aboutDot}
                        hwwDot={this.state.hwwDot}
                        teamDot={this.state.teamDot}
                        wwaDot={this.state.wwaDot}
                        servicesDot={this.state.servicesDot}
                        workDot={this.state.workDot}
                        processDot={this.state.processDot}
                        numbersDot={this.state.numbersDot}
                        skillsDot={this.state.skillsDot}
                        contactDot={this.state.contactDot}
                    />
                </section>
                <section ref={this.services}><Tabs 
                scrollToAccessories={this.scrollToAccessories}
                scrollToRepair={this.scrollToRepair}
                scrollToActivation={this.scrollToActivation}
                /></section>
                <Accessories />
                <Repair />
                <Activation />
                {/* <section ref={this.about}><About /></section> */}
                {/* <section ref={this.hww}><HowWeWork /></section>
                <section ref={this.team}><Team /></section>
                <section ref={this.wwa}><WhoWeAre scrollToWork={this.scrollToWork}/></section> */}
                {/* <section ref={this.services}><Services /></section> */}
                <section ref={this.work}><OurWork /></section>
                {/* <section ref={this.process}><Process /></section> */}
                <section ref={this.numbers}><Numbers /></section>
                {/* <section ref={this.skills}><OurSkills /></section> */}
                <section ref={this.contact}><Contact /></section>
                <Footer 
                    scrollToServices={this.scrollToServices}
                    scrollToWork={this.scrollToWork}
                    scrollToNumbers={this.scrollToNumbers}
                    scrollToContact={this.scrollToContact}
                />
            </div>
        )
    }
}

export default Body
