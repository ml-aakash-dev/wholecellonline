import React, { Component } from 'react'

import Img1 from '../../assets/work/1.jpg'
import Img2 from '../../assets/work/2.jpg'
import Img3 from '../../assets/work/3.jpg'
import Img4 from '../../assets/work/4.jpg'
import Img5 from '../../assets/work/5.jpg'
import Img6 from '../../assets/work/6.jpg'
import Img7 from '../../assets/work/7.jpg'
import Img8 from '../../assets/work/8.jpg'

import '../../css/body/ourWork.css'

class OurWork extends Component {
    constructor(props){
        super(props)
        this.state={
            filteredWork:[],
            all:"active",
            design:"",
            photography:"",
            web:"",
            works:[
                {
                    img: Img1,
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    service: "web"
                },
                {
                   img: Img2,
                   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                   service: "web" 
                },
                {
                    img: Img3,
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    service: "photography"
                },
                {
                    img: Img4,
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    service: "photography"
                },
                {
                    img: Img5,
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    service: "design"
                },
                {
                    img: Img6,
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    service: "design"
                },
                {
                    img: Img7,
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    service: "design"
                },
                {
                    img: Img8,
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    service: "web"
                }
            ]
        }
    }
    
    componentDidMount(){
        this.setState({
            all:"active",
            design:"",
            photography:"",
            web:"",
            filteredWork: this.state.works
        })
    }
    
    allHandler = () => {
        this.setState({
            all:"active",
            design:"",
            photography:"",
            web:"",
            filteredWork: this.state.works
        })
    }
    designHandler = () => {
        this.setState({
            all:"",
            design:"active",
            photography:"",
            web:"",
            filteredWork: this.state.works.filter(work => work.service==="design")
        })
    }
    photographyHandler = () => {
        this.setState({
            all:"",
            design:"",
            photography:"active",
            web:"",
            filteredWork: this.state.works.filter(work => work.service==="photography")
        })
    }
    webHandler = () => {
        this.setState({
            all:"",
            design:"",
            photography:"",
            web:"active",
            filteredWork: this.state.works.filter(work => work.service==="web")
        })
    }
    render() {
        return (
            <div className="our-work">
                <div className="bgimg">
                    <div className="wrapper">
                        <div className="content">
                            <h1>OUR WORK</h1>
                            <h2><span>SOME RECENT</span> PROJECTS</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                             laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                             voluptate velit esse cillum dolore.
                            </p>
                            <ul className="filter">
                                <button className="btn btn-outline-light" onClick={this.allHandler}>
                                    <li className={this.state.all} >All</li>
                                </button>
                                <button className="btn btn-outline-light" onClick={this.designHandler}>
                                    <li className={this.state.design}>Design</li>
                                </button>
                                <button className="btn btn-outline-light" onClick={this.photographyHandler}>
                                    <li className={this.state.photography}>Photography</li>
                                </button>
                                <button className="btn btn-outline-light" onClick={this.webHandler}>
                                    <li className={this.state.web}>Web</li>
                                </button>
                            </ul>
                            {this.state.filteredWork.slice().reverse().map((work,key)=>(
                            <div className="box" key={key}>
                                <div className="img-box">
                                    <img src={work.img} alt="female"/>
                                </div>
                                <div className="sub-content">
                                    <p>{work.desc}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurWork
