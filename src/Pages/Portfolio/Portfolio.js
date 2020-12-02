import React, {useState} from 'react';
import "../../scss/_portfolio.scss";
import Buttons2 from "../../components/Buttons2/Buttons2";

const Portfolio = () => {
    const [show, setShow] = useState(true)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)

    const handleClick = () => {
        setShow(!show)
        setShow1(false)
        setShow2(false)
    }
    const handleClick1 = () => {
        setShow1(!show1)
        setShow(false)
        setShow2(false)
    }
    const handleClick2 = () => {
        setShow2(!show2)
        setShow(false)
        setShow1(false)
    }



    return (
        <div className="portfolio_container">
            <header className="portfolio_header">
                <Buttons2/>
            </header>
            <div className="flex_container">
                <div className="el-1">
                    <h1>PROJECTS</h1>
                </div>
                <div className="el-2"></div>
                <div className="el-3">
                    <div onClick={handleClick}>
                        <div>
                            {show ? <i className="fas fa-caret-down"></i> : <i className="fas fa-caret-right"></i>}
                            <h1>PORTFOLIO</h1>
                        </div>
                        {show ? <section>
                            <div className="section_content">
                                <h1>TECHNOLOGIES: <p>HTML, CSS, REACT</p></h1>
                                <p>DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum eveniet
                                    illo
                                    laboriosam provident rem vero? Aliquam id illo ipsum magnam, nobis repellat veniam
                                    voluptate. Aperiam cum dignissimos dolores eaque eius error et illo ipsa, laborum
                                    molestiae neque non obcaecati odio omnis quae reprehenderit rerum tempora unde
                                    veniam
                                    vero, voluptates voluptatum?</p>
                            </div>
                            <div className="section_image">

                            </div>
                        </section> : null}

                    </div>
                    <div>
                        <div onClick={handleClick1}>
                            {show1 ? <i className="fas fa-caret-down"></i> : <i className="fas fa-caret-right"></i>}
                            <h1>THE MARRIAGE GAMES</h1>
                        </div>
                        {show1 ? <section>
                            <div className="section_content">
                                <h1>TECHNOLOGIES: <p>HTML, CSS, REACT</p></h1>
                                <p>The application compares two users in terms of chores. Thanks to it, you can see who
                                    walks out the dog more often or who had been doing the dinner more times, etc.
                                    The user gets points for each task. The user with the most points can draw a movie
                                    to watch in the appropriate tab.
                                    In the other tab, the users can save ideas for the dates (like going to the movies
                                    or the restaurant). They also get extra points for organising them.
                                    The project was created as a part of the programming course completion
                                    assignment.</p>
                            </div>
                            <div className="section_image2">

                            </div>
                        </section> : null}
                    </div>
                    <div>
                        <div onClick={handleClick2}>
                            {show2 ? <i className="fas fa-caret-down"></i> : <i className="fas fa-caret-right"></i>}
                            <h1>HELP OTHERS</h1>
                        </div>
                        {show2 ? <section>
                            <div className="section_content">
                                <h1>TECHNOLOGIES: <p>HTML, CSS, REACT, JavaScritp</p></h1>
                                <p>The project was created as part of completing the Portfolio Lab course at Coders Lab.
                                    Working on the project allowed me to understand more about creating React applications, using the SASS preprocessor and creating the RWD website..</p>
                            </div>
                            <div className="section_image3">

                            </div>
                        </section> : null}
                    </div>
                </div>
                <div className="el-4"></div>
            </div>
        </div>
    );
};

export default Portfolio;