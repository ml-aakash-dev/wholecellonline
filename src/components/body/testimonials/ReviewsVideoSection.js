import React, { Component } from 'react'

import Video1 from '../../../assets/testimonials/27.mp4'


import '../../../css/body/testimonials/reviewsVideoSection.css'
import $ from 'jquery'

class ReviewsVideoSection extends Component {
    constructor(props){
        super(props)
        this.state={
            pause: false
        }
    }
    componentDidMount = () => {
        $('.reviews-video-section .video-wrapper').click(function () {
            if($('.reviews-video-section .video').get(0).paused){        
                $('.reviews-video-section .video').get(0).play(); 
              }
                $(this).fadeOut()
          });

    }
    
    render() {
        return (
            <div className="reviews-video-section">
                <div className="video-wrapper">
                    <i className="far fa-play-circle playpause"></i>
                </div>
                <video preload="auto"
                controls id="video" className="video">
                    <source src={Video1} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
        )
    }
}

export default ReviewsVideoSection
