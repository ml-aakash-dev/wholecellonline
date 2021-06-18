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
                    desc: "Hi, I'm a customer at We Fix Phones, my phone was shuttered from front and back, I was hurt, 'Alex' fixed my phone, I wanna thank you for fixing my phone",
                    image: Img1,
                    video: Video1,
                    date: "05-28-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/1.mp4"
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
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/2.mp4"
                },
                {
                    id: 3,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Got great customer service from 'AL' and 'Ion', great service, really liked it, appreciate it, good sales, discounts, try them out",
                    image: Img3,
                    video: Video3,
                    date: "06-15-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/3.mp4"
                },
                {
                    id: 4,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Hey man, thanks for hooking me up with the phone, and the good deal man, appreciate it",
                    image: Img4,
                    video: Video4,
                    date: "06-15-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/4.mp4"
                },
                {
                    id: 5,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to Boost Mobile by Walmart, they gave us a hook up, come check it out, come down",
                    image: Img5,
                    video: Video5,
                    date: "06-16-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/5.mp4"
                },
                {
                    id: 6,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to Whole Cell Accessories, 'AL' took care of me, T-mobile couldn't transfer my data from dead old phone to new phone, 'AL' helped me transfer my data",
                    image: Img6,
                    video: Video6,
                    date: "06-09-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/6.mp4"
                },
                {
                    id: 7,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Highly recommend Whole Cell Accessories, 'AL' was the man, got a new IPhone, check up on him",
                    image: Img7,
                    video: Video7,
                    date: "06-16-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/7.mp4"
                },
                {
                    id: 8,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Whole Cell Accessories in Chicago Heights, 'Ian' helped me out, I came here to get cracked phone fixed, and he got me the new S20 Fe, I appreciate you, you did a good job",
                    image: Img8,
                    video: Video8,
                    date: "06-10-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/8.mp4"
                },
                {
                    id: 9,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Hi, I got good deal on a new phone over here in Boost Mobile ",
                    image: Img9,
                    video: Video9,
                    date: "06-17-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/9.mp4"
                },
                {
                    id: 10,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I just came to Boost today, he just gave us a brand new deal, check it out, come down in Lansing Illonis",
                    image: Img10,
                    video: Video10,
                    date: "06-17-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/10.mp4"
                },
                {
                    id: 11,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Please come check out 'AL', me and my son got phone today, everything you need is in this store, check him out, you will not be disappointed",
                    image: Img11,
                    video: Video11,
                    date: "06-18-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/11.mp4"
                },
                {
                    id: 12,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I must say, employees here have done a great job, gave me decent price, I was so happy",
                    image: Img12,
                    video: Video12,
                    date: "06-18-2021",
                    store: "Whole Cell Accessories",
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
