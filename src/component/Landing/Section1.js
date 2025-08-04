import "./Section1.sass";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Section1() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="section111">
      <div className="text">
        <h3
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          TRAVEL AGENCY
        </h3>
        <h1
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          Your Adventure Starts Here
        </h1>
        <p
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        >
          Image from 
        </p>
        <button data-aos="fade-up" data-aos-duration="3000" className="button">
          START PLANNING
        </button>
      </div>
    </section>
  );
}

export default Section1;
