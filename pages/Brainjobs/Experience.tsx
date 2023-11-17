import { MarketingFeatures } from '@/components/Features/Marketing/MarketingFeatures';
import Navbar from '@/components/Widgets/Navbar';
import React from 'react';

const OtherJobs = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <MarketingFeatures />
    </div>
  );
};

export default OtherJobs;
