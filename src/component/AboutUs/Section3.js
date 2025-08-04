import "./Section3.sass";
import img1 from "./img/3.jpg";
import img2 from "./img/37.jpg";
import img3 from "./img/fd.jpg";
import img4 from "./img/lifestyle-people-living-e.jpg";
import img5 from "./img/t5.jpg";
import img6 from "./img/r6.jpg";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section3() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="section33">
      <h1 data-aos="fade-right">Outdoor Recreation</h1>
      <p data-aos="fade-left">
        Sample text. Click to select the text box. Click again or double click
        to start <br/> editing the text.
      </p>
      <div className="boxing">
        <div className="box">
          <img className="img" src={img1} alt="" />
          <div className="text">
            <h1>SAMPLE HEADLINE</h1>
            <p>Sample Text</p>
          </div>
          
        </div>
        <div className="box">
          <div className="text">
            <h1>SAMPLE HEADLINE</h1>
            <p>Sample Text</p>
          </div>
          <img className="img" src={img2} alt="" />
        </div>
        <div className="box">
          <div className="text">
            <h1>SAMPLE HEADLINE</h1>
            <p>Sample Text</p>
          </div>
          <img className="img" src={img3} alt="" />
        </div>
        <div className="box">
          <img className="img" src={img4} alt="" />
        </div>
        <div className="box">
          <img className="img" src={img5} alt="" />
        </div>
        <div className="box">
          <img className="img" src={img6} alt="" />
        </div>
      </div>
      <p className="teq" data-aos="fade-left">
        Immage from  </p>
      <button data-aos="fade-right">MORE PHOTOS</button>
    </section>
  );
}

export default Section3;
