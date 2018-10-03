import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
				<div className="contact-items">
					<h2>Contact Us</h2>
					<input type='text' placeholder='Your Name...'></input>
					<input type='text' placeholder='Your Email...'></input>
					<input type='text' placeholder='Subject'></input>
					<textarea cols="20" rows="20" placeholder='Your Message Here ....'></textarea>
					<a href='#'>Submit</a>
				</div>
      </div>
    );
  }
}

export default Contact;