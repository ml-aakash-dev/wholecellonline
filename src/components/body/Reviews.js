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
                    desc: "I had to stop by Accessories for Tablets, I have a new phone, and having to switch more than 300 contacts was very distressful, they were so helpful, and saved so much time, you helped me and saved me, thank you so much ",
                    image: Img1,
                    video: Video1,
                    date: "04-28-2021",
                    store: "We Fix Phones",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/1.mp4"
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
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/2.mp4"
                },
                {
                    id: 3,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm here at Whole Cell Accessories, they give the greatest customer service here, I come here often, and I recommend this store to everybody, come by to Whole Cell Accessories",
                    image: Img3,
                    video: Video3,
                    date: "05-03-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/3.mp4"
                },
                {
                    id: 4,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I give this store a '5 Star', thank you so much for helping my son and I purchasing new device, customer service was excellent",
                    image: Img4,
                    video: Video4,
                    date: "04-29-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/4.mp4"
                },
                {
                    id: 5,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm here in Lansing Boost Mobile, I just bought me a new phone, and I had great service, and I appreciate everything he did, I give him a '10'",
                    image: Img5,
                    video: Video5,
                    date: "05-04-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/5.mp4"
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
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/6.mp4"
                },
                {
                    id: 7,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came here to Whole Cell Accessories, 'AL' was very knowledgeable, very helpful, gave me everything I needed, switched from old to new phone, he was very quick, very helpful",
                    image: Img7,
                    video: Video7,
                    date: "05-05-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/7.mp4"
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
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/8.mp4"
                },
                {
                    id: 9,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "This is Whole Cell in Chicago heights, 'AL' took care of us, he's very knowlegable, excellent products, will definitely recommend this store to anyone, I really enjoyed being here, will be back",
                    image: Img9,
                    video: Video9,
                    date: "05-06-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/9.mp4"
                },
                {
                    id: 10,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Hello, I'm in Whole Cell Accessories, I come here all the time, they have the best accessories",
                    image: Img10,
                    video: Video10,
                    date: "05-06-2021",
                    store: "Whole Cell Accessories",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/10.mp4"
                },
                {
                    id: 11,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Just upgraded my phone, Boost is great",
                    image: Img11,
                    video: Video11,
                    date: "05-07-2021",
                    store: "Boost Mobile",
                    url: "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/old/11.mp4"
                },
                {
                    id: 12,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "He helped with Iphone, screen protector, and a phone port, and I'm happy to be at Boost",
                    image: Img12,
                    video: Video12,
                    date: "05-07-2021",
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
