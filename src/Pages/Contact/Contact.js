import React, {useState} from 'react';
import "../../scss/_contact.scss";
import Buttons2 from "../../components/Buttons2/Buttons2";
import {useForm} from "react-hook-form";

const Contact = () => {
    const {register, handleSubmit, errors} = useForm(
        {
            defaultValues: {},
        }
    );
    const [success, setSuccess] = useState(false);
    const onSubmit = (data,e) => {

        const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";
        fetch(`${API}`, {
            method: "POST"
            ,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
        setSuccess(true);
        e.target.reset();
    }

    return (
        <div className="portfolio_container">
            <header className="portfolio_header">
                <Buttons2/>
            </header>
            <div className="flex_container">
                <div className="el-1">
                    <h1>CONTACT</h1>
                </div>
                <div className="el-2"></div>
                <div className="el-3">
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <div className="form1">
                            <h1>Skontaktuj się z nami</h1>

                            {success === true ? <h2 style={{color: "green", margin: "1em"}}>Wiadomość została wysłana!<br/> Wkrótce się skontaktujemy!</h2> : null}
                        </div>
                        <div className="input_container">
                            <label>
                                <p>Wpisz swoję imię</p>
                                <input name="name" ref={register({required: true, minLength: 3})}/>
                                {errors.name && <span style={{fontWeight: "bold", color: "red"}}>Imię jest za krótkie</span>}
                            </label>
                            <label>
                                <p>Wpisz swój email</p>
                                <input name="email"
                                       ref={register({pattern: /^(([^<>()[\],;:\s@]+(\.[^<>()\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i})}/>
                                {errors.email && <span style={{fontWeight: "bold", color: "red"}}>Wpisz prawdiłowy email</span>}
                            </label>
                        </div>
                        <div className="textarea_container">
                            <label>
                                <p>Wpisz treść wiadomości</p>
                            </label>
                            <textarea name="message" ref={register({required: true, minLength: 120})}/>
                            {errors.textarea && <span style={{fontWeight: "bold", color: "red"}}>Wiadomość musi mieć conajmniej 120 znaków</span>}
                            <button type="submit">Wyślij</button>
                        </div>
                    </form>
                </div>
                <div className="el-4"></div>
            </div>
        </div>
    );
};

export default Contact;