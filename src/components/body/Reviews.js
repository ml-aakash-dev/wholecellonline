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
                    desc: "There is a great customer service at this store, 'AJ' helped me out alot, and I'll definitely be coming back",
                    image: Img1,
                    video: Video1,
                    date: "04-20-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/1.mp4"                },
                {
                    id: 2,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Came down here to get my phone fixed, it didn't take that long, the price is reasonable, if looking to get your phone fixed come down here",
                    image: Img2,
                    video: Video2,
                    date: "04-20-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/2.mp4"                },
                {
                    id: 3,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I am here at Whole Cell, this is a place to be, no 1 customer service, come here, you can't miss it",
                    image: Img3,
                    video: Video3,
                    date: "04-20-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/3.mp4"                },
                {
                    id: 4,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to buy a phone, customer service is great, he helped me out, come here, and he will get you what you need",
                    image: Img4,
                    video: Video4,
                    date: "04-21-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/4.mp4"                },
                {
                    id: 5,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Boost Mobile, thumbs up, I recommend anybody",
                    image: Img5,
                    video: Video5,
                    date: "04-21-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/5.mp4"                },
                {
                    id: 6,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "'Alex' and 'Maaz' are probably one of the best workers I have ever had to fix my phone, they are really customer friendly, really really helpful",
                    image: Img6,
                    video: Video6,
                    date: "04-21-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/6.mp4"                },
                {
                    id: 7,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came int to the store, just for upgrade my phone, the man just hooked me up, this is a good store, these are good people, come here to shop",
                    image: Img7,
                    video: Video7,
                    date: "04-22-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/7.mp4"                },
                {
                    id: 8,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "came here today, had some issues with my phone, they helped me out, service was excellent, they were very patient, prices are reasonable",
                    image: Img8,
                    video: Video8,
                    date: "04-22-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/8.mp4"                },
                {
                    id: 9,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "very nice customer service, you are able to help me out, appreciate your service, will definitely come back",
                    image: Img9,
                    video: Video9,
                    date: "04-22-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/9.mp4"                },
                {
                    id: 10,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I am here at Whole Cell Accessories, 'AL' has given me such great service, if you want some good service, and want something done right, come to this store in Chicago Heights",
                    image: Img10,
                    video: Video10,
                    date: "04-23-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/10.mp4"
                },
                {
                    id: 11,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came here to Boost Mobile to purchase my new phone, and the service was great, he was so caring, he did a good job, I recommend you come to Boost Mobile",
                    image: Img11,
                    video: Video11,
                    date: "04-23-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/11.mp4"
                },
                {
                    id: 12,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "'Almaaz' helped me with my phone, I got a new phone, no problem, took care of everything, I appreciate it",
                    image: Img12,
                    video: Video12,
                    date: "04-23-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/12.mp4"
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
