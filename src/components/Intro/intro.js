import React from 'react';
import './intro.css';
import bg from '../../assets/image.jpg';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello!</span>
        <span className='introText'>I'm <span className='introName'>Akash Mehta,</span><br/>Web Developer.</span>
        <p className='introPara'>I'm an aspiring and skilled web developer with experience in creating<br/>visually appealing and user-friendly websites.</p>
        <Link to="">
          <button onClick={() => { window.location.href = "https://drive.google.com/file/d/1sWKP-r5Rk-7DunqhLX8r4g2FlHdIXdDK/view"; } } className='btn'><img src={btnImg} alt='hire-me-logo' className='btnImg'/>Download CV</button>
        </Link>
      </div>
      <img src={bg} alt='profile-image' className='bg'/>
    </section>
  )
}

export default Intro