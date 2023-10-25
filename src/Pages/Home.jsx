import React, { useEffect, useState } from 'react';
import Topnav from '../Shared/Topnav';

import Hero from './Hero';
import Brandcards from './Brands/Brandcards';
import Benefits from './Benefits/Benefits';
import Bodycarousel from './Bodycarousel/Bodycarousel';

const Home = () => {






  return (
    <div>
      <Hero />
      <Brandcards />
      <div className='max-w-7xl mx-auto py-10'>
        <Benefits />
      </div>
      {/* <Bodycarousel/> */}

    </div>
  );
};

export default Home;