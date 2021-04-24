import React, { Component } from 'react'
import GalleryModal from './GalleryModal'

import Img1 from '../../assets/customer_reviews/1.jpg'
import Img2 from '../../assets/customer_reviews/2.jpg'
import Img3 from '../../assets/customer_reviews/3.jpg'
import Img4 from '../../assets/customer_reviews/4.jpg'
import Img5 from '../../assets/customer_reviews/5.jpg'
import Img6 from '../../assets/customer_reviews/6.jpg'
import Img7 from '../../assets/customer_reviews/7.jpg'
import Img8 from '../../assets/customer_reviews/8.jpg'
import Img9 from '../../assets/customer_reviews/9.jpg'
import Img10 from '../../assets/customer_reviews/10.jpg'
import Img11 from '../../assets/customer_reviews/11.jpg'
import Img12 from '../../assets/customer_reviews/12.jpg'



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
                    id: 1,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Hi, I was taken care by 'Alex', he took good care of me, I'll be back, to also get my laptop fixed",
                    image: Img1,
                    video: Video1,
                    date: "04-14-2021",
                    store: "We Fix Phones" 
                },
                {
                    id: 2,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "He helped me out in Accessories for tablets, come get your phone fixed, or whatever you need, he got you",
                    image: Img2,
                    video: Video2,
                    date: "04-14-2021",
                    store: "We Fix Phones" 
                },
                {
                    id: 3,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I got another phone, switched my service, he gave me good deal, great customer service",
                    image: Img3,
                    video: Video3,
                    date: "04-15-2021",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 4,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I thank you for my phone",
                    image: Img4,
                    video: Video4,
                    date: "04-15-2021",
                    store: "Boost Mobile" 
                },
                {
                    id: 5,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "He just gave me the best service, I have ever had in any store anywhere",
                    image: Img5,
                    video: Video5,
                    date: "04-16-2021",
                    store: "Boost Mobile" 
                },
                {
                    id: 6,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "My salesperson was 'AL', he did a great job, he helped me out, I recommend 100%, thanks guys",
                    image: Img6,
                    video: Video6,
                    date: "04-16-2021",
                    store: "We Fix Phones" 
                },
                {
                    id: 7,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to Whole Cell Accessories, great customer service",
                    image: Img7,
                    video: Video7,
                    date: "04-17-2021",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 8,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I was here at Accessories for Tablets, I wanna highly recommend 'Alex' service, he was great on fixing my phone, you did a great job",
                    image: Img8,
                    video: Video8,
                    date: "04-17-2021",
                    store: "We Fix Phones" 
                },
                {
                    id: 9,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came in here and they gave me the greatest deal of all, and the best store",
                    image: Img9,
                    video: Video9,
                    date: "04-18-2021",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 10,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came up here to shop with Alex, he is doing a great job",
                    image: Img10,
                    video: Video10,
                    date: "04-18-2021",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 11,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I had great experience at Boost Mobile here at Lansing, I recommend people to come here",
                    image: Img11,
                    video: Video11,
                    date: "04-19-2021",
                    store: "Boost Mobile" 
                },
                {
                    id: 12,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Hi, I'm at Boost Mobile in Lansing, I highly recommend this store, I got great service",
                    image: Img12,
                    video: Video12,
                    date: "04-19-2021",
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
                            <h1 className="rev-h1">OUR REVIEWS</h1>
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
                                    <p style={{fontWeight:"700"}}>{review.date}</p>
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
