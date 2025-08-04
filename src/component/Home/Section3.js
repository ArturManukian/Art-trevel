import "./Section3.sass";
import img from "./img/452545.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Verev = (props) => (
  <svg
    data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="500"
    className="guin klor"
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
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-offset="0"
    className="guin shrjan"
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

const Aliq = (props) => (
  <svg
    data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="500"
    className="guin content"
    viewBox="0 0 160 50"
    x="0px"
    y="0px"
    id="svg-c9fe"
    style={{
      enableBackground: "new 0 0 160 50",
    }}
    {...props}
  >
    <path d="M133,26.7c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,22 c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0 l-3.8,4.7C146.9,20.2,142.3,20.2,133,26.7z M133,10.8c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0 c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,6.1c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0C75.1-2,85.9-1.6,97,6.1 c11.4,8,20.3,8.3,32.2,0C140.8-2,148.4-2,160,6.1l-3.8,4.7C146.9,4.3,142.3,4.3,133,10.8z M32.2,38c11,7.6,19,8.5,31.3,0 c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0l-3.8,4.7c-9.3-6.5-13.9-6.5-23.3,0 c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,38 C11.2,30.2,20.6,29.9,32.2,38z" />
  </svg>
);

function Section3() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="section3">
      <div className="text">
        <h1 data-aos="fade-down">Good Trips Only</h1>
        <p data-aos="fade-down">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </p>
        <button data-aos="fade-down">LEARN MORE</button>
      </div>
      <div className="nkarner">
        <Nerqev />
        <Verev />
        <Aliq />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="img"
          src={img}
          alt=""
        />
      </div>
    </section>
  );
}
export default Section3;
