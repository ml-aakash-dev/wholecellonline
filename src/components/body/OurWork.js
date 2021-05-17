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
                    desc: "I had to stop by Accessories for Tablets, I have a new phone, and having to switch more than 300 contacts was very distressful, they were so helpful, and saved so much time, you helped me and saved me, thank you so much ",
                    image: Img1,
                    video: Video1,
                    date: "04-28-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/1.mp4"
                },
                {
                    id: 2,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came here because my phone was totally messed up, I bought it from this guy and returned back to him, and I'll be back again",
                    image: Img2,
                    video: Video2,
                    date: "04-28-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/2.mp4"
                },
                {
                    id: 3,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I recommend that Whole Cell is a great place to come, they are nice people, they took care of me, and I enjoyed myself",
                    image: Img3,
                    video: Video3,
                    date: "05-13-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/3.mp4"
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
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/4.mp4"
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
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/5.mp4"
                },
                {
                    id: 6,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Hello, I'm here at the Whole Cell Accessories, I'm always coming to visit 'AL', he help0s me very good, I've been coming here for years, thank you for allowing me to be your customer",
                    image: Img6,
                    video: Video6,
                    date: "05-04-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/6.mp4"
                },
                {
                    id: 7,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came over here to Chicago Heights, I was able to get new screen protectot for my phone, I would recommend everybody to try, much appreciated",
                    image: Img7,
                    video: Video7,
                    date: "05-14-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/7.mp4"
                },
                {
                    id: 8,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I am here at Whole Cell Accessories in Chicago Heights, the staff was really great, fast service, they fixed my phone, I'm happy",
                    image: Img8,
                    video: Video8,
                    date: "05-05-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/8.mp4"
                },
                {
                    id: 9,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm at Chicago Heights, came here to get a phone case and a screen protector, she did good excellent job for me, I recommend you guys to come here, get excellent service and good prices",
                    image: Img9,
                    video: Video9,
                    date: "05-15-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/9.mp4"
                },
                {
                    id: 10,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm at Whole Cell, they gave good service, I love it, I'm satisfied, and thank you all so much",
                    image: Img10,
                    video: Video10,
                    date: "05-15-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/10.mp4"
                },
                {
                    id: 11,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came here to get my son a phone, and we got it really quickly, great deal, no problem, really easy in and out experience, and very happy, thank you guys",
                    image: Img11,
                    video: Video11,
                    date: "05-16-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/11.mp4"
                },
                {
                    id: 12,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm here at the Boost Mobile in Bolingbrook, you guys are wonderful, I would definitely give them 5000 if I could, but they were very helpful, I would definitely coming here, this is number '1', I'll be back",
                    image: Img12,
                    video: Video12,
                    date: "05-16-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/12.mp4"
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
                                    <p style={{fontWeight:"700"}}>{review.date}</p>
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
