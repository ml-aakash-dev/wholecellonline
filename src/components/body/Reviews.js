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
                    desc: "Hi, I'm a customer at We Fix Phones, my phone was shuttered from front and back, I was hurt, 'Alex' fixed my phone, I wanna thank you for fixing my phone",
                    image: Img1,
                    video: Video1,
                    date: "05-28-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/1.mp4"
                },
                {
                    id: 2,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to We Fix Phones, I'm so happy, 'Alex' got my Ipad fixed for me, it looks really good, he was so professional",
                    image: Img2,
                    video: Video2,
                    date: "05-28-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/2.mp4"
                },
                {
                    id: 3,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Welcome to Whole Cell Accessories in Chicago Heights, I was here with 'Mia' today, and she gave me great service today",
                    image: Img3,
                    video: Video3,
                    date: "05-29-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/3.mp4"
                },
                {
                    id: 4,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I switched over to Boost Mobile, and the service is good, people are nice, and I'm happy with it",
                    image: Img4,
                    video: Video4,
                    date: "05-13-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/4.mp4"
                },
                {
                    id: 5,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm in Boost Mobile next to Walmart, 'Maaz' was taking care of me, was really great, straight forward, helped me with lot of good prices, and good deals",
                    image: Img5,
                    video: Video5,
                    date: "05-14-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/5.mp4"
                },
                {
                    id: 6,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "i came to the Chicago Heights store, and He only took '11 minutes' to fix my phone, that's great",
                    image: Img6,
                    video: Video6,
                    date: "05-29-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/6.mp4"
                },
                {
                    id: 7,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Thank you 'Ofelia', you did a great job, and I actually appreciate you for the conversation and the good customer service, excellent job",
                    image: Img7,
                    video: Video7,
                    date: "05-30-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/7.mp4"
                },
                {
                    id: 8,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Hi, I'm here at We Fix Phones, and I would like to thank them, and 'Alex' for fixing my phone, my port was broke, my phone is fixed just like brand new, thank you so much guys",
                    image: Img8,
                    video: Video8,
                    date: "05-30-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/8.mp4"
                },
                {
                    id: 9,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Good great service, he is a nice young man, he is very professional, thank you very much",
                    image: Img9,
                    video: Video9,
                    date: "05-31-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/9.mp4"
                },
                {
                    id: 10,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "We came to Whole Cell Accessories, and recieved good customer service",
                    image: Img10,
                    video: Video10,
                    date: "05-31-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/10.mp4"
                },
                {
                    id: 11,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Hi, the service is absolutely wonderful, I really appreciate all of there help, and I love my new phone",
                    image: Img11,
                    video: Video11,
                    date: "06-01-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/11.mp4"
                },
                {
                    id: 12,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm here with 'Mia', who gave me a great deal, on a Iphone 8 and 6, he did a great job, and really made me satisfied",
                    image: Img12,
                    video: Video12,
                    date: "06-01-2021",
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
