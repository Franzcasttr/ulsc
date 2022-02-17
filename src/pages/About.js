import React from 'react';
import puzzle from '../assets/puzzle.svg';
import { Footer } from '../components';
import './styles/About/about.css';
const About = () => {
  return (
    <section className='about-section'>
      <div className='section-container'>
        <div className='about-cta'>
          <div className='left'>
            <h2>
              Giving The Best
              <br />
              Quality Of Work
            </h2>
            <p>
              Quality of work attracts more clients and earn their trust, Big or
              small company we comes with a great performance.
            </p>
          </div>
          <div className='right'>
            <img src={puzzle} alt='Puzzle' />
          </div>
        </div>
        <div className='mission-container'>
          <div className='mission-vission'>
            <div className='mission'>
              <h3>Mission</h3>
              <p>
                Giving the best working experience for our clients and partners
                not only by giving them quality of work but helping them to grow
                their company.
              </p>
            </div>
            <div className='vission'>
              <h3>Vission</h3>
              <p>
                Our vission is to be one of the top service provider, and be the
                example to the world.
              </p>
            </div>
          </div>
          <div className='qoute'>
            <h3>
              Quality is more important than quantity. One home run is much
              better than two doubles.
            </h3>
            <p>-Steve Jobs</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
