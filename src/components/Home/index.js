import React, { Component } from 'react';
import About from '../About';
import Projects from '../Projects';
import './index.css';
import Contact from '../Contact';
import Header from "../Header";
import MyService from '../Services';

class Home extends Component {
    render() {
        return (
            <>
            <Header />
            <div className='homeContainer'>
                <div className="card">
                    <div className="homeCard">
                        <h1 className="homeTitle">Hi, I'm Sasidhar</h1>
                        <p className='contPara'>I'm a fullstack developer from India. Feel free to reach out if you'd like to know more.</p>
                        <a className="contactLink" href="#contact">Contact me</a>
                    </div>
                    <div className='homeAvatarImgCard'>
                        <img
                            className="homeAvatarImg"
                            src="https://static.turbosquid.com/Preview/2014/05/16__04_27_45/tguy5_render04.jpga63a5f0e-5c90-4bdd-99f2-88c6dd24d224Zoom.jpg"
                            alt="Profile"
                        />
                    </div>
                    <div className="topBlur" />
                    <div className="bottomBlur" />
                </div>
                <div className="contentSection">
                    <About />
                    <MyService />
                    <Projects />
                    <Contact />
                </div>
                <footer className="footer">
                    <p>© 2024 Sasidhar. All rights reserved.</p>
                </footer>
            </div>
            </>
        );
    }
}

export default Home;
