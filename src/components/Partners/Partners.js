import React, { useEffect } from 'react';
import './partner.css';
import robina from '../../assets/1.svg';
import waltermart from '../../assets/2.svg';
import progreen from '../../assets/3.svg';
import punta from '../../assets/4.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Partners = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className='partner-section'>
      <div className='partner-container'>
        <div className='title'>
          <h1>Our Partners And Clients</h1>
        </div>
        <div className='partners'>
          <div className='first-picture'>
            <img src={robina} alt='URC' className='robina' />
            <img src={waltermart} alt='waltermart' className='walter' />
          </div>
          <div className='second-picture'>
            <img src={progreen} alt='progreen' className='pro' />
            <img src={punta} alt='punta' className='punta' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
