import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

import '../../css/body/galleryModal.css'

class GalleryModal extends Component {

    handleCross = () => {
        var video = document.getElementById('gm-video');
        video.pause();
        video.currentTime = 0;
        // document.getElementById('customer-reviews-modal').style.display="none"
        document.getElementById('footer-reviews-modal').style.display="none"
        // document.getElementById('testimonials-modal').style.display="none"
        document.getElementById('testimonials-gallery-modal').style.display="none"
        document.body.style.overflow="auto"
        this.props.clearState()
    }
    render() {
        return (
            <div className="gallery-modal">
                <div className="gm-contorls">
                    <i className="fas fa-times icon cross" onClick={this.handleCross}></i>
                </div>
                {
                this.props.filteredModal ? 
                this.props.filteredModal.map((data,key) => (
                <div className="gm-content" key={key}>
                    <h1>{data.firstname} <span>{data.lastname}</span></h1>
                    <Row>
                        <Col xs={12} lg={9} className="first-col">
                            <React.Fragment key={data.video}>
                                <video controls className="video" id="gm-video">
                                    <source src={data.video} type="video/mp4" />
                                    Your browser does not support HTML5 video.
                                </video>
                            </React.Fragment>
                        </Col>
                        <Col xs={12} lg={3} className="sec-col">
                            <span>
                                <h5>Description</h5>
                                <p>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                </p>
                                <p>{data.date}</p>
                                <p>{data.desc}</p>
                            </span>
                        </Col>
                    </Row>
                </div>
                )) : ''}
            </div>
        )
    }
}

export default GalleryModal
