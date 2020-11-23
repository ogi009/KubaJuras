import React, {useState} from 'react';
import "../../scss/_mainPage.scss";
import TEst from "../Test/TEst";

const MainPage = () => {
    const [widthIt, setWidthIt] = useState(50);
    const [widthKite, setWidthIKite] = useState("50%");
    const [displayIt] = useState("flex");
    const [displayKite] = useState("flex");


   const itStyle = {
       width: `${widthIt}%`,
       height: "100%",
       display:displayIt,
   }
    const kiteStyle = {
        width: widthKite,
        height: "100%",
        display:displayKite,
    }
    const handlemouseit = ()=> {
       setWidthIt(80);
        setWidthIKite("20%");
    }
    const handlemousekite = ()=> {
        setWidthIKite("80%");
        setWidthIt(20);
    }
    const mosueleaveit = ()=> {
        setWidthIKite("50%");
        setWidthIt(50);
    }

    return (
        <>
        <div  className="main_container">
            <div onMouseEnter={handlemouseit} onMouseLeave={mosueleaveit} style={itStyle} className="it_container">
                <div className="title it_container-title">
                    <div>
                        <div className="foto_it"></div>
                        <h1>HI, I'M KUBA</h1>
                        <h2>/ FRONTEND DEVELOPER /</h2>
                    </div>

                </div>
                {widthIt >= 80 ? <TEst/> : null}

            </div>
            <div onMouseEnter={handlemousekite} onMouseLeave={mosueleaveit} style={kiteStyle} className="kite_container">
                <div className="title kite_container-title">
                    <div className="foto_kite"></div>
                    <h1>HI, I'M KUBA</h1>
                    <h2>/ KITESURFER /</h2>
                </div>
            </div>
        </div>
            </>
    );
};

export default MainPage;