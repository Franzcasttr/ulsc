import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cta.css';
import Construction from '../../assets/construction.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAppContext } from '../../context/context';
const CTA = () => {
  const { contactOpen } = useAppContext();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className='section-cta'>
      <div className='container'>
        <div className='cta-content'>
          <div className='cta-section'>
            <h2>
              Find The Perfect
              <br /> Service You <br /> Want Here
            </h2>
            <p>
              We provide the best services to over 500 big companies in the
              Philippines. Want to be part and grow your business with us? Click
              the link below.
            </p>
            <div className='lets-talk'>
              <button onClick={contactOpen}>Let's talk</button>
              {/* <Link
                className='link'
                to={{
                  pathname: '/contact',
                  state: { modal: true },
                }}>
                Let's talk
              </Link> */}
            </div>
          </div>
          <div className='cta-image'>
            <img src={Construction} alt='construction' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
