import "./Section2.sass";
import img1 from "./img/palma.jpg";
import img2 from "./img/childs.jpg";
import img3 from "./img/people.jpg";
import img4 from "./img/karabl.jpg";
import img5 from "./img/shlyapanerov.jpg";
import img6 from "./img/hecanvord.jpg";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section2() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <section className="section222">
      <h1 data-aos="fade-down">Vacation Adventures Take Many Forms</h1>
      <div className="cards">
        <div className="card" data-aos="fade-down">
          <p className="title">Ocean Cruising</p>
          <p>Sample text. Click to select the Text <br/> Element.</p>
          <div className="gic"></div>
          <img className="img" src={img1} alt=""/>
        </div>
        <div className="card" data-aos="fade-down">
          <p className="title">Land Adventures</p>
          <p>Sample text. Click to select the Text <br/> Element.</p>
          <div className="gic"></div>
          <img className="img" src={img2} alt=""/>
        </div>
        <div className="card" data-aos="fade-down">
          <p className="title">Nearby Adventures</p>
          <p>Sample text. Click to select the Text <br/> Element.</p>
          <div className="gic"></div>
          <img className="img" src={img3} alt=""/>
        </div>
        <div className="card" data-aos="fade-up">
          <p className="title">River cruising</p>
          <p>Sample text. Click to select the Text <br/> Element.</p>
          <div className="gic"></div>
          <img className="img" src={img4} alt=""/>
        </div>
        <div className="card" data-aos="fade-up">
          <p className="title">Romantic Tours</p>
          <p>Sample text. Click to select the Text <br/> Element.</p>
          <div className="gic"></div>
          <img className="img" src={img5} alt=""/>
        </div>
        <div className="card" data-aos="fade-up">
          <p className="title">Multi-Adventure Tours</p>
          <p>Sample text. Click to select the Text <br/> Element.</p>
          <div className="gic"></div>
          <img className="img" src={img6} alt=""/>
        </div>
      </div>
    </section>
  );
}
export default Section2;
