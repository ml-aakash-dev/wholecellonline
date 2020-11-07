import React, { Component } from 'react'
import GalleryModal from './GalleryModal'
import Img1 from '../../assets/customer_reviews/1_img.jpg'
import Img2 from '../../assets/customer_reviews/2_img.jpg'
import Img3 from '../../assets/customer_reviews/3_img.jpg'
import Img4 from '../../assets/customer_reviews/4_img.jpg'
import Img5 from '../../assets/customer_reviews/5_img.jpg'
import Img6 from '../../assets/customer_reviews/6_img.jpg'
import Img7 from '../../assets/customer_reviews/7_img.jpg'
import Img8 from '../../assets/customer_reviews/8_img.jpg'
import Img9 from '../../assets/customer_reviews/9_img.jpg'
import Img10 from '../../assets/customer_reviews/10_img.jpg'
import Img11 from '../../assets/customer_reviews/11_img.jpg'
import Img12 from '../../assets/customer_reviews/12_img.jpg'

import Video1 from '../../assets/customer_reviews/1.mp4'
import Video2 from '../../assets/customer_reviews/2.mp4'
import Video3 from '../../assets/customer_reviews/3.mp4'
import Video4 from '../../assets/customer_reviews/4.mp4'
import Video5 from '../../assets/customer_reviews/5.mp4'
import Video6 from '../../assets/customer_reviews/6.mp4'
import Video7 from '../../assets/customer_reviews/7.mp4'
import Video8 from '../../assets/customer_reviews/8.mp4'
import Video9 from '../../assets/customer_reviews/9.mp4'
import Video10 from '../../assets/customer_reviews/10.mp4'
import Video11 from '../../assets/customer_reviews/11.mp4'
import Video12 from '../../assets/customer_reviews/12.mp4'

import '../../css/body/ourWork.css'

class OurWork extends Component {
    constructor(props){
        super(props)
        this.state={
            filteredModal:[],
            allState:"active",
            accessoriesState:"",
            repairState:"",
            boostState:"",
            filteredReviews:[],
            reviews: [
                {
                    id: 1,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I just purchased Iphone Xr with 2 phone cases, great service come on down to get you one, bring your friends and family",
                    image: Img1,
                    video: Video1,
                    date: "05-06-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 2,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "came to whole cell accessories to get my daughter a phone for her birthday, leaving with 2 phones thanks to all, customer service is great and will recommend it to anyone",
                    image: Img2,
                    video: Video2,
                    date: "05-06-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 3,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "just want everybody know to come to accessories for tablets, staff takes care of you come see them",
                    image: Img3,
                    video: Video3,
                    date: "05-07-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 4,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "please come on down to boost mobile store, if you have any trouble with the phone or looking for a good deal they'll take care of you",
                    image: Img4,
                    video: Video4,
                    date: "05-07-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 5,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm here at boost mobile in Lansing just got my new phone man, great service, great people, come on down to check them out",
                    image: Img5,
                    video: Video5,
                    date: "05-07-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 6,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I just wanna give shout out to my boost people here in Lansing you know they hook me up with the phone and they got nice deals, nice employees here and I recommend that you go there",
                    image: Img6,
                    video: Video6,
                    date: "05-08-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 7,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I broke my phone they fixed it, I appreciate everyone who works here, the manger is helpful, great service",
                    image: Img7,
                    video: Video7,
                    date: "05-08-2020",
                    store: "We Fix Phones"
                },
                {
                    id: 8,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "If you want to get your phone fixed or you want to buy phones come to whole cell accessories, let me tell you something you gonna get a good deal",
                    image: Img8,
                    video: Video8,
                    date: "05-08-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 9,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "whole cell accessories in lansing gave me a great deal on my phones, repaired them, they both are working and great customer service and I just want to say thank you",
                    image: Img9,
                    video: Video9,
                    date: "05-08-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 10,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "shout out to boost in Lansing, come get your phone, service is execellent here they hook me up",
                    image: Img10,
                    video: Video10,
                    date: "05-08-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 11,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "hey, if you wanna get a new phone or want to get your phone fixed, come down to accessories for tablet they gonna take care of you man",
                    image: Img11,
                    video: Video11,
                    date: "05-09-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 12,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "these guys help me so many times and they are very helpful, usually in and out here is quick, I love this guy thanks for taking care of me",
                    image: Img12,
                    video: Video12,
                    date: "05-09-2020",
                    store: "Boost Mobile"
                }
            ]
        }
    }
    
    componentDidMount(){
        this.setState({
            allState:"active",
            accessoriesState:"",
            repairState:"",
            boostState:"",
            filteredReviews: this.state.reviews
        })
    }
    
    toggleGalleryModal = (id) => {
        this.setState({
            filteredModal: this.state.reviews.filter(review => 
                review.id === id
                )
        })
        document.getElementById('testimonials-gallery-modal').style.display="block"
        document.body.style.overflow="hidden"
    }
    clearState = () => {
        this.setState({
            filteredModal: null
        })
    }
    
    allHandler = () => {
        this.setState({
            allState:"active",
            accessoriesState:"",
            repairState:"",
            boostState:"",
            filteredReviews: this.state.reviews
        })
    }
    accessoriesHandler = () => {
        this.setState({
            allState:"",
            accessoriesState:"active",
            repairState:"",
            boostState:"",
            filteredReviews: this.state.reviews.filter(review => review.store==="Whole Cell Accessories")
        })
    }
    repairHandler = () => {
        this.setState({
            allState:"",
            accessoriesState:"",
            repairState:"active",
            boostState:"",
            filteredReviews: this.state.reviews.filter(review => review.store==="We Fix Phones")
        })
    }
    boostHandler = () => {
        this.setState({
            allState:"",
            accessoriesState:"",
            repairState:"",
            boostState:"active",
            filteredReviews: this.state.reviews.filter(review => review.store==="Boost Mobile")
        })
    }
    render() {
        return (
            <div id="work" className="our-work">
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
                                    <li className={this.state.allState} >All</li>
                                </button>
                                <button className="btn btn-outline-light" onClick={this.accessoriesHandler}>
                                    <li className={this.state.accessoriesState}>Whole Cell Accessories</li>
                                </button>
                                <button className="btn btn-outline-light" onClick={this.repairHandler}>
                                    <li className={this.state.repairState}>We Fix Phones</li>
                                </button>
                                <button className="btn btn-outline-light" onClick={this.boostHandler}>
                                    <li className={this.state.boostState}>Boost Mobile</li>
                                </button>
                            </ul>
                            {this.state.filteredReviews.slice().reverse().map((review,key)=>(
                            <div className="box" key={key} onClick={() => this.toggleGalleryModal(review.id)}>
                                <div className="img-box">
                                    <i className="far fa-play-circle video-icon"></i>
                                    <img src={review.image} alt="testimonial"/>
                                </div>
                                <div className="sub-content">
                                    <h6>Whole Cell <span>Customer</span></h6>
                                    <br/>
                                    <p>{review.desc}</p>
                                    <i className="far fa-play-circle video-icon"></i>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div id="testimonials-gallery-modal">
                    <GalleryModal 
                    filteredModal= {this.state.filteredModal}
                    clearState={this.clearState}
                    />
                </div>
            </div>
        )
    }
}

export default OurWork
