import "./Section3.sass";
import img from "./img/et43534.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SVGComponent = (props) => (
  <svg
    data-aos="fade-left"
    data-aos-easing="ease-in-sine"
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

const Component = (props) => (
  <svg
    data-aos="fade-right"
    data-aos-easing="ease-in-sine"
    className="svg-content"
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

function Section3() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="section333">
      <img
        data-aos="fade-down-right"
        data-aos-easing="ease-in-sine"
        className="img"
        src={img}
        alt=""
      />
      <SVGComponent />
      <Component />
      <div
        className="klor"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
      ></div>
      <div className="text" data-aos="fade-left" data-aos-easing="ease-in-sine">
        <h1>International Land Adventures</h1>
        <p>
          Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus
          pellentesque eu tincidunt tortor aliquam nulla.
        </p>
        <button>CONTACT US</button>
      </div>
    </section>
  );
}

export default Section3;
