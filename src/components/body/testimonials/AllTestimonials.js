import React, { Component } from 'react'

import Video1 from '../../../assets/testimonials/1.mp4'
import Video2 from '../../../assets/testimonials/2.mp4'
import Video3 from '../../../assets/testimonials/3.mp4'
import Video4 from '../../../assets/testimonials/4.mp4'
import Video5 from '../../../assets/testimonials/5.mp4'
import Video6 from '../../../assets/testimonials/6.mp4'
import Video7 from '../../../assets/testimonials/7.mp4'
import Video8 from '../../../assets/testimonials/8.mp4'
import Video9 from '../../../assets/testimonials/9.mp4'
import Video10 from '../../../assets/testimonials/10.mp4'
import Video11 from '../../../assets/testimonials/11.mp4'
import Video12 from '../../../assets/testimonials/12.mp4'
import Video13 from '../../../assets/testimonials/13.mp4'
import Video14 from '../../../assets/testimonials/14.mp4'
import Video15 from '../../../assets/testimonials/15.mp4'
import Video16 from '../../../assets/testimonials/16.mp4'
import Video17 from '../../../assets/testimonials/17.mp4'
import Video18 from '../../../assets/testimonials/18.mp4'
import Video19 from '../../../assets/testimonials/19.mp4'
import Video20 from '../../../assets/testimonials/20.mp4'
import Video21 from '../../../assets/testimonials/21.mp4'
import Video22 from '../../../assets/testimonials/22.mp4'
import Video23 from '../../../assets/testimonials/23.mp4'
import Video24 from '../../../assets/testimonials/24.mp4'
import Video25 from '../../../assets/testimonials/25.mp4'

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
                    id: "video2",
                    class:"slide video",
                    vidref: "vidRef2",
                    src: Video2
                },
                {
                    id: "video3",
                    class:"slide video",
                    vidref: "vidRef3",
                    src: Video3
                },
                {
                    id: "video4",
                    class:"slide video",
                    vidref: "vidRef4",
                    src: Video4
                },
                {
                    id: "video5",
                    class:"slide video",
                    vidref: "vidRef5",
                    src: Video5
                },
                {
                    id: "video6",
                    class:"slide video",
                    vidref: "vidRef6",
                    src: Video6
                },
                {
                    id: "video7",
                    class:"slide video",
                    vidref: "vidRef7",
                    src: Video7
                },
                {
                    id: "video8",
                    class:"slide video",
                    vidref: "vidRef8",
                    src: Video8
                },
                {
                    id: "video9",
                    class:"slide video",
                    vidref: "vidRef9",
                    src: Video9
                },
                {
                    id: "video10",
                    class:"slide video",
                    vidref: "vidRef10",
                    src: Video10
                },
                {
                    id: "video11",
                    class:"slide video",
                    vidref: "vidRef11",
                    src: Video11
                },
                {
                    id: "video12",
                    class:"slide video",
                    vidref: "vidRef12",
                    src: Video12
                },
                {
                    id: "video13",
                    class:"slide video",
                    vidref: "vidRef13",
                    src: Video13
                },
                {
                    id: "video14",
                    class:"slide video",
                    vidref: "vidRef14",
                    src: Video14
                },
                {
                    id: "video15",
                    class:"slide video",
                    vidref: "vidRef15",
                    src: Video15
                },
                {
                    id: "video16",
                    class:"slide video",
                    vidref: "vidRef16",
                    src: Video16
                },
                {
                    id: "video17",
                    class:"slide video",
                    vidref: "vidRef17",
                    src: Video17
                },
                {
                    id: "video18",
                    class:"slide video",
                    vidref: "vidRef18",
                    src: Video18
                },
                {
                    id: "video19",
                    class:"slide video",
                    vidref: "vidRef19",
                    src: Video19
                },
                {
                    id: "video20",
                    class:"slide video",
                    vidref: "vidRef20",
                    src: Video20
                },
                {
                    id: "video21",
                    class:"slide video",
                    vidref: "vidRef21",
                    src: Video21
                },
                {
                    id: "video22",
                    class:"slide video",
                    vidref: "vidRef22",
                    src: Video22
                },
                {
                    id: "video23",
                    class:"slide video",
                    vidref: "vidRef23",
                    src: Video23
                },
                {
                    id: "video24",
                    class:"slide video",
                    vidref: "vidRef24",
                    src: Video24
                },
                {
                    id: "video25",
                    class:"slide video current",
                    vidref: "vidRef25",
                    src: Video25
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
        this.refs.vidRef2.pause();
        this.refs.vidRef3.pause();
        this.refs.vidRef4.pause();
        this.refs.vidRef5.pause();
        this.refs.vidRef6.pause();
        this.refs.vidRef7.pause();
        this.refs.vidRef8.pause();
        this.refs.vidRef9.pause();
        this.refs.vidRef10.pause();
        this.refs.vidRef11.pause();
        this.refs.vidRef12.pause();
        this.refs.vidRef13.pause();
        this.refs.vidRef14.pause();
        this.refs.vidRef15.pause();
        this.refs.vidRef16.pause();
        this.refs.vidRef17.pause();
        this.refs.vidRef18.pause();
        this.refs.vidRef19.pause();
        this.refs.vidRef20.pause();
        this.refs.vidRef21.pause();
        this.refs.vidRef22.pause();
        this.refs.vidRef23.pause();
        this.refs.vidRef24.pause();
        this.refs.vidRef25.pause();
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
