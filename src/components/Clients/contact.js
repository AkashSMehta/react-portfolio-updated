import React, { useRef } from 'react';
import './contact.css';
// import Walmart from '../../assets/walmart.png';
// import Adobe from '../../assets/adobe.png';
// import Microsoft from '../../assets/microsoft.png';
// import Facebook from '../../assets/facebook.png';
// import FacebookIcon from '../../assets/facebook-icon.png';
// import TwitterIcon from '../../assets/twitter.png';
// import YoutubeIcon from '../../assets/youtube.png';
// import InstagramIcon from '../../assets/instagram.png';
import LinkedinIcon from '../../assets/linkedin-icon.webp';
import GithubIcon from '../../assets/github-icon.png';
import {Link} from 'react-scroll';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xkqjoif', 'template_tlz4e3g', form.current, 'OIFDwtTy1aIWxokh6')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contactPage'>
      {/* <div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientsDesc'>I have had the opportunity to work with a diverse group of companies.
        Some of the notable companies I have worked with includes</p>
        <div className='clientImgs'>
          <img src={Walmart} alt='client-images' className='clientImg' />
          <img src={Adobe} alt='client-images' className='clientImg' />
          <img src={Microsoft} alt='client-images' className='clientImg' />
          <img src={Facebook} alt='client-images' className='clientImg' />
        </div>
      </div> */}
      <div id='contact'>
      <h1 className='contactPageTitle'>Contact Me</h1>
      <p className='clientsDesc'>Please fill out the form below to discuss any work opportunities</p>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Your Name' name='from_name'/>
        <input type='email' className='email' placeholder='Your Email' name='from_email'/>
        <textarea className='msg' name='message' rows='5' placeholder='Your Message' />
        <button type='Submit' value='Send' className='btnSubmit'>Submit</button>
        <div className='links'>
        <Link to="">
          <button onClick={() => { window.location.href = "https://www.linkedin.com/in/akash-mehta-283229228/"; } } className='btnn'><img  src={LinkedinIcon} alt='linkedin' className='link' /></button>
        </Link>
        <Link to="">
          <button onClick={() => { window.location.href = "https://github.com/AkashSMehta"; } } className='btnn'><img src={GithubIcon} alt='github' className='link' /></button>
        </Link>
        </div>
      </form> 
      </div>
    </section>
  )
}

export default Contact