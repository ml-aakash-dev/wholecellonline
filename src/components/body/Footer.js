import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import GalleryModal from './GalleryModal'

import '../../css/body/footer.css'

import Img1 from '../../assets/work/1.jpg'
import Img2 from '../../assets/work/2.jpg'
import Img3 from '../../assets/work/3.jpg'
import Img4 from '../../assets/work/4.jpg'
import Img5 from '../../assets/work/5.jpg'
import Img6 from '../../assets/work/6.jpg'

import Video1 from '../../assets/work/1.mp4'
import Video2 from '../../assets/work/2.mp4'
import Video3 from '../../assets/work/3.mp4'
import Video4 from '../../assets/work/4.mp4'
import Video5 from '../../assets/work/5.mp4'
import Video6 from '../../assets/work/6.mp4'


class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: [
                {
                    id: 1,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Hi, Listen come to Umer, He is great and terrific",
                    image: Img1,
                    video: Video1,
                    date: "11-14-2020",
                    store: "Boost Mobile" 
                },
                {
                    id: 2,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Hi, I came to Boost Mobile, my slaesperson was Islah, really good person, really good guy",
                    image: Img2,
                    video: Video2,
                    date: "11-14-2020",
                    store: "Boost Mobile" 
                },
                {
                    id: 3,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Just got a great deal from Whole Cell Accessories, If you looking for a great deal, this is the place to come",
                    image: Img3,
                    video: Video3,
                    date: "11-14-2020",
                    store: "Whole Cell Accessories" 
                },
                {
                    id: 4,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I had a great experience today, have really good discounts, he helped us get a new phone, very great deal, very respectful",
                    image: Img4,
                    video: Video4,
                    date: "11-15-2020",
                    store: "Boost Mobile" 
                },
                {
                    id: 5,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "had a good deal, here at Boost Mobile, come check them out",
                    image: Img5,
                    video: Video5,
                    date: "11-15-2020",
                    store: "Boost Mobile" 
                },
                {
                    id: 6,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I just got my phone fixed by Islah and he did a good job",
                    image: Img6,
                    video: Video6,
                    date: "11-15-2020",
                    store: "We Fix Phones" 
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
                            <h1 className="f-logo">Whole Cell <span>Accessories</span></h1>
                            <p className="logo-bottom">
                                Open To Public!!!
                                <br/> 
                                Never Pay Retail 
                            </p>
                            <p>
                                    <a href='https://www.youtube.com/channel/UCVqmjZmCX8bwQgem5oSV-LQ' target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-youtube icon"></i>
                                    </a>
                                    <a href='https://www.instagram.com/wholecellchicago/' target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram icon"></i>
                                    </a>
                                    {/* <a href='https://www.google.com'>
                                        <i className="fab fa-google icon"></i>
                                    </a> */}
                                    <a href='https://www.facebook.com/WcellCH/' target="_blank" rel="noopener noreferrer">
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
                                <a onClick={this.props.scrollToAccessories}>- Whole Cell Accessories</a>
                                <br/>
                                <a onClick={this.props.scrollToRepair}>- We Fix Phones</a>
                                <br/>
                                <a onClick={this.props.scrollToActivation}>- We Are Wireless</a>
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
                            <p><a href="https://www.tensorsolutions.com/" target="_blank" rel="noopener noreferrer">Created By Tensor Solutions LLC | Copyrights Reserved &copy;</a></p>
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
