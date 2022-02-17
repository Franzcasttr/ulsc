import React, { useEffect } from 'react';
import './services.css';
import { links } from './Content';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className='section' id='services'>
      <div className='services-container'>
        <div className='title'>
          <h1>Our Services</h1>
        </div>
        <div className='service-content'>
          {links.map((content, index) => {
            const { image, title, decs } = content;
            return (
              <article key={index} className='content-container'>
                <div className='image'>
                  <img src={image} alt='Images' />
                </div>
                <h4>{title}</h4>
                <p>{decs}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
