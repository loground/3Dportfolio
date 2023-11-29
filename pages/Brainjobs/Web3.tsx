import FloatingText from '@/components/Features/Web3/FloatingText';
import Navbar from '@/components/Widgets/Navbar';
import Head from 'next/head';
import React from 'react';

const Brainjobs = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Web3ground</title>
        <meta name="Brains" content="jobs done by brains" />
      </Head>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div>
        <FloatingText />
      </div>
    </div>
  );
};

export default Brainjobs;
