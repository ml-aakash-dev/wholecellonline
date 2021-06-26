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
                    desc: "Come here to get fastest phone fix ever, you all come Boligbrook Boost mobile, come get your phone fixed man",
                    image: Img1,
                    video: Video1,
                    date: "06-21-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/1.mp4"
                },
                {
                    id: 2,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to Whole Cell Accessories, 'Mia' and 'AL' helped me out getting a card holder and also replaced glass on my phone, great service, great products, come see them",
                    image: Img2,
                    video: Video2,
                    date: "06-22-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/2.mp4"
                },
                {
                    id: 3,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I just stopped at Whole Cell Accessories, 'Mia' hepled me out for the phone case",
                    image: Img3,
                    video: Video3,
                    date: "06-22-2021",
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
                    desc: "I definitely recommend this place, came to dropped off my phone, and he totally hook me up, 100% satisfied customer",
                    image: Img6,
                    video: Video6,
                    date: "06-23-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/6.mp4"
                },
                {
                    id: 7,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "My visit here is beautiful, I love being here, I comeback here everytime, I just love this place",
                    image: Img7,
                    video: Video7,
                    date: "06-23-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/7.mp4"
                },
                {
                    id: 8,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "'Ofelis' did a great job, I came here to get a repair, and got upgrade at reasonable price, I'm so happy'",
                    image: Img8,
                    video: Video8,
                    date: "06-24-2021",
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
                    desc: "The service here has been excellent, the gentleman here has took care of me very well, I appreciate the service, and i'll be back",
                    image: Img10,
                    video: Video10,
                    date: "06-24-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/10.mp4"
                },
                {
                    id: 11,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "'Ali' did a great, excellent job, and serve we need today, 100'",
                    image: Img11,
                    video: Video11,
                    date: "06-25-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/latest/11.mp4"
                },
                {
                    id: 12,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "'Mia' helped me and my friend, and we got very good price in a phone in Accessories, I really recommend this place",
                    image: Img12,
                    video: Video12,
                    date: "06-25-2021",
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
