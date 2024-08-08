import React, { useState } from 'react';
import { FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import './index.css'; // Import the CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Message: ''
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyHvikIHqgM11hckHkbLXglGF8eMvaTS39MQZHtVQmrTCek7jAgeQrhJkh9M5H8jnqewA/exec';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
            .then(response => {
                console.log('Success!', response);
                setFormData({
                    Name: '',
                    Email: '',
                    Message: ''
                });
            })
            .catch(error => console.error('Error!', error.message));
    };

    return (
        <div id='contact' className="contactContainer">
            <div className="contactInfo">
                <h1 className="contactTitle">Contact me</h1>
                <div className="contactItem">
                    <FaPhone className="contactIcon" />
                    <p className="contactText">9392188092</p>
                </div>
                <div className="contactItem">
                    <IoMdMail className="contactIcon" />
                    <p className="contactText">jonna.sasi17@gmail.com</p>
                </div>
                <div className="contactSocial">
                    <a href="https://www.linkedin.com/in/sasidharjonna/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="socialIcon" />
                    </a>
                    <a href="https://github.com/sasidhar07" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="socialIcon" />
                    </a>
                </div>
                <a className="downloadButton" href="/assets/updated_resume.pdf" download>
                    Download Resume
                </a>

            </div>
            <form name='submit-to-google-sheet' className="contactForm" onSubmit={handleSubmit}>
                <input 
                    className="contactInput" 
                    name='Name' 
                    placeholder="Your Name" 
                    value={formData.Name} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    className="contactInput" 
                    name='Email' 
                    type='email' 
                    placeholder="Your Email" 
                    value={formData.Email} 
                    onChange={handleChange} 
                    required 
                />
                <textarea 
                    className="contactTextarea" 
                    name='Message' 
                    placeholder="Your message" 
                    value={formData.Message} 
                    onChange={handleChange} 
                    required 
                />
                <button className='submitFormButton' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;
