import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio1.PNG';
import Portfolio2 from '../../assets/portfolio2.PNG';
import Portfolio3 from '../../assets/portfolio3.PNG';
import Portfolio4 from '../../assets/portfolio4.PNG';
import Portfolio5 from '../../assets/portfolio5.PNG';
import Portfolio6 from '../../assets/portfolio6.PNG';
import {Link} from 'react-scroll';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve
        their goals and create a strong online presence.</span>
        <div className='worksImgs'>
        <Link to="">
          <button onClick={() => { window.location.href = "https://deerndoe.com/"; } } className='btnn'>
            <img src={Portfolio1} alt='portfolio-images' className='worksImg' />
          </button>
        </Link>
        <Link to="">
          <button onClick={() => { window.location.href = "https://tap1ce.com/home"; } } className='btnn'>
            <img src={Portfolio2} alt='portfolio-images' className='worksImg' />
          </button>
        </Link>
        <Link to="">
          <button onClick={() => { window.location.href = "https://maxrichrealty.com/"; } } className='btnn'>
            <img src={Portfolio3} alt='portfolio-images' className='worksImg' />
          </button>
        </Link>
        <Link to="">
          <button onClick={() => { window.location.href = "https://viryavillas.in/"; } } className='btnn'>
            <img src={Portfolio4} alt='portfolio-images' className='worksImg' />
          </button>
        </Link>
        <Link to="">
          <button onClick={() => { window.location.href = "https://susvadhyayabysania.com/"; } } className='btnn'>
            <img src={Portfolio5} alt='portfolio-images' className='worksImg' />
          </button>
        </Link>
        <Link to="">
          <button onClick={() => { window.location.href = "https://pdrworld.com/"; } } className='btnn'>
            <img src={Portfolio6} alt='portfolio-images' className='worksImg' />
          </button>
        </Link>
        </div>
        <button className='workBtn'>See more</button>
    </section>
  )
}

export default Works
