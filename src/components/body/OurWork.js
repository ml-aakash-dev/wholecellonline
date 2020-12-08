import React, { Component } from 'react'
import GalleryModal from './GalleryModal'
import ReviewsModal from './ReviewsModal'


import Img1 from '../../assets/work/1.jpg'
import Img2 from '../../assets/work/2.jpg'
import Img3 from '../../assets/work/3.jpg'
import Img4 from '../../assets/work/4.jpg'
import Img5 from '../../assets/work/5.jpg'
import Img6 from '../../assets/work/6.jpg'
import Img7 from '../../assets/work/7.jpg'
import Img8 from '../../assets/work/8.jpg'
import Img9 from '../../assets/work/9.jpg'
import Img10 from '../../assets/work/10.jpg'
import Img11 from '../../assets/work/11.jpg'
import Img12 from '../../assets/work/12.jpg'



import Video1 from '../../assets/work/1.mp4'
import Video2 from '../../assets/work/2.mp4'
import Video3 from '../../assets/work/3.mp4'
import Video4 from '../../assets/work/4.mp4'
import Video5 from '../../assets/work/5.mp4'
import Video6 from '../../assets/work/6.mp4'
import Video7 from '../../assets/work/7.mp4'
import Video8 from '../../assets/work/8.mp4'
import Video9 from '../../assets/work/9.mp4'
import Video10 from '../../assets/work/10.mp4'
import Video11 from '../../assets/work/11.mp4'
import Video12 from '../../assets/work/12.mp4'

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
                    desc: "I came here to purchase a phone, totally satisfied with the phone and excellent service, located in Bolingbrook",
                    image: Img1,
                    video: Video1,
                    date: "12-01-2020",
                    store: "Boost Mobile" 
                },
                {
                    id: 2,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "This is a really good experience, good product, very satisfied, come check them out",
                    image: Img2,
                    video: Video2,
                    date: "12-01-2020",
                    store: "Boost Mobile" 
                },
                {
                    id: 3,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I am here at Whole Cell Accessories, just purchase a cell phone, service is pretty fast, I recommend to anybody",
                    image: Img3,
                    video: Video3,
                    date: "12-02-2020",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 4,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm at the Lansing Boost Mobile, I wanna give 5 stars review for the service and help I recieved today",
                    image: Img4,
                    video: Video4,
                    date: "12-02-2020",
                    store: "Boost Mobile" 
                },
                {
                    id: 5,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Thanks for giving me great deal, great customer service, really nice people to come shop at",
                    image: Img5,
                    video: Video5,
                    date: "12-03-2020",
                    store: "Boost Mobile" 
                },
                {
                    id: 6,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to Accessories for Tablets, trying to get my phone fixed, screen was cracked, Maaz gave me great deal, great place to come",
                    image: Img6,
                    video: Video6,
                    date: "12-03-2020",
                    store: "We Fix Phones" 
                },
                {
                    id: 7,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Great service here at Whole Cell Accessories, great personality, great service, come check them out",
                    image: Img7,
                    video: Video7,
                    date: "12-04-2020",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 8,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Shop at the Boost Mobile in Bolingbrook, they fixed my phone, they are life savers",
                    image: Img8,
                    video: Video8,
                    date: "12-04-2020",
                    store: "We Fix Phones" 
                },
                {
                    id: 9,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I get a new phone, first place I came to is Whole Cell Accessories, great people, great service, never had a problem",
                    image: Img9,
                    video: Video9,
                    date: "12-05-2020",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 10,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm at Whole Cell Acessories, they took care of me, great deals, great prices",
                    image: Img10,
                    video: Video10,
                    date: "12-05-2020",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 11,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to We Fix Phones to get my phone fixed, Alex did a good job, gave me a discount, very efficient, will be coming back",
                    image: Img11,
                    video: Video11,
                    date: "12-06-2020",
                    store: "We Fix Phones" 
                },
                {
                    id: 12,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "They help me get my phone contacts and videos, good service, thank you",
                    image: Img12,
                    video: Video12,
                    date: "12-06-2020",
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
                            <h1 className="work-h1">OUR REVIEWS</h1>
                            <h2><span>SOME RECENT</span> REVIEWS</h2>
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
                        
                        {/* <a className="reviews-btn" href="/whole-cell-online-site/reviews">View More Reviews</a> */}
                        <a className="reviews-btn" onClick={this.handleReviewsModal}>View More Reviews</a>
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
