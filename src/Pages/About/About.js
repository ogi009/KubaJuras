import React from 'react';
import "../../scss/_about.scss";
import Buttons2 from "../../components/Buttons2/Buttons2";
import cv from "../../media/cv.png";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="portfolio_container">
            <header className="portfolio_header">
                <Buttons2/>
            </header>
            <div className="flex_container">
                <div className="el-1">
                    <h1>ABOUT</h1>
                </div>
                <div className="el-2"></div>
                <div className="el-3-about about">
                    <div>
                        <p>My name is Kuba and I am a beginner front-end web developer. Each of my website is created
                            with
                            care of latest design and coding trends. I spend most of my time improving development and
                            design to push projects to the next level and to make them unique and timeless</p>
                        <p>On daily basis, I use HTML, CSS, JS, REACT, Figma, Bootstrap and Sass.</p>

                        <p>I'm a passionate kiter and snowkiter. Whilst not staring at a screen, you can find me
                            on the water or snow :)</p>
                    </div>

                    <div>
                        <img src={cv} alt="cv_photo"/>
                        <Link to="/Jakub Juras CV.pdf" target="_blank" download>POBIERZ</Link>
                    </div>
                </div>
                <div className="el-4"></div>
            </div>
        </div>
    );
};

export default About;