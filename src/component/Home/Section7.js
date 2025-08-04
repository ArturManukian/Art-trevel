import './Section7.sass';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section7(){
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    return(
        <section className='section7'>
            <h1 data-aos="fade-down">Enjoy the perfect blend of adventure tours</h1>
            <div className='border' data-aos="fade-up">
                <div className='radius'>
                    <img className='partret' src={img1} alt='#'/>
                    <h2>Mountains</h2>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <a href='#'>MORE</a>
                </div>
                <div className='radius'>
                    <img className='partret' src={img2} alt='#'/>
                    <h2>Waterfalls</h2>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <a href='#'>MORE</a>
                </div>
                <div className='radius'>
                    <img className='partret' src={img3} alt='#'/>
                    <h2>Road Travel</h2>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <a href='#'>MORE</a>
                </div>
            </div>
            <p data-aos="fade-up" className='aline'>Image from</p>
        </section>
    )
}

export default Section7;