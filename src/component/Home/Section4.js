import './Section4.sass';
import img1 from './img/photo-1418065460487-3e41a6c84dc5.jpg';
import img2 from './img/photo-1483197452165-7abc4b248905.jpg';
import img3 from './img/photo-1504870712357-65ea720d6078.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Verev = (props) => (
  <svg
     data-aos="fade-left"
    className="verev"
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

const Nerqev = (props) => (
  <svg
    data-aos="fade-right"
    className="nerqev"
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

function Section4 (){
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    return(
        <section className='section4'>
            <Verev/>
            <Nerqev/>
            <img data-aos="fade-right" className='img1' src={img1} alt=''/>
            <img data-aos="fade-right" className='img2' src={img2} alt=''/>
            <img data-aos="fade-left" className='img3' src={img3} alt=''/>
        </section>
    )
}

export default Section4;