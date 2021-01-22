import React, {useState} from 'react';
import "../../scss/_contact.scss";
import Buttons2 from "../../components/Buttons2/Buttons2";
import {useForm} from "react-hook-form";
import * as emailjs from 'emailjs-com';

const Contact = () => {
    const {register, handleSubmit, errors} = useForm(
        {
            defaultValues: {},
        }
    );
    const [success, setSuccess] = useState(false);

    const onSubmit = (data, e) => {


        emailjs.sendForm('service_w4elsxo', 'template_997zjcb', '#myForm', 'user_dpOFv8KtlDdLY5evgn2Ih')


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
                    <form onSubmit={handleSubmit(onSubmit)} className="form" id="myForm">
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
                                <span style={{fontWeight: "bold", color: "red"}}>Name is too short</span>}
                            </label>
                            <label>
                                <p>Email</p>
                                <input name="email"
                                       ref={register({pattern: /^(([^<>()[\],;:\s@]+(\.[^<>()\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i})}/>
                                {errors.email &&
                                <span style={{fontWeight: "bold", color: "red"}}>Email is not correct</span>}
                            </label>
                            <label>
                                <p>Message</p>
                            </label>
                            <textarea name="message" ref={register({required: true, minLength: 20})}/>
                            {errors.message && <span style={{fontWeight: "bold", color: "red"}}>Min. 20 letters</span>}
                            <button type="submit">SEND</button>
                        </div>
                    </form>
                </div>
                <div className="el-4"></div>
            </div>
        </div>
    );
};

export default Contact;