import React from 'react';
import './about.css';
import UID from '../../assets/ui-design.png';
import WD from '../../assets/website-design.png';
import AD from '../../assets/app-design.png';

const About = () => {
  return (
    <section id = 'about'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I'm a skilled and passionate web designer with experience in creating 
        visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye 
        for detail. I am proficient in HTML, CSS, JavaScript and React JS</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WD} alt='WD' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                </div>
            </div>
            <div className='skillBar'>
                <img src={UID} alt='UID' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AD} alt='AD' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Responsive design</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About