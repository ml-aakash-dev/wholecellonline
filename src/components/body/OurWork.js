import React, { Component } from 'react'
import GalleryModal from './GalleryModal'
import ReviewsModal from './ReviewsModal'

import Img358 from '../../assets/work/358_img.jpg'
import Img359 from '../../assets/work/359_img.jpg'
import Img360 from '../../assets/work/360_img.jpg'
import Img361 from '../../assets/work/361_img.jpg'
import Img362 from '../../assets/work/362_img.jpg'
import Img363 from '../../assets/work/363_img.jpg'
import Img364 from '../../assets/work/364_img.jpg'
import Img365 from '../../assets/work/365_img.jpg'
import Img366 from '../../assets/work/366_img.jpg'
import Img367 from '../../assets/work/367_img.jpg'
import Img368 from '../../assets/work/368_img.jpg'
import Img369 from '../../assets/work/369_img.jpg'


import Video358 from '../../assets/work/358.mp4'
import Video359 from '../../assets/work/359.mp4'
import Video360 from '../../assets/work/360.mp4'
import Video361 from '../../assets/work/361.mp4'
import Video362 from '../../assets/work/362.mp4'
import Video363 from '../../assets/work/363.mp4'
import Video364 from '../../assets/work/364.mp4'
import Video365 from '../../assets/work/365.mp4'
import Video366 from '../../assets/work/366.mp4'
import Video367 from '../../assets/work/367.mp4'
import Video368 from '../../assets/work/368.mp4'
import Video369 from '../../assets/work/369.mp4'

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
                    id: 358,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to get my phone fixed, it looks brand new, thank to Alex, I'm happy customer",
                    image: Img358,
                    video: Video358,
                    date: "08-18-2020",
                    store: "We Fix Phones" 
                },
                {
                    id: 359,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm here at Boost Mobile in Lansing, I had a phone damaged, I came here to trasfer to new phone, Mr. Muhammed, very professional, very swift, I'm very pleased, great service",
                    image: Img359,
                    video: Video359,
                    date: "08-18-2020",
                    store: "Boost Mobile" 
                },
                {
                    id: 360,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm at We Fix Phones in Lansing, Alex did a fantastic job",
                    image: Img360,
                    video: Video360,
                    date: "08-19-2020",
                    store: "We Fix Phones" 
                },
                {
                    id: 361,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "The service is very good at Boost Mobile",
                    image: Img361,
                    video: Video361,
                    date: "08-19-2020",
                    store: "Boost Mobile" 
                },
                {
                    id: 362,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I come up here at Whole Cell Accessories, they took care of my phone, 20-30 minutes to fix this cracked phone, this is the place where you wanna be",
                    image: Img362,
                    video: Video362,
                    date: "08-20-2020",
                    store: "We Fix Phones" 
                },
                {
                    id: 363,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm here at Whole Cell Accessories, this is my second trip here, very successful, come on down they will hook you up",
                    image: Img363,
                    video: Video363,
                    date: "08-20-2020",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 364,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm here at Boost Mobile, I just got SE phone, Shally is a great employee, she loves her job and does it well, Thank you",
                    image: Img364,
                    video: Video364,
                    date: "08-21-2020",
                    store: "Boost Mobile" 
                },
                {
                    id: 365,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to pay phone bill, Islah hook me up with nice deal, my new favourite spot to come to",
                    image: Img365,
                    video: Video365,
                    date: "08-21-2020",
                    store: "Boost Mobile" 
                },
                {
                    id: 366,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "It was wonderful, I'll be back again",
                    image: Img366,
                    video: Video366,
                    date: "08-22-2020",
                    store: "Boost Mobile" 
                },
                {
                    id: 367,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "My phone was messed up, he took his time, and helped me out, thank you",
                    image: Img367,
                    video: Video367,
                    date: "08-22-2020",
                    store: "We Fix Phones" 
                },
                {
                    id: 368,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm here at Accessories for Tablets, they just fixed my phone, It was cracked but now it's nice and smooth",
                    image: Img368,
                    video: Video368,
                    date: "08-23-2020",
                    store: "We Fix Phones" 
                },
                {
                    id: 369,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I come from good distance, because they always take care of me, and give me good prices",
                    image: Img369,
                    video: Video369,
                    date: "08-23-2020",
                    store: "We Fix Phones" 
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
        document.getElementById('work-gallery-modal').style.display="block"
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
    
    handleReviewsModal = () => {
        document.getElementById('reviews-modal').style.display="block"
        document.body.style.overflow="hidden"
    }
    render() {
        return (
            <div id="work" className="our-work">
                <div className="bgimg">
                    <div className="wrapper">
                        <div className="content">
                            <h1>OUR WORK</h1>
                            <h2><span>SOME RECENT</span> REVIEWS</h2>
                            {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                             laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                             voluptate velit esse cillum dolore.
                            </p> */}
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
                        
                        <button className="reviews-btn"  onClick={this.handleReviewsModal}>View More Reviews</button>
                            <div id="reviews-modal">
                                <ReviewsModal/>
                            </div>
                    </div>
                </div>
                <div id="work-gallery-modal">
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
