import './Section1.sass';
import img from './img/rrr copy.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section1(){
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    return(
        <section className='section11'>
            <h2 data-aos="fade-down">TRAVEL AGENCY</h2>
                <img data-aos="fade-left" className='img' src={img} alt=''/>
                <h1 data-aos="fade-right">ABOUT US</h1>
                <p data-aos="fade-up">Image from </p>
        </section>
    )
}
export default Section1;
