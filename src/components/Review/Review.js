import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './review.css';
import people from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [index, setIndex] = useState(0);
  const { name, title, image, review } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;

      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;

      return checkNumber(newIndex);
    });
  };
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(checkNumber(index + 1));
    }, 10000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <section className='review-section'>
      <div className='review-title'>
        <h1>What People Say About Us</h1>
      </div>
      <div className='review-container'>
        <div className='review-content'>
          <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
              <FaQuoteRight />
            </span>
          </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{title}</p>
          <p className='info'>{review}</p>
        </div>
        <div className='button-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
