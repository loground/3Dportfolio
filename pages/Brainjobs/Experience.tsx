import { MarketingFeatures } from '@/components/Features/Marketing/MarketingFeatures';
import Navbar from '@/components/Widgets/Navbar';
import Head from 'next/head';
import React from 'react';

const OtherJobs = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Experienceground</title>
        <meta name="A bit of experience" content="some points from my experience" />
      </Head>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <MarketingFeatures />
    </div>
  );
};

export default OtherJobs;
