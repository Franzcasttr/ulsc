import React from 'react';
import './styles/Error/error.css';
const Error = () => {
  return (
    <>
      <div className='error-page'>
        <h1>404 Error Page</h1>
        <p className='zoom-area'>Opps! Something went wrong.</p>
        <section className='error-container'>
          <span>4</span>
          <span>
            <span className='screen-reader-text'>0</span>
          </span>
          <span>4</span>
        </section>
        <div className='link-container'>
          <a href='/' className='more-link'>
            Go back
          </a>
        </div>
      </div>
    </>
  );
};

export default Error;
