import "./Section5.sass";
import img from "./img/zuiger.jpg";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section5() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <section className="section555">
      <div className="title">
        <h1 data-aos="fade-down-right">
          The perfect vacation starts <br /> with the right travel partner
        </h1>
      </div>
      <div className="nkar">
        <img data-aos="fade-up-right" className="img" src={img} alt="" />
      </div>
      <div className="divs">
        <div className="text" data-aos="zoom-in-right">
          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Image from{" "}
          </p>
          {""}
        </div>
        <div className="text" data-aos="zoom-in-left">
          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="text klor" data-aos="zoom-in-right">
          <div className="klorak"></div>
        </div>
        <div className="text viptext" data-aos="zoom-in-left">
          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Section5;
