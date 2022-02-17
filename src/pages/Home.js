import React, { useEffect } from 'react';
import { CTA, Footer, Partners, Review, Services } from '../components';

const Home = () => {
  return (
    <>
      <CTA />
      <Services />
      <Review />
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
