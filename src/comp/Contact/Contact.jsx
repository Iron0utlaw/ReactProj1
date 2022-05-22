import React from 'react'
import './contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zrh1kvl', 'template_ggrb9r9', form.current, 'HxjB88z2Zyo2toMPL')
    e.target.reset();
  };

  
  return (
    <section id='contact'>
        <div className="heading">
            <h1>Contact Me</h1>
        </div>
<div className="contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <SiGmail className='contact-icon'/>
            <h4>Email</h4>
            <h5>harsh.varshney.ug21@nsut.ac.in</h5>
            <a href="mailto:harsh.varshney.ug21@nsut.ac.in" target="_blank">Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91-8130460678</h5>
            <a href="https://api.whatsapp.com/send?phone=+918130460678" target="_blank">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" required rows="7" placeholder='Your Message'></textarea>
          <button type='submit'>Send Message</button>
        </form>
        </div>
    </section>
  )
}

export default Contact