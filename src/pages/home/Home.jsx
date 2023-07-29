import React from 'react'
import './home.css';
import Profile from '../../assets/foto4.jpeg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Home = () => {
  return (
<section className="home section grid">
   <img src={Profile} alt="" className='home__img' />
<div className="home__content">
<div className="home__data">
   <h1 className='home__title'><span>I'm Amberlis Laya.</span> Full Stack Developer (Frontend)</h1>
   <p className="home__description">Hello! I am a passionate Frontend programmer with a young and curious spirit, eager to learn and excel in the world of technology. Born in Venezuela and currently based in Argentina, I have a multicultural perspective that enriches my approach to web development.
   
	 <br/>
	 <br/>I firmly believe that collaboration and teamwork are the key to achieving extraordinary results. I am always excited to participate in innovative 
	 and challenging projects that allow me to grow as a professional and contribute my passion for programming.
   My motto is "learn, create, grow".
	 <br/>
  <br/>
   Thanks for visiting my portfolio! I am open to new opportunities and collaborations, so do not hesitate to contact me. 
	 Together, we can take the user experience to a new level and create impactful solutions in the digital world.
  <br/>
	<br/>
   I hope to hear from you soon!
	 <br/>
	 <br/>
   Amberlis Laya Madera</p>

<Link to='/about' className='button'>
    More About Me <span className='button__icon'>
<FaArrowRight/></span>
</Link>
</div>
</div>

<div className="color__block">

</div>
</section>
)
}

export default Home;