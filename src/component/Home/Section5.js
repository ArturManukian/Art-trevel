import './Section5.sass';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section5(){
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    return(
        <section className='section5'>
            <h1 data-aos="fade-right">Backpacking Trips</h1>
            <p data-aos="fade-left">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
            <p className='mini' data-aos="fade-right">Images from</p>
            <button data-aos="fade-left">READ MORE</button>
        </section>
    )
}

export default Section5;