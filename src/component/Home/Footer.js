import './Footer.sass';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer(){
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    return(
        <footer className='footer11'>
            <div className='box'>
                <h1 data-aos="fade-right">Sample text. Click to select the text box. Click again or double<br/> click to start editing the text.</h1>
            </div>
            <div className='site'>
                <p>This site was created with the </p>
            </div>
        </footer>
    )
}
export default Footer;