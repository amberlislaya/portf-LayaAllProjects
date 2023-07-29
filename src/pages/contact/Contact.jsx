import React from 'react'
import {
  FaFacebookF,
  FaWhatsapp,
  FaEnvelopeOpen,
  FaLinkedin,
  FaYoutubeSquare,
  FaGithubAlt,
  FaDribbble,
  FaInstagram,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi'
import './contact.css'




const Contact = () => {
  return (
< section className = "contact section" >
    <h2 className='section__title'>Get in <span>Touch</span>
	</h2>

<div className="contact__container container grid">
<div className="contact__data">
 <h3 className="contact__title">Don't be Shy !</h3>
	
<p className='contact__description'>
 Feel free to get in touch with me. I am always open to discussing new projects,
 creative ideas or opportunities to be part of your visions.
</p>

<div className="contact__info">
<div className="info__item">
 <FaEnvelopeOpen className='info__icon'/>

<div>
<span className="info__title">Mail me</span>
<h4 className="info__desc">laya.playapps@gmail.com</h4>
</div>
</div>

<div className="info__item">
<a href='https://wa.me/+5491122781197'><FaWhatsapp className='info__icon'/></a>

<div>
<span className="info__title">Call me</span>
<h4 className="info__desc">+54 9 11 22781197</h4>
</div>
</div>
</div>

<div className="contact__socials">
<a href="https://facebook.com/amberlis.laya.9" className="contact__social-link" >
  <FaFacebookF/>
</a>

<a href="https://www.instagram.com/soyamberlis/" className="contact__social-link" >
  <FaInstagram/>
</a>

<a href="https://linkedin.com/in/amberlis-laya-m" className="contact__social-link" >
  <FaLinkedin/>
</a>

<a href="https://www.youtube.com/@laya.developer/featured" className="contact__social-link" >
  <FaYoutubeSquare/>
</a>

<a href="https://dribble.com" className="contact__social-link" >
	<FaDribbble/>
</a>

<a href="https://github.com/amberlislaya" className="contact__social-link" >
  <FaGithubAlt/>
</a>
</div>


</div>

<form className="contact__form" action='/send-email' method='post'>
<div className="form__input-group">
<div className="form__input-div">
<input type="text" 
	placeholder='Your Name' 
 	className="form__control" />
</div>

<div className="form__input-div">
<input type="email" 
   placeholder='Your Email' 
   className="form__control" />
</div>

<div className="form__input-div">
<input type="text" 
   placeholder='Your Subject' 
   className="form__control" />
</div>



</div>

<div className="form__input-div">
	<textarea placeholder='Your Message'
		className="form__control textarea">
	</textarea>
</div>

<button className="button">
  Send Message 
<span className="button__icon contact__button-icon">
<FiSend/>
</span>
</button>
</form>
</div>
</section>

)
}



export default Contact






