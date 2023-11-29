import BurningText from '@/components/Features/Marketing/BurningText';
import Head from 'next/head';
import React from 'react';

const MarketingJobs = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Marketinground</title>
        <meta name="Marketing jobs" content="some experience from marketing" />
      </Head>
      <BurningText />
    </div>
  );
};

export default MarketingJobs;
