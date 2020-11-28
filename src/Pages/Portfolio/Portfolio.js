import React from 'react';
import "../../scss/_portfolio.scss";
import Buttons2 from "../../components/Buttons2/Buttons2";

const Portfolio = () => {
    return (
        <div className="portfolio_container">
            <header className="portfolio_header">
                <Buttons2/>
            </header>
            <div className="flex_container">
                <div className="portfolio_title">
                    <h1>PROJECTS</h1>
                    <div className="project1">
                        <h2>PORTFOLIO</h2>
                        <div className="project1_content">
                            <h2>TECHNOLOGIES: <p>HTML, CSS, SASS, REACT</p></h2>
                        </div>
                    </div>
                    <div>THE MARRAIGE GAMES</div>
                    <div>ODDAJ RZECZY</div>
                </div>

                <div className="portfolio_content"></div>
            </div>
        </div>
    );
};

export default Portfolio;