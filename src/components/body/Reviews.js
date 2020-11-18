import React, { Component } from 'react'
import GalleryModal from './GalleryModal'

import Img354 from '../../assets/work/354_img.jpg'
import Img355 from '../../assets/work/355_img.jpg'
import Img357 from '../../assets/work/357_img.jpg'
import Img361 from '../../assets/work/361_img.jpg'
import Img362 from '../../assets/work/362_img.jpg'
import Img363 from '../../assets/work/363_img.jpg'
import Img364 from '../../assets/work/364_img.jpg'
import Img365 from '../../assets/work/365_img.jpg'
import Img366 from '../../assets/work/366_img.jpg'
import Img367 from '../../assets/work/367_img.jpg'
import Img368 from '../../assets/work/368_img.jpg'
import Img369 from '../../assets/work/369_img.jpg'



import Video354 from '../../assets/work/354.mp4'
import Video355 from '../../assets/work/355.mp4'
import Video357 from '../../assets/work/357.mp4'
import Video361 from '../../assets/work/361.mp4'
import Video362 from '../../assets/work/362.mp4'
import Video363 from '../../assets/work/363.mp4'
import Video364 from '../../assets/work/364.mp4'
import Video365 from '../../assets/work/365.mp4'
import Video366 from '../../assets/work/366.mp4'
import Video367 from '../../assets/work/367.mp4'
import Video368 from '../../assets/work/368.mp4'
import Video369 from '../../assets/work/369.mp4'

import '../../css/body/reviews.css'

class Reviews extends Component {
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
                    id: 354,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to purchase my phone, Whole Cell was a big help today, I appreciate it",
                    image: Img354,
                    video: Video354,
                    date: "08-16-2020",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 355,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm at Whole Cell Accessories, this is the best place to buy what you need for your phone, anything you need come here",
                    image: Img355,
                    video: Video355,
                    date: "08-16-2020",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 357,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came here to look for phone, the young man here was fabulous, kind and patient, he convinced me to purchase a phone and accessories, thank you",
                    image: Img357,
                    video: Video357,
                    date: "08-17-2020",
                    store: "Whole Cell Accessories" 
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
        document.getElementById('reviews-gallery-modal').style.display="block"
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
            <div id="reviews" className="reviews">
                <div className="bgimg">
                    <div className="wrapper">
                        {/* <div className="controls">
                            <a href="/whole-cell-online-site/"><i className="fas fa-times icon cross"></i></a>
                        </div> */}
                        <div className="content">
                            <h1>OUR REVIEWS</h1>
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
                <div id="reviews-gallery-modal">
                    <GalleryModal 
                    filteredModal= {this.state.filteredModal}
                    clearState={this.clearState}
                    />
                </div>
            </div>
        )
    }
}

export default Reviews
