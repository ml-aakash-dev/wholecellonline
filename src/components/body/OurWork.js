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
                    desc: "Thank you so much, this is one of the best phone companies I've been into",
                    image: Img1,
                    video: Video1,
                    date: "01-12-2021",
                    store: "We Fix Phones" 
                },
                {
                    id: 2,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Boy AJ hooke me up, right here in Boling Brook, fixed my phone, got me the deal, come here and get your deal",
                    image: Img2,
                    video: Video2,
                    date: "01-12-2021",
                    store: "We Fix Phones" 
                },
                {
                    id: 3,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "For all your cell phone needs go to the Whole Cell Accessories, and speak to AL and Ian, they are great",
                    image: Img3,
                    video: Video3,
                    date: "01-13-2021",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 4,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I got a very good deal today, he was amazing and excellent",
                    image: Img4,
                    video: Video4,
                    date: "02-05-2021",
                    store: "Boost Mobile" 
                },
                {
                    id: 5,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to Boost right now, I got a good deal, thank you so much",
                    image: Img5,
                    video: Video5,
                    date: "02-06-2021",
                    store: "Boost Mobile" 
                },
                {
                    id: 6,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm right here at Boost Mobile, I got great service today, this man helped me with my phone issue, great attitude, come and shop here",
                    image: Img6,
                    video: Video6,
                    date: "02-06-2021",
                    store: "We Fix Phones" 
                },
                {
                    id: 7,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Hi, I'm at Whole Cell Accessories, I purchased speakers and phone, Manager AL explained everything very clear to me, staff was just wonderful, everyone needs to get to this place",
                    image: Img7,
                    video: Video7,
                    date: "01-15-2021",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 8,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to Boost Mobile, they fixed my phone, and I like it",
                    image: Img8,
                    video: Video8,
                    date: "02-07-2021",
                    store: "We Fix Phones" 
                },
                {
                    id: 9,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm at Whole Cell Accessories in Joliet, come check them out, I got good deals over here, they'll help you out whatever you need",
                    image: Img9,
                    video: Video9,
                    date: "02-08-2021",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 10,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Whole Cell Accessories in Joliet, I'm here with my buddy, he takes care of us, great deals, come see him",
                    image: Img10,
                    video: Video10,
                    date: "02-08-2021",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 11,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I got good deal, appreciate it, good business",
                    image: Img11,
                    video: Video11,
                    date: "02-09-2021",
                    store: "Boost Mobile" 
                },
                {
                    id: 12,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "They took care of me and I am a very happy customer",
                    image: Img12,
                    video: Video12,
                    date: "02-09-2021",
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
