import './Section4.sass';
import img from './img/axchikner.jpg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section4(){
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
    return(
        <section className='section444'>
            <div className='text'>
                <h1 data-aos="zoom-out-right"> <font color='#F58D54'>5% </font> off Summer Tours</h1>
                <p data-aos="zoom-out-right">Conveniently book your personal appointment online. Choose your preferred date, time, service, Stylist or Barber, and receive an email confirming all the details.</p>
                <p data-aos="zoom-out-right">Image from </p>
                <button data-aos="zoom-out-right">LEARN MORE!</button>

            </div>
            <div className='nkar' data-aos="zoom-out-left">
                <img className='img' src={img} alt=''/>
                <div className='klor'></div>
            </div>
        </section>
    )
}

export default Section4;