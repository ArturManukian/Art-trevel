import "./Section2.sass";
import img from "./img/2133123.jpg";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SVGComponent = (props) => (
  <svg
   data-aos="fade-down-right"
    className="u-svg-content"
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
function Section2() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="section2222">
      <div className="photograp">
        <div>
          <SVGComponent />         
          <img data-aos="fade-down-left" className="img" src={img} alt="" />
          <div  data-aos="fade-up-right" className="circle"></div>
        </div>
      </div>
      <div className="texts">
        <div className="text" data-aos="fade-up">
          <h1 data-aos="fade-left">Contact Us</h1>
          <p data-aos="fade-right" className="p">
            We are here to meet any business need and to <br/> promote your company
            online!
          </p>
          <div data-aos="fade-left" className="line"></div>
          <h2 data-aos="fade-right">
            Phone:{" "}
            <a className="number" href="#">
              1 (232) 252 55 22{" "}
            </a>
          </h2>
          <h2 data-aos="fade-left" className="hhh">
            Location:<p className="location">75 Street Sample, WI 63025</p>
          </h2>
          <h2 data-aos="fade-right">
            Mail:{" "}
            <a className="email" href="#">
              template@sample.com
            </a>
          </h2>
          <h3 data-aos="fade-left">
            Image from{" "}
          </h3>
        </div>
      </div>
    </section>
  );
}
export default Section2;
