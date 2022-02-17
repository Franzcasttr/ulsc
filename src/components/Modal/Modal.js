import React, { useEffect } from 'react';
import { HiOutlineXCircle } from 'react-icons/hi';
import './modal.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAppContext } from '../../context/context';

const Modal = () => {
  const { iscontactOpen, contactClose } = useAppContext();
  const handleSubmit = (e) => {};

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className={`${
        iscontactOpen ? 'modal-section show-modal' : 'modal-section'
      }`}>
      <div className='modal-container'>
        <div className='close-modal' onClick={contactClose}>
          <HiOutlineXCircle />
        </div>
        <h1>Let's talk about what service you want.</h1>
        <form
          action='https://formspree.io/f/mjvlywed'
          method='POST'
          onSubmit={handleSubmit}>
          <div className='form-input'>
            <input type='text' name='name' placeholder='Enter your name?' />

            <input
              type='email'
              name='_replyto'
              placeholder='Enter your email?'
            />

            <textarea name='message' placeholder='Enter your message' />

            <button type='submit'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Modal;
