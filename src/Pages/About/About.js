import React from 'react';
import "../../scss/_about.scss";
import Buttons2 from "../../components/Buttons2/Buttons2";
import cv from "../../media/cv.png";

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
                <div className="el-3 about">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta enim laudantium magni pariatur, provident sed veritatis? Accusantium alias atque aut consequatur, dolorum eligendi eos error, eum illum iusto laudantium mollitia nihil odit perferendis rem tenetur vero. Cum dolores fugit laudantium odit officiis sed sint voluptatibus. Adipisci eveniet officia quos!</p>
                    <div>
                        <img src={cv} alt="cv_photo"/>
                        <button>POBIERZ</button>
                    </div>
                </div>
                <div className="el-4"></div>
            </div>
        </div>
    );
};

export default About;