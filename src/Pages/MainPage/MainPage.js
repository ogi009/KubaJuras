import React, {useState} from 'react';
import "../../scss/_mainPage.scss";
import Buttons from "../../components/Buttons/Buttons";
import video from '../../media/filmik.mp4'

const MainPage = () => {
    const [widthIt, setWidthIt] = useState(50);
    const [widthKite, setWidthIKite] = useState("50%");
    const [displayIt] = useState("flex");
    const [displayKite] = useState("flex");


    const itStyle = {
        width: `${widthIt}%`,
        height: "100%",
        display: displayIt,
    }
    const kiteStyle = {
        width: widthKite,
        height: "100%",
        display: displayKite,
    }
    const handlemouseit = () => {
        setWidthIt(80);
        setWidthIKite("20%");
    }
    const handlemousekite = () => {
        setWidthIKite("80%");
        setWidthIt(20);
    }
    const mosueleaveit = () => {
        setWidthIKite("50%");
        setWidthIt(50);
    }

    return (
        <>
            <div className="main_container">
                <div onMouseEnter={handlemouseit} onMouseLeave={mosueleaveit} style={itStyle} className="it_container">
                    <div className="title it_container-title">
                        <div>
                            <div className="foto_it"></div>
                            <h1>HI, I'M KUBA</h1>
                            <h2>/ FRONTEND DEVELOPER /</h2>
                        </div>

                    </div>
                    {widthIt >= 80 ? <Buttons/> : null}

                </div>
                <div onMouseEnter={handlemousekite} onMouseLeave={mosueleaveit} style={kiteStyle}
                     className="kite_container">
                    <div className="title kite_container-title">
                        <div className="foto_kite content"></div>
                        <h1>HI, I'M KUBA</h1>
                        <h2>/ KITESURFER /</h2>
                    </div>
                    {widthIt <= 20 ? <div className="video_container">
                        <video poster="../../media/bgvideo.png" autoPlay muted loop className="video">
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div> : null}

                </div>

            </div>
            <footer className="app_footer">
                <div className="app_container"><p>Design by </p> <p>Kuba Juras </p> <p>2020 ©</p></div>
            </footer>
        </>
    );
};

export default MainPage;