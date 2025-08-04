import './Section8.sass';
import img from './img/345346.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Verev = (props) => (
  <svg
    className="guin"
    viewBox="0 0 160 160"
    x="0px"
    y="0px"
    id="svg-6487"
    style={{
      enableBackground: "new 0 0 160 160",
    }}
    {...props}
  >
    <path d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80 s80-35.8,80-80S124.2,0,80,0L80,0z" />
  </svg>
);

function Section8() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className='section8'>
      <div className='background'>
        <Verev data-aos="fade-down" />
        <div className='klan' data-aos="zoom-in" data-aos-delay="300"></div>
        <img className='imj' src={img} alt='' data-aos="fade-up" data-aos-delay="600"/>
        <div className='texts' data-aos="fade-left" data-aos-delay="900">
          <h1>Your adventure starts here</h1>
          <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too.</p>
          <p className='link'>Image from</p>
          <button>READ MORE</button>
        </div>
      </div>
    </section>
  );
}

export default Section8;
