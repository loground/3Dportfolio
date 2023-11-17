import FloatingText from '@/components/Features/Web3/FloatingText';
import Navbar from '@/components/Widgets/Navbar';
import React from 'react';

const Brainjobs = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div>
        <FloatingText />
      </div>
    </div>
  );
};

export default Brainjobs;
