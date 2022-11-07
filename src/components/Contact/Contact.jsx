import React from 'react'
import {AiOutlineMail} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import '../Contact/Contact.css';


const Contact = () => {
  return (
    <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact_container">
      
          <div className="contact_options">
            <article className="contact_option">
              <AiOutlineMail className='contact_icon'/>
              <h4>Email</h4>
              <h5>coderishiraj@gmail.com</h5>
              <a href="mailto:coderishiraj@gmail.com" target='_blank'>Send a Mail</a>
            </article>

            <article className="contact_option">
              <BsWhatsapp className='contact_icon'/>
              <h4>WhatsApp</h4>
              <h5>+91 78*******4</h5>
              <a href="https://api.whatsapp.com/send?phone=+917806099514" target='_blank'>Text Me !!</a>
            </article>
          </div>

          <form action="">
            <input type="text" name="name" placeholder="Your Name Please" required />
            <input type="email" name="email" placeholder="Enter your Email address" required />
            <textarea name="message" rows="7" placeholder="Tell me! How can I help you?" required />
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact