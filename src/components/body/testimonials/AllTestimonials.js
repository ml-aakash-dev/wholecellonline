import React, { Component } from 'react'

import Video1 from '../../../assets/testimonials/1.mp4'
import Video27 from '../../../assets/testimonials/27.mp4'

import '../../../css/body/testimonials/allTestimonials.css'
import $ from 'jquery'

class AllTestimonials extends Component {
    constructor(props){
        super(props)
        this.state={
            pause: false,
            videos:[
                {
                    id: "video1",
                    class:"slide video",
                    vidref: "vidRef1",
                    src: Video1
                },
                {
                    id: "video27",
                    class:"slide video current",
                    vidref: "vidRef27",
                    src: Video27
                }
            ]
        }
    }
    componentDidMount = () => {

        //changing video slide
        const slides = document.querySelectorAll('.slide');
        const prev = document.querySelector('#next');
        const next = document.querySelector('#prev');
        const auto = false; // Auto scroll
        const intervalTime = 5000;
        let slideInterval;

        const nextSlide = () => {
        // Get current class
        const current = document.querySelector('.current');
        // Remove current class
        if(current){
            current.classList.remove('current');
        }
        // Check for next slide
        if (current.nextElementSibling) {
            // Add current to next sibling
            current.nextElementSibling.classList.add('current');
        } else {
            // Add current to start
            slides[0].classList.add('current');
        }
        setTimeout(() => current.classList.remove('current'),200);
        };

        const prevSlide = () => {
        // Get current class
        const current = document.querySelector('.current');
        // Remove current class
        if(current){
            current.classList.remove('current');
        }
        // Check for prev slide
        if (current.previousElementSibling) {
            // Add current to prev sibling
            current.previousElementSibling.classList.add('current');
        } else {
            // Add current to last
            slides[slides.length - 1].classList.add('current');
        }
        setTimeout(() => current.classList.remove('current'));
        };

        // Button events
        if(next) {
            next.addEventListener('click', e => {
                nextSlide();
                if (auto) {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, intervalTime);
                }
            });
        }

        if(prev){
            prev.addEventListener('click', e => {
                prevSlide();
                if (auto) {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, intervalTime);
                }
            });
        }

        // Auto slide
        if (auto) {
        // Run next slide at interval time
        slideInterval = setInterval(nextSlide, intervalTime);
        }

        
        
        $('.all-testimonials .video-wrapper').click(function () {
            if($('.all-testimonials .slider .video.current').get(0).paused){        
                $('.all-testimonials .slider .video.current').get(0).play(); 
              }
                $(this).fadeOut()
          });
          $('.all-testimonials .prev').click(function () {
              $('.all-testimonials .video-wrapper').fadeIn()
              })
          $('.all-testimonials .next').click(function () {
              $('.all-testimonials .video-wrapper').fadeIn()
              })

    }
    // componentWillUnmount = () => {
    //     this.pauseVideo();
    // };

    componentDidUpdate(){
    }

    pauseVideo = () => {
        // Pause as well
        this.refs.vidRef1.pause();
        this.refs.vidRef27.pause();
      };
    render() {
        return (
            <div className="all-testimonials">
                <div className="top-controls">
                    <a href="/"><i className="fas fa-times icon cross"></i></a>
                </div>
                <div className="content">
                    <div className="video-wrapper">
                        <i className="far fa-play-circle playpause"></i>
                    </div>
                    <div className="slider">
                        {this.state.videos.slice().reverse().map((video,key)=>(
                        <video key={key} ref={video.vidref}
                        preload="auto"
                        controls id={video.id} className={video.class}>
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                        ))}
                    </div>
                    <button id="prev" className="prev" onClick={this.pauseVideo}><i className="fas fa-arrow-left"></i>{ window.innerWidth>575 ? " Prev Video" : ""}</button>
                    <button id="next" className="next" onClick={this.pauseVideo}>{ window.innerWidth>575 ? "Next Video " : ""}<i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        )
    }
}

export default AllTestimonials
