import React, { Component } from 'react'
import {
    Form,
    Row, Col
} from 'react-bootstrap';

import '../../css/body/contact.css'

class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            firstname: "",
            lastname: "",
            email: "",
            message: "",
            emailStatus: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    handleSubmit = (e) => {

        const {
            firstname,
            lastname,
            email,
            message
        } = this.state

        //create new xmlhttprequest
        var xhr = new XMLHttpRequest();

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the response state and the step
            
            this.setState ({
                emailStatus: xhr.responseText
            });
            alert(this.state.emailStatus)
        });
        // open the request with the verb and the url
        xhr.open('GET', 'https://wholecellonline.com/whole-cell-online-site/mail.php?sendto=' + email + 
                                '&name=' + firstname + ' ' + lastname +
                                '&message=' + message);
        // send the request
        xhr.send();

        // reset the fields
        this.resetForm()
        
        e.preventDefault()
    }
        resetForm(){
            document.getElementById('contact-form').reset();
            this.setState({
                firstname: "",
                lastname: "",
                email: "",
                message: ""
            })
        }
    render() {
        return (
            <div className="contact" id="s-contact">
                <div className="bgimg">     
                     <div className="image-wrapper">
                        <div className="content">
                            <div data-aos="fade-left" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                            <h1>Contact</h1>
                            <h5>KEEP IN TOUCH</h5>
                            </div>
                            <div className="sub-content">
                                <span data-aos="fade-right" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                                    <p>Number: <a href="tel:(630) 674 8822">(630) 674 8822</a></p>
                                    <p>2419 W. Jefferson St. <br/> Joliet, IL 60181</p>
                                    <p>
                                        {/* <a href="mailto:info@wholecellonline.com">info@wholecellonline.com</a> 
                                        <br />  */}
                                        <a href="https://www.wholecellonline.com" target="_blank" rel="noopener noreferrer">www.wholecellonline.com</a>
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
                                </span>
                                <div className="form-content" data-aos="fade-left" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                                    <Form id="contact-form" onSubmit={this.handleSubmit} className="form">
                                        <Row form>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Control
                                                    type="firstname"
                                                    name="firstname"
                                                    placeholder="First Name"
                                                    onChange={this.handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Control
                                                    type="lastname"
                                                    name="lastname"
                                                    placeholder="Last Name"
                                                    onChange={this.handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>   
                            
                                        <Form.Group>
                                            <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control
                                            as="textarea"
                                            name="message"
                                            type="textarea" 
                                            rows={4} 
                                            id="joinUsMessage" 
                                            placeholder="Message"
                                            onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="text-center">
                                            <button className="btn btn-outline-light send" type="submit">Send</button>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
