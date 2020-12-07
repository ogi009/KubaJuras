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
    const onSubmit = (data, e) => {

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
                    <h1 className="logo-2">CONTACT</h1>
                </div>
                <div className="el-2"></div>
                <div className="el-3-contact">
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <div className="form1">
                            <h1>"Get in touch"</h1>
                            <h2>Do not hesitate to contact me by email: <p>kubajuras86@gmail.com</p> or use the form</h2>
                            {success === true ?
                                <h2 style={{color: "green", margin: "1em"}}>Message sent!<br/> Thank You!</h2> : null}
                        </div>
                        <div className="input_container">
                            <label>
                                <p>Name</p>
                                <input name="name" ref={register({required: true, minLength: 3})}/>
                                {errors.name &&
                                <span style={{fontWeight: "bold", color: "red"}}>Imię jest za krótkie</span>}
                            </label>
                            <label>
                                <p>Email</p>
                                <input name="email"
                                       ref={register({pattern: /^(([^<>()[\],;:\s@]+(\.[^<>()\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i})}/>
                                {errors.email &&
                                <span style={{fontWeight: "bold", color: "red"}}>Wpisz prawdiłowy email</span>}
                            </label>
                            <label>
                                <p>Message</p>
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