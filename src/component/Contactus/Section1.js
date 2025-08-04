import './Section1.sass'
import img from './img/rrr.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section1(){
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 
    return(
        <div>
            <section className='section1111'>
                <h2 data-aos="fade-down-right">TRAVEL AGENCY</h2>
                <img data-aos="fade-down-left" className='img' src={img} alt=''/>
                <h1 data-aos="fade-right">Ready to Start Your <br/> Next Adventure?</h1>
                <h3 data-aos="fade-left">Duis aute irure dolor in reprehenderit in voluptate velit esse.</h3>
                <button data-aos="fade-up-right">CONTACT US</button>
                <p data-aos="fade-up-left">Image from</p>
            </section>
        </div>
    )
}
export default Section1;