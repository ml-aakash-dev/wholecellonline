import React, { Component } from 'react'
import ReviewsVideoSection from './ReviewsVideoSection'

import '../../../css/body/testimonials/testimonials.css'

class Testimonials extends Component {
    render() {
        return (
            <div id="testimonials" className="testimonials">
                <div className="bgimg">
                    <div className="wrapper">
                        <div className="content">
                            <h1>Testimonials</h1>
                            <h2><span>OUR RECENT</span> TESTIMONIAL</h2>
                        </div>
                        <ReviewsVideoSection />
                        <a className="testi-btn" href="/testimonials">View More Testimonials</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials
