import React, { Component } from 'react'

import Video19 from '../../../assets/testimonials/19.mp4'
import Video20 from '../../../assets/testimonials/20.mp4'
import Video21 from '../../../assets/testimonials/21.mp4'
import Video22 from '../../../assets/testimonials/22.mp4'
import Video23 from '../../../assets/testimonials/23.mp4'
import Video24 from '../../../assets/testimonials/24.mp4'
import Video25 from '../../../assets/testimonials/25.mp4'
import Video26 from '../../../assets/testimonials/26.mp4'
import Video27 from '../../../assets/testimonials/27.mp4'
import Video28 from '../../../assets/testimonials/28.mp4'

import '../../../css/body/testimonials/allTestimonials.css'
import $ from 'jquery'

class AllTestimonials extends Component {
    constructor(props){
        super(props)
        this.state={
            pause: false,
            videos:[
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef19",
                    src: Video19
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef20",
                    src: Video20
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef21",
                    src: Video21
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef22",
                    src: Video22
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef23",
                    src: Video23
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef24",
                    src: Video24
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef25",
                    src: Video25
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef26",
                    src: Video26
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef27",
                    src: Video27
                },
                {
                    id: "current-testi",
                    class:"slide video current",
                    vidref: "vidRef28",
                    src: Video28
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
            current.removeAttribute("id")
        }
        // Check for next slide
        if (current.nextElementSibling) {
            // Add current to next sibling
            current.nextElementSibling.classList.add('current');
            current.nextElementSibling.setAttribute("id", "current-testi")
        } else {
            // Add current to start
            slides[0].classList.add('current');
            slides[0].setAttribute("id", "current-testi")
        }
        setTimeout(() => current.classList.remove('current'),200);
        };

        const prevSlide = () => {
        // Get current class
        const current = document.querySelector('.current');
        // Remove current class
        if(current){
            current.classList.remove('current');
            current.removeAttribute("id")
        }
        // Check for prev slide
        if (current.previousElementSibling) {
            // Add current to prev sibling
            current.previousElementSibling.classList.add('current');
            current.previousElementSibling.setAttribute("id", "current-testi")
        } else {
            // Add current to last
            slides[slides.length - 1].classList.add('current');
            slides[slides.length - 1].setAttribute("id", "current-testi")
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
        this.refs.vidRef19.pause();
        this.refs.vidRef20.pause();
        this.refs.vidRef21.pause();
        this.refs.vidRef22.pause();
        this.refs.vidRef23.pause();
        this.refs.vidRef24.pause();
        this.refs.vidRef25.pause();
        this.refs.vidRef26.pause();
        this.refs.vidRef27.pause();
        this.refs.vidRef28.pause();
      };
    render() {
        return (
            <div className="all-testimonials">
                {/* <div className="top-controls">
                    <a href="/whole-cell-online-site/"><i className="fas fa-times icon cross"></i></a>
                </div> */}
                <div className="content">
                    <div id="test-wrapper" className="video-wrapper">
                        <i className="far fa-play-circle playpause"></i>
                    </div>
                    <div className="slider">
                        {this.state.videos.slice().reverse().map((video,key)=>(
                        <video key={key} ref={video.vidref}
                        preload="none"
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
