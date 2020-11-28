import React from 'react';
import {Link} from "react-router-dom";
import "../../scss/_buttons2.scss"

const Buttons2 = () => {
    return (
        <div className="butons2">
            <Link to={"/"}>
                <button>HOME</button>
            </Link>
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

export default Buttons2;