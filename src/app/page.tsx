
"use client";

import React from 'react';
import SearchCars from './SearchCars';
import SellCarSection from './SellCarSection';
import FeaturedCars from './Cars';

const Page = () => {
  return (
    <div>
      <SearchCars />
      <SellCarSection />
      <FeaturedCars />
    </div>
  );
};

export default Page;
