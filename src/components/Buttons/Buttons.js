import React from 'react';
import './_buttons.scss';
import {Link} from 'react-router-dom';


const Buttons = () => {
    return (
        <div className="butons">
            <Link to={"/Portfolio"}>
                <button>PORTFOLIO</button>
            </Link>
            <Link to={"/About"}>
                <button>ABOUT</button>
            </Link>
            <Link to={"/Contact"}>
                <button>CONTACT</button>
            </Link>
        </div>
    );
};

export default Buttons;