import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import GalleryModal from './GalleryModal'

import '../../css/body/footer.css'

import Img354 from '../../assets/work/354_img.jpg'
import Img355 from '../../assets/work/355_img.jpg'
import Img357 from '../../assets/work/357_img.jpg'
import Img361 from '../../assets/work/361_img.jpg'
import Img362 from '../../assets/work/362_img.jpg'
import Img363 from '../../assets/work/363_img.jpg'

import Video354 from '../../assets/work/354.mp4'
import Video355 from '../../assets/work/355.mp4'
import Video357 from '../../assets/work/357.mp4'
import Video361 from '../../assets/work/361.mp4'
import Video362 from '../../assets/work/362.mp4'
import Video363 from '../../assets/work/363.mp4'


class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: [
                {
                    id: 354,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to purchase my phone, Whole Cell was a big help today, I appreciate it",
                    image: Img354,
                    video: Video354,
                    date: "08-16-2020",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 355,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm at Whole Cell Accessories, this is the best place to buy what you need for your phone, anything you need come here",
                    image: Img355,
                    video: Video355,
                    date: "08-16-2020",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 357,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came here to look for phone, the young man here was fabulous, kind and patient, he convinced me to purchase a phone and accessories, thank you",
                    image: Img357,
                    video: Video357,
                    date: "08-17-2020",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 361,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "The service is very good at Boost Mobile",
                    image: Img361,
                    video: Video361,
                    date: "08-19-2020",
                    store: "Boost Mobile" 
                },
                {
                    id: 362,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I come up here at Whole Cell Accessories, they took care of my phone, 20-30 minutes to fix this cracked phone, this is the place where you wanna be",
                    image: Img362,
                    video: Video362,
                    date: "08-20-2020",
                    store: "We Fix Phones" 
                },
                {
                    id: 363,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm here at Whole Cell Accessories, this is my second trip here, very successful, come on down they will hook you up",
                    image: Img363,
                    video: Video363,
                    date: "08-20-2020",
                    store: "Whole Cell Accessories" 
                }
            ],
            filteredModal:[]
        }
    }
      toggleGalleryModal = (id) => {
        this.setState({
            filteredModal: this.state.reviews.filter(review => 
                review.id === id
                )
        })
        document.getElementById('footer-reviews-modal').style.display="block"
        document.body.style.overflow="hidden"
    }
    clearState = () => {
        this.setState({
            filteredModal: null
        })
    }
    render() {
        return (
            <div className="footer">
                <Container data-aos="fade-down" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                    <Row>
                        <Col xs={6} md={3} className="first-col col">
                            <h1>Whole Cell <span>Accessories</span></h1>
                            <p>
                                Open To Public
                                <br/> 
                                Never Pay Retail 
                            </p>
                            <p>
                                    <a href='https://www.youtube.com/channel/UCVqmjZmCX8bwQgem5oSV-LQ' target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-youtube icon"></i>
                                    </a>
                                    <a href='https://www.instagram.com/whole_cell_accessories/?hl=en' target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram icon"></i>
                                    </a>
                                    {/* <a href='https://www.google.com'>
                                        <i className="fab fa-google icon"></i>
                                    </a> */}
                                    <a href='https://www.facebook.com/Whole-Cell-Accessories-133478916702283/' target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f icon"></i>
                                    </a>
                                    {/* <a href='https://www.snapchat.com'>
                                        <i className="fab fa-snapchat-ghost icon"></i>
                                    </a>
                                    <a href='https://www.pinterest.com'>
                                        <i className="fab fa-pinterest-p icon"></i>
                                    </a> */}
                                    </p>
                        </Col>
                        <Col xs={6} md={3} className="sec-col col">
                            <h6>Additional Links</h6>
                            <p>
                                <a href="https://wholecellonline.com/internal/" target="_blank" rel="noopener noreferrer">- Whole Cell Accessories</a>
                                <br/>
                                <a href="https://wholecellonline.com/wfp_store/" target="_blank" rel="noopener noreferrer">- We Fix Phones</a>
                                <br/>
                                <a href="https://wholecellonline.com/prepaidcity/" target="_blank" rel="noopener noreferrer">- Prepaid City</a>
                            </p>
                        </Col>
                        <Col xs={6} md={3} className="third-col col">
                            <h6>Quick Visit</h6>
                            <p>
                                <span onClick={this.props.scrollToServices}>- Services</span>
                                <br/>
                                <span onClick={this.props.scrollToWork}>- Work</span>
                                <br/>
                                <span onClick={this.props.scrollToNumbers}>- Numbers</span>
                                <br/>
                                <span onClick={this.props.scrollToContact}>- Contact</span>
                            </p>
                        </Col>
                        <Col xs={6} md={3} className="last-col col">
                            <h6>Our Reviews</h6>
                            <div className="our-reviews">
                                <p>
                                {this.state.reviews.slice().reverse().map((review,key)=>(
                                    <span key={key} onClick={() => this.toggleGalleryModal(review.id)}>
                                        <i className="far fa-play-circle video-icon"></i>
                                        <img src={review.image} alt="client"/>
                                    </span>
                                ))}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                    <Row className="copyrights">
                        <Col>
                            <p>Created By Tensor Solutions LLC | Copyrights Reserved &copy;</p>
                        </Col>
                    </Row>

                    <div id="footer-reviews-modal">
                    <GalleryModal 
                    filteredModal= {this.state.filteredModal}
                    clearState={this.clearState}
                    />
                    </div>
            </div>
        )
    }
}

export default Footer
