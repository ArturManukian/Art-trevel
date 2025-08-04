import "./Section1.sass";
import img from "./img/rrr.png";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section1() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="section1" >
      <h2 data-aos="zoom-in">TRAVEL AGENCY</h2>
      <img className="img" src={img} alt="" data-aos="zoom-in"/>
      <h1 data-aos="zoom-in">
        Wonderful tours
      </h1>
      <h3 data-aos="zoom-in">Duis aute irure dolor in reprehenderit in voluptate velit esse.</h3>
      <button data-aos="zoom-in">READ MORE</button>
      
    </section>
  );
}

export default Section1;
