import React, { Component } from 'react'
import {FacebookShareButton, FacebookIcon, 
        WhatsappShareButton, WhatsappIcon,
        EmailShareButton, EmailIcon} from 'react-share'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Swal from 'sweetalert2';

import Video24 from '../../../assets/testimonials/24.mp4'
import Video25 from '../../../assets/testimonials/25.mp4'
import Video26 from '../../../assets/testimonials/26.mp4'
import Video27 from '../../../assets/testimonials/27.mp4'
import Video28 from '../../../assets/testimonials/28.mp4'
import Video29 from '../../../assets/testimonials/29.mp4'
import Video30 from '../../../assets/testimonials/30.mp4'
import Video31 from '../../../assets/testimonials/31.mp4'
import Video32 from '../../../assets/testimonials/32.mp4'
import Video33 from '../../../assets/testimonials/33.mp4'

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
                    vidref: "vidRef24",
                    src: Video24,
                    url: "https://wholecellonline.com/whole-cell-online-site/static/media/24.b2748bde.mp4"
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef25",
                    src: Video25,
                    url: "https://wholecellonline.com/whole-cell-online-site/static/media/25.d5487dbd.mp4"
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef26",
                    src: Video26,
                    url: "https://wholecellonline.com/whole-cell-online-site/static/media/26.3ca58215.mp4"
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef27",
                    src: Video27,
                    url: "https://wholecellonline.com/whole-cell-online-site/static/media/27.2eb61d61.mp4"
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef28",
                    src: Video28,
                    url: "https://wholecellonline.com/whole-cell-online-site/static/media/28.f6ea8ea7.mp4"
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef29",
                    src: Video29,
                    url: "https://wholecellonline.com/whole-cell-online-site/static/media/29.4010c812.mp4"
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef30",
                    src: Video30,
                    url: "https://wholecellonline.com/whole-cell-online-site/static/media/30.3b8a635e.mp4"
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef31",
                    src: Video31,
                    url: "https://wholecellonline.com/whole-cell-online-site/static/media/31.4ad336fe.mp4"
                },
                {
                    id: "",
                    class:"slide video",
                    vidref: "vidRef32",
                    src: Video32,
                    url: "https://wholecellonline.com/whole-cell-online-site/static/media/32.a15a5187.mp4"
                },
                {
                    id: "current-testi",
                    class:"slide video current",
                    vidref: "vidRef33",
                    src: Video33
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
        this.refs.vidRef24.pause();
        this.refs.vidRef25.pause();
        this.refs.vidRef26.pause();
        this.refs.vidRef27.pause();
        this.refs.vidRef28.pause();
        this.refs.vidRef29.pause();
        this.refs.vidRef30.pause();
        this.refs.vidRef31.pause();
        this.refs.vidRef32.pause();
        this.refs.vidRef33.pause();
      };
    render() {
        const handleCopy = () => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: 'Successfully, Copied To Clipboard', 
                showConfirmButton: false,
                timer: 1500
              })
          }
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
                            // <div>
                            //     <div className="social-share">
                            //     <FacebookShareButton>
                            //         <FacebookIcon logoFillColor="white" size={50}></FacebookIcon>
                            //     </FacebookShareButton>
                            //     <EmailShareButton>
                            //         <EmailIcon logoFillColor="white" size={50}></EmailIcon>
                            //     </EmailShareButton>
                            //     <WhatsappShareButton>
                            //         <WhatsappIcon logoFillColor="white" size={50}></WhatsappIcon>
                            //     </WhatsappShareButton>
                            //     <CopyToClipboard text={"https://wholecellonline.com/whole-cell-online-site/static/media/main.8695a813.mp4"}
                            //         onCopy={handleCopy}>
                            //         <i className="fas fa-paste ctc-icon"></i>
                            //     </CopyToClipboard>
                            //     </div>
                                <video key={key} ref={video.vidref}
                                preload="none"
                                controls id={video.id} className={video.class}>
                                    <source src={video.src} type="video/mp4" />
                                    Your browser does not support HTML5 video.
                                </video>
                            // </div>
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
