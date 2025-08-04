import './Section6.sass';
import img from './img/rr.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section6(){
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    return(
        <section className='section6'>
                <div className='text'>
                    <h1 data-aos="fade-down-right">Small group travel that's good all over</h1>
                </div>
                <div className='body'>
                    <div className='texting' data-aos="fade-up-right">
                        <p>Sit amet massa vitae tortor condimentum lacinia quis. Ornare arcu dui vivamus arcu felis bibendum ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non curabitur. Magna fringilla urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel risus commodo viverra. Ipsum a arcu cursus vitae congue. Imperdiet dui accumsan sit amet nulla facilisi. </p>
                        <button>READ MORE</button>
                    </div>
                </div>
                <div className='nkar'>
                    <img data-aos="fade-down-left" className='im' src={img} alt=''/>
                    <p data-aos="fade-up-left" className='link'>Images from</p>
                </div>
        </section>
    )
}

export default Section6;