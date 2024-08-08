import React, { useState } from 'react';
import './index.css';
import myPhoto from "../assets/Sasidhar_passphoto.jpg"


const About = () => {
    const [activeItem, setActiveItem] = useState("skills");

    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div id='about' className="aboutCard">
                                                          
            <img className="aboutImg" alt="my_photo" src={myPhoto} />

            <div >
                <h1>About Me</h1>
                <p>I am a computer science student and a web developer specializing in React. I have a passion for web development and enjoy solving data structures. My academic background and practical experience allow me to create dynamic user interfaces and tackle algorithmic challenges effectively.</p>
                <ul className="aboutMenu">
                    <li className={`aboutMenuItems ${activeItem === 'skills' ? 'active' : ''}`} onClick={() => handleClick('skills')}>Skills</li>
                    <li className={`aboutMenuItems ${activeItem === 'education' ? 'active' : ''}`} onClick={() => handleClick('education')}>Education</li>
                    <li className={`aboutMenuItems ${activeItem === 'favourite' ? 'active' : ''}`} onClick={() => handleClick('favourite')}>Favourite</li>
                </ul>
                {activeItem === 'skills' && (
                    <div className="skillsSection">
                        <h2>Skills</h2>
                        <div className="skill">
                            <span>HTML</span>
                            <div className="progressBar">
                                <div className="progress" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>CSS</span>
                            <div className="progressBar">
                                <div className="progress" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>JavaScript</span>
                            <div className="progressBar">
                                <div className="progress" style={{ width: '95%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>React</span>
                            <div className="progressBar">
                                <div className="progress" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>Node.js</span>
                            <div className="progressBar">
                                <div className="progress" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>Python</span>
                            <div className="progressBar">
                                <div className="progress" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>SQL</span>
                            <div className="progressBar">
                                <div className="progress" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>Data Structures</span>
                            <div className="progressBar">
                                <div className="progress" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                    </div>
                )}
                {activeItem === 'education' && (
                    <div className="educationSection">
                        <h2>Education</h2>
                        <div className="educationDetails">
                            <div className="educationItem">
                                <span>10th Grade:</span>
                                <span>9.3 CGPA</span>
                            </div>
                            <div className="educationItem">
                                <span>Intermediate:</span>
                                <span>93.6%</span>
                            </div>
                            <div className="educationItem">
                                <span>B.Tech:</span>
                                <span>8.64 CGPA</span>
                            </div>
                        </div>
                    </div>
                )}
                {activeItem === 'favourite' && (
                    <div className="favouriteSection">
                        <h2>Favourite</h2>
                        <ul>
                            <li>Solving Data Structures</li>
                            <li>Playing Cricket</li>
                            <li>Watching Movies</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default About;