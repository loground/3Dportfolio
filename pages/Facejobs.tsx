import Navbar from '@/components/Widgets/Navbar';
import { ImageTrailHero } from '@/components/Widgets/ImageTrailHero';
import Socials from '@/components/Widgets/Socials';
import React from 'react';
import Head from 'next/head';

const Facejob = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Modelinground</title>
        <meta name="Modeling" content="modeling" />
      </Head>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <ImageTrailHero />
      <Socials />
    </div>
  );
};

export default Facejob;
