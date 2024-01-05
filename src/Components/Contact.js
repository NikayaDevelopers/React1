import './contact.css';

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jqahg2j', 'template_cai63tr', form.current, 'Esn8YkQECHzbZXltY')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            
            <div id="contact">
                <h1 className="contactPageTitle">Contact Us!</h1>
                <span className="contactDesc">Send us your contact details and we’ll schedule a 1-on-1 with one of our professionals.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;