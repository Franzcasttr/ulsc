import React from 'react';
import { useAppContext } from '../../context/context';
import './footer.css';

const Menu = () => {
  return (
    <>
      <p>
        <a href='/about'>About</a>
      </p>
      <p>
        <a href='https://www.facebook.com/'>Services</a>
      </p>
    </>
  );
};
const Followus = () => {
  return (
    <>
      <p>
        <a href='https://www.facebook.com/'>Facebook</a>
      </p>
      <p>
        <a href='https://www.instagram.com/'>Instagram</a>
      </p>
      <p>
        <a href='https://twitter.com/'>Twitter</a>
      </p>
    </>
  );
};
const Footer = () => {
  const { contactOpen } = useAppContext();
  return (
    <footer className='footer-section'>
      <div className='footer-container'>
        <div className='contact'>
          <div className='interested'>
            <h1>Interested?</h1>
            <p>
              Contacts us for your free consultation. We are looking forward to
              working with you!
            </p>
          </div>
          <div className='lets-talk'>
            <button onClick={contactOpen}>Contact Us</button>
          </div>
        </div>
        <div className='footer-details'>
          <div className='address'>
            <div className='address-container'>
              <div className='logo'>
                <a href='/'>ULSC</a>
              </div>
              <h4>
                Address:
                <br /> Brgy. Adobong, Manok, Cagayan, Philippines
              </h4>
              <p>Tel: +63912-34567-890</p>
            </div>

            <div className='contact-container'>
              <div className='about-us'>
                <h4>About us</h4>
                <Menu />
              </div>
              <div className='follow-us'>
                <h4>Folow Us</h4>
                <Followus />
              </div>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <p>Made and craft by : Francis Castro 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
