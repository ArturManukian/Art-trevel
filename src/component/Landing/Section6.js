import './Section6.sass';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section6() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="section666">
      <h1 data-aos="fade-down">Get in touch</h1>
      <div className="input">
        <input data-aos="fade-down-right" className="tex" type="text" />
        <input data-aos="fade-down-left"  className="tex" type="email" placeholder="Enter a valid email address" />
      </div>
      <div className="bigtexts">
        <textarea data-aos="fade-up-left" className="bigtext" placeholder="Enter your message" />
      </div>
      <button data-aos="fade-up-right" className='button'>SUBMIT</button>
    </div>
  );
}
export default Section6;