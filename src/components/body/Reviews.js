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
import Img13 from '../../assets/customer_reviews/13.jpg'
import Img14 from '../../assets/customer_reviews/14.jpg'
import Img15 from '../../assets/customer_reviews/15.jpg'
import Img16 from '../../assets/customer_reviews/16.jpg'
import Img17 from '../../assets/customer_reviews/17.jpg'
import Img18 from '../../assets/customer_reviews/18.jpg'
import Img19 from '../../assets/customer_reviews/19.jpg'
import Img20 from '../../assets/customer_reviews/20.jpg'
import Img21 from '../../assets/customer_reviews/21.jpg'
import Img22 from '../../assets/customer_reviews/22.jpg'
import Img23 from '../../assets/customer_reviews/23.jpg'
import Img24 from '../../assets/customer_reviews/24.jpg'
import Img25 from '../../assets/customer_reviews/25.jpg'
import Img26 from '../../assets/customer_reviews/26.jpg'
import Img27 from '../../assets/customer_reviews/27.jpg'
import Img28 from '../../assets/customer_reviews/28.jpg'
import Img29 from '../../assets/customer_reviews/29.jpg'
import Img30 from '../../assets/customer_reviews/30.jpg'
import Img31 from '../../assets/customer_reviews/31.jpg'
import Img32 from '../../assets/customer_reviews/32.jpg'
import Img33 from '../../assets/customer_reviews/33.jpg'
import Img34 from '../../assets/customer_reviews/34.jpg'
import Img35 from '../../assets/customer_reviews/35.jpg'
import Img36 from '../../assets/customer_reviews/36.jpg'
import Img37 from '../../assets/customer_reviews/37.jpg'
import Img38 from '../../assets/customer_reviews/38.jpg'
import Img39 from '../../assets/customer_reviews/39.jpg'
import Img40 from '../../assets/customer_reviews/40.jpg'
import Img41 from '../../assets/customer_reviews/41.jpg'
import Img42 from '../../assets/customer_reviews/42.jpg'
import Img43 from '../../assets/customer_reviews/43.jpg'
import Img44 from '../../assets/customer_reviews/44.jpg'
import Img45 from '../../assets/customer_reviews/45.jpg'
import Img46 from '../../assets/customer_reviews/46.jpg'
import Img47 from '../../assets/customer_reviews/47.jpg'
import Img48 from '../../assets/customer_reviews/48.jpg'
import Img49 from '../../assets/customer_reviews/49.jpg'
import Img50 from '../../assets/customer_reviews/50.jpg'

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
import Video13 from '../../assets/customer_reviews/13.mp4'
import Video14 from '../../assets/customer_reviews/14.mp4'
import Video15 from '../../assets/customer_reviews/15.mp4'
import Video16 from '../../assets/customer_reviews/16.mp4'
import Video17 from '../../assets/customer_reviews/17.mp4'
import Video18 from '../../assets/customer_reviews/18.mp4'
import Video19 from '../../assets/customer_reviews/19.mp4'
import Video20 from '../../assets/customer_reviews/20.mp4'
import Video21 from '../../assets/customer_reviews/21.mp4'
import Video22 from '../../assets/customer_reviews/22.mp4'
import Video23 from '../../assets/customer_reviews/23.mp4'
import Video24 from '../../assets/customer_reviews/24.mp4'
import Video25 from '../../assets/customer_reviews/25.mp4'
import Video26 from '../../assets/customer_reviews/26.mp4'
import Video27 from '../../assets/customer_reviews/27.mp4'
import Video28 from '../../assets/customer_reviews/28.mp4'
import Video29 from '../../assets/customer_reviews/29.mp4'
import Video30 from '../../assets/customer_reviews/30.mp4'
import Video31 from '../../assets/customer_reviews/31.mp4'
import Video32 from '../../assets/customer_reviews/32.mp4'
import Video33 from '../../assets/customer_reviews/33.mp4'
import Video34 from '../../assets/customer_reviews/34.mp4'
import Video35 from '../../assets/customer_reviews/35.mp4'
import Video36 from '../../assets/customer_reviews/36.mp4'
import Video37 from '../../assets/customer_reviews/37.mp4'
import Video38 from '../../assets/customer_reviews/38.mp4'
import Video39 from '../../assets/customer_reviews/39.mp4'
import Video40 from '../../assets/customer_reviews/40.mp4'
import Video41 from '../../assets/customer_reviews/41.mp4'
import Video42 from '../../assets/customer_reviews/42.mp4'
import Video43 from '../../assets/customer_reviews/43.mp4'
import Video44 from '../../assets/customer_reviews/44.mp4'
import Video45 from '../../assets/customer_reviews/45.mp4'
import Video46 from '../../assets/customer_reviews/46.mp4'
import Video47 from '../../assets/customer_reviews/47.mp4'
import Video48 from '../../assets/customer_reviews/48.mp4'
import Video49 from '../../assets/customer_reviews/49.mp4'
import Video50 from '../../assets/customer_reviews/50.mp4'

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
                    desc: "I just purchased Iphone Xr with 2 phone cases, great service come on down to get you one, bring your friends and family",
                    image: Img1,
                    video: Video1,
                    date: "05-06-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 2,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "came to whole cell accessories to get my daughter a phone for her birthday, leaving with 2 phones thanks to all, customer service is great and will recommend it to anyone",
                    image: Img2,
                    video: Video2,
                    date: "05-06-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 3,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "just want everybody know to come to accessories for tablets, staff takes care of you come see them",
                    image: Img3,
                    video: Video3,
                    date: "05-07-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 4,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "please come on down to boost mobile store, if you have any trouble with the phone or looking for a good deal they'll take care of you",
                    image: Img4,
                    video: Video4,
                    date: "05-07-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 5,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm here at boost mobile in Lansing just got my new phone man, great service, great people, come on down to check them out",
                    image: Img5,
                    video: Video5,
                    date: "05-07-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 6,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I just wanna give shout out to my boost people here in Lansing you know they hook me up with the phone and they got nice deals, nice employees here and I recommend that you go there",
                    image: Img6,
                    video: Video6,
                    date: "05-08-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 7,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I broke my phone they fixed it, I appreciate everyone who works here, the manger is helpful, great service",
                    image: Img7,
                    video: Video7,
                    date: "05-08-2020",
                    store: "We Fix Phones"
                },
                {
                    id: 8,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "If you want to get your phone fixed or you want to buy phones come to whole cell accessories, let me tell you something you gonna get a good deal",
                    image: Img8,
                    video: Video8,
                    date: "05-08-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 9,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "whole cell accessories in lansing gave me a great deal on my phones, repaired them, they both are working and great customer service and I just want to say thank you",
                    image: Img9,
                    video: Video9,
                    date: "05-08-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 10,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "shout out to boost in Lansing, come get your phone, service is execellent here they hook me up",
                    image: Img10,
                    video: Video10,
                    date: "05-08-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 11,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "hey, if you wanna get a new phone or want to get your phone fixed, come down to accessories for tablet they gonna take care of you man",
                    image: Img11,
                    video: Video11,
                    date: "05-09-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 12,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "these guys help me so many times and they are very helpful, usually in and out here is quick, I love this guy thanks for taking care of me",
                    image: Img12,
                    video: Video12,
                    date: "05-09-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 13,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I bought 2 new phones, they offer great service with cheap prices",
                    image: Img13,
                    video: Video13,
                    date: "05-09-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 14,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "whole cell accessories gave me a hook up on a good Iphone 7 Plus and a stylo",
                    image: Img14,
                    video: Video14,
                    date: "05-10-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 15,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "They gave me a great price and speedy service, I'll come again",
                    image: Img15,
                    video: Video15,
                    date: "05-12-2020",
                    store: "We Fix Phones"
                },
                {
                    id: 16,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "They gave me a great deal and the man himself personally delivered it to my door",
                    image: Img16,
                    video: Video16,
                    date: "05-12-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 17,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Thanks to whole cell accessories for tablets and they always give me a good deal",
                    image: Img17,
                    video: Video17,
                    date: "05-13-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 18,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came here to get my phone fixed with my wife and they offer great service",
                    image: Img18,
                    video: Video18,
                    date: "05-14-2020",
                    store: "We Fix Phones"
                },
                {
                    id: 19,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "We Fix Phones has been a blessing to me, I broke my phone screen and had to get my laptop fixed but they did it on the same day",
                    image: Img19,
                    video: Video19,
                    date: "05-14-2020",
                    store: "We Fix Phones"
                },
                {
                    id: 20,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm in whole cell accessories, best place to come, they are good people please come down, best place i've ever been, they are very helpful",
                    image: Img20,
                    video: Video20,
                    date: "05-27-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 21,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Thank you for your service today, you kept the customer happy",
                    image: Img21,
                    video: Video21,
                    date: "05-27-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 22,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm here at whole cell accessories in Lansing, they took care of me, gave me great deal, and listen, you can come and be a part of this, i've been coming here for years",
                    image: Img22,
                    video: Video22,
                    date: "05-27-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 23,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "come to whole cell accessories, be sure to checkout, they are great with the phones and deals, you gotta come see them",
                    image: Img23,
                    video: Video23,
                    date: "05-28-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 24,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I wanna thank T.J today, he actually went extra step, which rarely happens, to help me get less charge, I'm so thankful",
                    image: Img24,
                    video: Video24,
                    date: "05-28-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 25,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I used to be a teacher at Chicago Heights, and I've been coming to this store and I've enjoyed it, it's extremly extremly helpful, they are great people, thank you",
                    image: Img25,
                    video: Video25,
                    date: "05-28-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 26,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm here at Whole Cell Accessories, got a new phone, come on down and check'em out, they got lot of accessories for your phone, very good store to come to",
                    image: Img26,
                    video: Video26,
                    date: "05-28-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 27,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I just got a best hook up from Whole Cell Accessories in Lansing, got 3 phones, they give me the best deal, this is the place to be man",
                    image: Img27,
                    video: Video27,
                    date: "05-29-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 28,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "We are at Whole Cell Accessories today, we really had wonderful time, and we really enjoyed the customer service and product quality, we look forward to come again, everything was good",
                    image: Img28,
                    video: Video28,
                    date: "05-29-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 29,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Boost Mobile Store did such a good job, got stylo it looks pretty, thank you all",
                    image: Img29,
                    video: Video29,
                    date: "05-29-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 30,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "had a real serious issue, T.J helped me out, i'm leaving as satisfied customer, boost always helps me out specially T.J",
                    image: Img30,
                    video: Video30,
                    date: "05-29-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 31,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "hey, I'm in a boost store, this is a nice boost store i've been in, gave me my stylo 6, thanks guys",
                    image: Img31,
                    video: Video31,
                    date: "05-30-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 32,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "hi, I'm here at boost mobile in Lansing, they have great customer service, good prices, recommended to anyone",
                    image: Img32,
                    video: Video32,
                    date: "05-30-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 33,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "hi, I'm here at boost store in Joliet, they got good service and good prices, thank you",
                    image: Img33,
                    video: Video33,
                    date: "05-30-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 34,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I wanna thanks this boost customer service, they gave me 8 plus, quality service, and treated me as a nice human being, God bless you",
                    image: Img34,
                    video: Video34,
                    date: "06-02-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 35,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I am here at boost, T.J helped me get a phone, they are very well, great service, and I appreciate that",
                    image: Img35,
                    video: Video35,
                    date: "06-03-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 36,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Excellent Service, great guys, real good service, we like the service, will shop again",
                    image: Img36,
                    video: Video36,
                    date: "06-03-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 37,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Hi, We are at Boost Mobile in Schmidt, they gave us the best service ever for me and my sister, we bought phones today, please stop by if you get a chance, you will have a good deal thanks",
                    image: Img37,
                    video: Video37,
                    date: "06-04-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 38,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to Boost Mobile in Lansing, and they gave me great service, got my new phone",
                    image: Img38,
                    video: Video38,
                    date: "06-05-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 39,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm a customer of Boost Mobile, and this is my spot",
                    image: Img39,
                    video: Video39,
                    date: "06-05-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 40,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to buy 2 phones and they gave me a real good deal",
                    image: Img40,
                    video: Video40,
                    date: "06-05-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 41,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I got the new Iphone 11, she helped me hook everything up, my experience here was great, awesome thank you",
                    image: Img41,
                    video: Video41,
                    date: "06-05-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 42,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Whole cell accessories services were really good, We got cute little radios and they showed us how to use, so we are really pleased with the services today, whatever accessories you need you can come here",
                    image: Img42,
                    video: Video42,
                    date: "06-06-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 43,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "T.J took care of me, Boost Mobile I have been a loyal customer for 17/18 years",
                    image: Img43,
                    video: Video43,
                    date: "06-06-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 44,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I just got awesome deal at Whole Cell Lansing, you should come check it out",
                    image: Img44,
                    video: Video44,
                    date: "06-19-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 45,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to Accessories for Tablets today and they had taken good care of me, I got a new cabel for my phone and plugin, they are very good and nice people",
                    image: Img45,
                    video: Video45,
                    date: "06-19-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 46,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Come to Whole Cell Accessories in Lansing, they got great deals",
                    image: Img46,
                    video: Video46,
                    date: "06-19-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 47,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Come to Whole Cell Accessories in Lansing, great deals, great prices",
                    image: Img47,
                    video: Video47,
                    date: "06-20-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 48,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Come to Whole Cell Accessories, they are lit, they got deals and they are still open",
                    image: Img48,
                    video: Video48,
                    date: "06-20-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 49,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Come to Whole Cell Accessories,they got great deals and great stuff",
                    image: Img49,
                    video: Video49,
                    date: "06-20-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 50,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Come to Whole Cell Accessories, great deals, great prices",
                    image: Img50,
                    video: Video50,
                    date: "06-21-2020",
                    store: "Whole Cell Accessories"
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
